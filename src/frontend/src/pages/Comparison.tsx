import { GraphBuilder } from "@/components/GraphBuilder";
import { InputEffectsTable } from "@/components/InputEffectsTable";
import { OutputRangesTable } from "@/components/OutputRangesTable";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useGetAllMetrics } from "@/lib/api";
import {
  ALL_METRIC_IDS,
  COMPARISON_METRICS,
  METRIC_ROWS,
  SYSTEMS,
} from "@/lib/data";
import type { ComparisonMetric } from "@/types";
import {
  BarChart2,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  Download,
  GitCompareArrows,
  LineChart as LineChartIcon,
  SlidersHorizontal,
  TrendingUp,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// ─── constants ───────────────────────────────────────────────────────────────

const ALL_SYSTEM_IDS = [
  "soldier-pile",
  "secant-pile",
  "sheet-pile",
  "tangent-pile",
  "micropile",
  "diaphragm-wall",
] as const;

const SYSTEM_NAME: Record<string, string> = {
  "soldier-pile": "Soldier Pile",
  "secant-pile": "Secant Pile",
  "sheet-pile": "Sheet Pile",
  "tangent-pile": "Tangent Pile",
  micropile: "Micropile",
  "diaphragm-wall": "Diaphragm Wall",
};

const SYSTEM_COLOR: Record<string, string> = {
  "soldier-pile": "hsl(195 60% 52%)",
  "secant-pile": "hsl(48 65% 52%)",
  "sheet-pile": "hsl(280 45% 58%)",
  "tangent-pile": "hsl(130 40% 50%)",
  micropile: "hsl(310 50% 58%)",
  "diaphragm-wall": "hsl(22 65% 58%)",
};

// Rating → cell style
const RATING_CLASS: Record<string, string> = {
  best: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  good: "bg-emerald-500/8 text-emerald-400 border-emerald-500/20",
  moderate: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  poor: "bg-red-500/10 text-red-400 border-red-500/20",
  worst: "bg-red-500/20 text-red-300 border-red-500/35",
  neutral: "bg-muted/30 text-muted-foreground border-border/30",
};

const WATER_SCORE: Record<string, number> = {
  Excellent: 4,
  Good: 3,
  Moderate: 2,
  "Poor\u2013Moderate": 1.5,
  Poor: 1,
};

function parseCostMin(s: string): number {
  const m = s.match(/(\d[\d,]*)/);
  return m ? Number.parseInt(m[1].replace(",", ""), 10) : 0;
}

function parseCostMax(s: string): number {
  const nums = s.match(/(\d[\d,]+)/g);
  if (!nums || nums.length < 2) return parseCostMin(s);
  return Number.parseInt(nums[nums.length - 1].replace(",", ""), 10);
}

const INSIGHTS = [
  {
    title: "Deepest Capable",
    value: "Diaphragm Wall",
    note: "Up to 40 m retained height, 5\u201325 mm deflection. Best for sensitive urban adjacencies.",
  },
  {
    title: "Best Water Control",
    value: "Diaphragm Wall / Secant Pile",
    note: "Effectively zero groundwater inflow when correctly constructed; handles 30+ m heads.",
  },
  {
    title: "Most Economical",
    value: "Soldier Pile Wall",
    note: "$200\u2013400/m\u00b2. Optimal for temporary support in competent soils above water table.",
  },
  {
    title: "Fastest Installation",
    value: "Sheet Pile Wall",
    note: "1\u20133 weeks with vibratory hammer in soft soils. 2\u20134 days mobilization.",
  },
  {
    title: "Restricted Access",
    value: "Micropile Wall",
    note: "75\u2013300 mm diameter, \u22652 m headroom only. Ideal for underpinning & karst sites.",
  },
] as const;

// ─── CSV export ───────────────────────────────────────────────────────────────

function exportCSV(
  metrics: ComparisonMetric[],
  selectedSystems: string[],
  selectedRows: string[],
) {
  const sysIds = selectedSystems;
  const headers = ["Feature", ...sysIds.map((s) => SYSTEM_NAME[s] ?? s)];
  const rows = METRIC_ROWS.filter((r) => selectedRows.includes(r.id)).map(
    (mrow) => [mrow.label, ...sysIds.map((s) => mrow.values[s] ?? "")],
  );
  const csv = [headers, ...rows]
    .map((r) => r.map((c) => `"${c}"`).join(","))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "excavation-comparison.csv";
  a.click();
  URL.revokeObjectURL(url);
  // keep metrics param to satisfy linter
  void metrics;
}

// ─── sort hook ────────────────────────────────────────────────────────────────

type SortDir = "asc" | "desc" | null;

function useSortState() {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>(null);
  function handleSort(key: string) {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir("asc");
    } else if (sortDir === "asc") {
      setSortDir("desc");
    } else {
      setSortKey(null);
      setSortDir(null);
    }
  }
  return { sortKey, sortDir, handleSort };
}

// ─── FilterPanel ─────────────────────────────────────────────────────────────

interface FilterPanelProps {
  selectedSystems: string[];
  selectedRows: string[];
  onToggleSystem: (id: string) => void;
  onToggleRow: (id: string) => void;
  onSelectAllSystems: () => void;
  onClearSystems: () => void;
  onSelectAllRows: () => void;
  onClearRows: () => void;
}

function FilterPanel({
  selectedSystems,
  selectedRows,
  onToggleSystem,
  onToggleRow,
  onSelectAllSystems,
  onClearSystems,
  onSelectAllRows,
  onClearRows,
}: FilterPanelProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const inner = (
    <div className="space-y-5">
      {/* Wall Systems */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Wall Systems
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              data-ocid="comparison.filter.select_all_systems"
              className="font-mono text-[10px] text-primary hover:underline"
              onClick={onSelectAllSystems}
            >
              All
            </button>
            <span className="text-muted-foreground text-[10px]">/</span>
            <button
              type="button"
              data-ocid="comparison.filter.clear_systems"
              className="font-mono text-[10px] text-muted-foreground hover:text-foreground"
              onClick={onClearSystems}
            >
              Clear
            </button>
          </div>
        </div>
        <div className="space-y-1.5">
          {ALL_SYSTEM_IDS.map((id) => (
            <label
              key={id}
              htmlFor={`sys-cb-${id}`}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <Checkbox
                id={`sys-cb-${id}`}
                data-ocid={`comparison.filter.system.${id}`}
                checked={selectedSystems.includes(id)}
                onCheckedChange={() => onToggleSystem(id)}
                className="border-border/60 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <span
                className="text-xs text-foreground group-hover:text-primary transition-colors"
                style={{
                  borderLeft: `2px solid ${SYSTEM_COLOR[id]}`,
                  paddingLeft: "6px",
                }}
              >
                {SYSTEM_NAME[id]}
              </span>
            </label>
          ))}
        </div>
      </div>

      <Separator className="bg-border/40" />

      {/* Feature Rows filter */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Features
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              data-ocid="comparison.filter.select_all_rows"
              className="font-mono text-[10px] text-primary hover:underline"
              onClick={onSelectAllRows}
            >
              All
            </button>
            <span className="text-muted-foreground text-[10px]">/</span>
            <button
              type="button"
              data-ocid="comparison.filter.clear_rows"
              className="font-mono text-[10px] text-muted-foreground hover:text-foreground"
              onClick={onClearRows}
            >
              Clear
            </button>
          </div>
        </div>
        <div className="space-y-1.5">
          {METRIC_ROWS.map((r) => (
            <label
              key={r.id}
              htmlFor={`row-cb-${r.id}`}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <Checkbox
                id={`row-cb-${r.id}`}
                data-ocid={`comparison.filter.row.${r.id}`}
                checked={selectedRows.includes(r.id)}
                onCheckedChange={() => onToggleRow(r.id)}
                className="border-border/60 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <span className="text-xs text-foreground group-hover:text-primary transition-colors">
                {r.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile */}
      <div className="lg:hidden border border-border/40 rounded-md bg-card mb-4">
        <button
          type="button"
          data-ocid="comparison.filter.mobile_toggle"
          className="w-full flex items-center justify-between px-4 py-3"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-foreground">
            <SlidersHorizontal className="w-3.5 h-3.5 text-primary" />
            Filters
          </span>
          {mobileOpen ? (
            <ChevronUp className="w-4 h-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
        {mobileOpen && (
          <div className="px-4 pb-4 border-t border-border/40 pt-3">
            {inner}
          </div>
        )}
      </div>

      {/* Desktop sidebar */}
      <aside
        data-ocid="comparison.filter.sidebar"
        className="hidden lg:block w-[220px] flex-shrink-0 sticky top-0 self-start"
      >
        <div className="border border-border/40 rounded-md bg-card p-4 max-h-[calc(100vh-6rem)] overflow-y-auto">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
              Filters
            </span>
          </div>
          {inner}
        </div>
      </aside>
    </>
  );
}

// ─── Comparison Table (features as rows, systems as columns) ─────────────────

function MetricsTable({
  selectedSystems,
  selectedRows,
}: {
  selectedSystems: string[];
  selectedRows: string[];
}) {
  const { sortKey, sortDir, handleSort } = useSortState();

  const filteredSystems = useMemo(() => {
    if (!sortKey || !sortDir) return selectedSystems;
    return [...selectedSystems].sort((a, b) => {
      const rowData = METRIC_ROWS.find((r) => r.id === sortKey);
      if (!rowData) return 0;
      const av = rowData.values[a] ?? "";
      const bv = rowData.values[b] ?? "";
      return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
    });
  }, [selectedSystems, sortKey, sortDir]);

  const visibleRows = METRIC_ROWS.filter((r) => selectedRows.includes(r.id));

  if (selectedSystems.length === 0) {
    return (
      <div
        data-ocid="comparison.table.empty_state"
        className="rounded-md border border-border/40 bg-card py-12 flex items-center justify-center"
      >
        <p className="font-mono text-xs text-muted-foreground">
          Select at least one wall system.
        </p>
      </div>
    );
  }
  if (visibleRows.length === 0) {
    return (
      <div
        data-ocid="comparison.table.empty_state"
        className="rounded-md border border-border/40 bg-card py-12 flex items-center justify-center"
      >
        <p className="font-mono text-xs text-muted-foreground">
          Select at least one feature row.
        </p>
      </div>
    );
  }

  return (
    <div
      data-ocid="comparison.table"
      className="w-full overflow-x-auto rounded-md border border-border/60"
    >
      <table className="w-full text-sm border-collapse">
        <caption className="text-[10px] text-muted-foreground text-left px-3 py-1.5">
          Features as rows, wall systems as columns. Click any system header to
          sort. Color: green = best, red = worst.
        </caption>
        <thead>
          <tr className="bg-primary/15 border-b border-primary/30">
            {/* Feature label column */}
            <th className="px-3 py-2.5 text-left font-mono text-[11px] font-semibold uppercase tracking-widest text-primary whitespace-nowrap w-48 border-r border-border/30">
              Feature / Criterion
            </th>
            <th className="px-3 py-2.5 text-left font-mono text-[11px] text-primary/60 whitespace-nowrap w-48 border-r border-border/20">
              Description
            </th>
            {filteredSystems.map((sysId) => (
              <th
                key={sysId}
                className="px-3 py-2.5 text-center font-mono text-[11px] font-semibold uppercase tracking-widest whitespace-nowrap select-none cursor-pointer hover:bg-primary/20 transition-colors"
                style={{ color: SYSTEM_COLOR[sysId] }}
                onClick={() => handleSort(sysId)}
                onKeyDown={(e) => e.key === "Enter" && handleSort(sysId)}
              >
                <span className="inline-flex flex-col items-center gap-0.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: SYSTEM_COLOR[sysId] }}
                  />
                  {SYSTEM_NAME[sysId]}
                  <SortIcon k={sysId} sortKey={sortKey} sortDir={sortDir} />
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visibleRows.map((row, i) => (
            <tr
              key={row.id}
              data-ocid={`comparison.table.row.${i + 1}`}
              className={`border-b border-border/30 hover:bg-primary/5 transition-colors ${
                i % 2 === 0 ? "bg-card" : "bg-background"
              }`}
            >
              <td className="px-3 py-2.5 border-r border-border/30">
                <span className="font-mono text-xs font-semibold text-foreground">
                  {row.label}
                </span>
              </td>
              <td className="px-3 py-2.5 border-r border-border/20">
                <span className="font-mono text-[10px] text-muted-foreground leading-tight">
                  {row.description}
                </span>
              </td>
              {filteredSystems.map((sysId) => {
                const val = row.values[sysId] ?? "\u2013";
                const rating = row.ratings[sysId] ?? "neutral";
                const cls = RATING_CLASS[rating] ?? RATING_CLASS.neutral;
                return (
                  <td key={sysId} className="px-3 py-2.5 text-center">
                    <Badge
                      variant="outline"
                      className={`font-mono text-[9px] px-2 py-0.5 whitespace-nowrap ${cls}`}
                    >
                      {val}
                    </Badge>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Rating legend */}
      <div className="border-t border-border/30 bg-muted/20 px-3 py-2 flex flex-wrap gap-x-4 gap-y-1.5 items-center">
        <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mr-1">
          Rating:
        </span>
        {(
          [
            { rating: "best", label: "Best" },
            { rating: "good", label: "Good" },
            { rating: "moderate", label: "Moderate" },
            { rating: "poor", label: "Poor" },
            { rating: "worst", label: "Worst" },
          ] as const
        ).map(({ rating, label }) => (
          <Badge
            key={rating}
            variant="outline"
            className={`font-mono text-[9px] px-1.5 py-0 ${RATING_CLASS[rating]}`}
          >
            {label}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function SortIcon({
  k,
  sortKey,
  sortDir,
}: { k: string; sortKey: string | null; sortDir: SortDir }) {
  if (sortKey !== k)
    return <ChevronsUpDown className="w-3 h-3 text-primary/50" />;
  if (sortDir === "asc") return <ChevronUp className="w-3 h-3" />;
  return <ChevronDown className="w-3 h-3" />;
}

// ─── charts ───────────────────────────────────────────────────────────────────

const CHART_TOOLTIP_STYLE = {
  backgroundColor: "hsl(var(--card) / 1)",
  border: "1px solid hsl(var(--border))",
  borderRadius: "6px",
  fontSize: "11px",
  fontFamily: "var(--font-mono, monospace)",
  color: "hsl(var(--foreground))",
};

function MaxHeightChart({
  metrics,
  selectedSystems,
}: { metrics: ComparisonMetric[]; selectedSystems: string[] }) {
  const data = metrics
    .filter((m) => selectedSystems.includes(m.systemId))
    .map((m) => ({
      name: SYSTEM_NAME[m.systemId] ?? m.systemId,
      maxHeight: m.maxHeight,
      fill: SYSTEM_COLOR[m.systemId],
    }));
  return (
    <div
      data-ocid="comparison.chart.max_height"
      className="rounded-md border border-border/40 bg-card p-4"
    >
      <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">
        Max Retained Height (m)
      </p>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={data}
          barCategoryGap="30%"
          margin={{ top: 4, right: 8, bottom: 0, left: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(var(--border) / 0.5)"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            tick={{
              fill: "hsl(var(--muted-foreground))",
              fontSize: 10,
              fontFamily: "var(--font-mono)",
            }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{
              fill: "hsl(var(--muted-foreground))",
              fontSize: 10,
              fontFamily: "var(--font-mono)",
            }}
            axisLine={false}
            tickLine={false}
            unit=" m"
          />
          <Tooltip
            contentStyle={CHART_TOOLTIP_STYLE}
            formatter={(v: number) => [`${v} m`, "Max Height"]}
            cursor={{ fill: "hsl(var(--primary) / 0.07)" }}
          />
          <ReferenceLine
            y={20}
            stroke="hsl(var(--primary) / 0.3)"
            strokeDasharray="4 2"
            label={{
              value: "20 m",
              fill: "hsl(var(--primary) / 0.6)",
              fontSize: 9,
            }}
          />
          <Bar dataKey="maxHeight" radius={[3, 3, 0, 0]}>
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function CostRangeChart({
  metrics,
  selectedSystems,
}: { metrics: ComparisonMetric[]; selectedSystems: string[] }) {
  const data = metrics
    .filter((m) => selectedSystems.includes(m.systemId))
    .map((m) => ({
      name: SYSTEM_NAME[m.systemId] ?? m.systemId,
      costMin: parseCostMin(m.costRange),
      costMax: parseCostMax(m.costRange),
      fill: SYSTEM_COLOR[m.systemId],
    }));
  return (
    <div
      data-ocid="comparison.chart.cost_range"
      className="rounded-md border border-border/40 bg-card p-4"
    >
      <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">
        Cost Range ($/m\u00b2)
      </p>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={data}
          barCategoryGap="30%"
          margin={{ top: 4, right: 8, bottom: 0, left: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(var(--border) / 0.5)"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            tick={{
              fill: "hsl(var(--muted-foreground))",
              fontSize: 10,
              fontFamily: "var(--font-mono)",
            }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{
              fill: "hsl(var(--muted-foreground))",
              fontSize: 10,
              fontFamily: "var(--font-mono)",
            }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${v}`}
          />
          <Tooltip
            contentStyle={CHART_TOOLTIP_STYLE}
            formatter={(v: number, name: string) => [
              `$${v}/m\u00b2`,
              name === "costMin" ? "Min Cost" : "Max Cost",
            ]}
            cursor={{ fill: "hsl(var(--primary) / 0.07)" }}
          />
          <Legend
            formatter={(value) => (
              <span
                style={{
                  fontSize: 10,
                  color: "hsl(var(--muted-foreground))",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {value === "costMin" ? "Min" : "Max"}
              </span>
            )}
          />
          <Bar
            dataKey="costMin"
            name="costMin"
            radius={[2, 2, 0, 0]}
            opacity={0.55}
          >
            {data.map((entry) => (
              <Cell key={`min-${entry.name}`} fill={entry.fill} />
            ))}
          </Bar>
          <Bar dataKey="costMax" name="costMax" radius={[3, 3, 0, 0]}>
            {data.map((entry) => (
              <Cell key={`max-${entry.name}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function WaterControlChart({
  metrics,
  selectedSystems,
}: { metrics: ComparisonMetric[]; selectedSystems: string[] }) {
  const data = metrics
    .filter((m) => selectedSystems.includes(m.systemId))
    .map((m) => ({
      name: SYSTEM_NAME[m.systemId] ?? m.systemId,
      waterScore: WATER_SCORE[m.waterControl] ?? 0,
      fill: SYSTEM_COLOR[m.systemId],
    }));
  const WATER_LABELS: Record<number, string> = {
    1: "Poor",
    1.5: "P\u2013M",
    2: "Mod",
    3: "Good",
    4: "Excel",
  };
  return (
    <div
      data-ocid="comparison.chart.water_control"
      className="rounded-md border border-border/40 bg-card p-4"
    >
      <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">
        Water Control Score
      </p>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={data}
          barCategoryGap="30%"
          margin={{ top: 4, right: 8, bottom: 0, left: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(var(--border) / 0.5)"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            tick={{
              fill: "hsl(var(--muted-foreground))",
              fontSize: 10,
              fontFamily: "var(--font-mono)",
            }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, 4]}
            ticks={[1, 1.5, 2, 3, 4]}
            tickFormatter={(v) => WATER_LABELS[v] ?? ""}
            tick={{
              fill: "hsl(var(--muted-foreground))",
              fontSize: 9,
              fontFamily: "var(--font-mono)",
            }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={CHART_TOOLTIP_STYLE}
            formatter={(v: number) => [WATER_LABELS[v] ?? v, "Water Control"]}
            cursor={{ fill: "hsl(var(--primary) / 0.07)" }}
          />
          <Bar dataKey="waterScore" radius={[3, 3, 0, 0]}>
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function MaxHeightLineChart({
  metrics,
  selectedSystems,
}: { metrics: ComparisonMetric[]; selectedSystems: string[] }) {
  const depths = [5, 8, 10, 12, 15, 18, 20, 25, 30, 40];
  const filteredMetrics = metrics.filter((m) =>
    selectedSystems.includes(m.systemId),
  );
  const data = depths.map((d) => {
    const row: Record<string, unknown> = { depth: d };
    for (const m of filteredMetrics)
      row[m.systemId] = m.maxHeight >= d ? m.maxHeight : null;
    return row;
  });
  return (
    <div
      data-ocid="comparison.chart.capability"
      className="rounded-md border border-border/40 bg-card p-4"
    >
      <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">
        System Capability vs. Excavation Depth
      </p>
      <p className="text-[10px] text-muted-foreground mb-3">
        Line ends where system max depth is exceeded.
      </p>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart
          data={data}
          margin={{ top: 4, right: 8, bottom: 0, left: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(var(--border) / 0.5)"
          />
          <XAxis
            dataKey="depth"
            tick={{
              fill: "hsl(var(--muted-foreground))",
              fontSize: 10,
              fontFamily: "var(--font-mono)",
            }}
            axisLine={false}
            tickLine={false}
            label={{
              value: "Required Depth (m)",
              position: "insideBottomRight",
              fill: "hsl(var(--muted-foreground))",
              fontSize: 9,
              offset: -4,
            }}
          />
          <YAxis
            tick={{
              fill: "hsl(var(--muted-foreground))",
              fontSize: 10,
              fontFamily: "var(--font-mono)",
            }}
            axisLine={false}
            tickLine={false}
            unit=" m"
          />
          <Tooltip
            contentStyle={CHART_TOOLTIP_STYLE}
            formatter={(v: number, name: string) => [
              v != null ? `${v} m` : "N/A",
              SYSTEM_NAME[name] ?? name,
            ]}
          />
          <Legend
            formatter={(value: string) => (
              <span
                style={{
                  fontSize: 10,
                  fontFamily: "var(--font-mono)",
                  color: SYSTEM_COLOR[value] ?? "hsl(var(--foreground))",
                }}
              >
                {SYSTEM_NAME[value] ?? value}
              </span>
            )}
          />
          {filteredMetrics.map((m) => (
            <Line
              key={m.systemId}
              type="monotone"
              dataKey={m.systemId}
              stroke={SYSTEM_COLOR[m.systemId]}
              strokeWidth={2}
              dot={{ r: 3, fill: SYSTEM_COLOR[m.systemId] }}
              connectNulls={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─── main page ────────────────────────────────────────────────────────────────

export default function Comparison() {
  const { data: metrics = COMPARISON_METRICS } = useGetAllMetrics();

  function parseFromUrl() {
    const sp = new URLSearchParams(window.location.search);
    const rawSystems = sp.get("systems") ?? "";
    const rawRows = sp.get("rows") ?? "";
    const allSysIds: string[] = [...ALL_SYSTEM_IDS];
    const allRowIds: string[] = ALL_METRIC_IDS;

    const parsedSystems = rawSystems
      ? rawSystems.split(",").filter((s) => allSysIds.includes(s))
      : allSysIds;
    const parsedRows = rawRows
      ? rawRows.split(",").filter((s) => allRowIds.includes(s))
      : allRowIds;

    return {
      systems: parsedSystems.length > 0 ? parsedSystems : allSysIds,
      rows: parsedRows.length > 0 ? parsedRows : allRowIds,
    };
  }

  const initial = parseFromUrl();
  const [selectedSystems, setSelectedSystems] = useState<string[]>(
    initial.systems,
  );
  const [selectedRows, setSelectedRows] = useState<string[]>(initial.rows);

  function updateUrl(systems: string[], rows: string[]) {
    const url = new URL(window.location.href);
    url.searchParams.set("systems", systems.join(","));
    url.searchParams.set("rows", rows.join(","));
    window.history.replaceState(null, "", url.toString());
  }

  function toggleSystem(id: string) {
    const next = selectedSystems.includes(id)
      ? selectedSystems.filter((s) => s !== id)
      : [...selectedSystems, id];
    setSelectedSystems(next);
    updateUrl(next, selectedRows);
  }

  function toggleRow(id: string) {
    const next = selectedRows.includes(id)
      ? selectedRows.filter((r) => r !== id)
      : [...selectedRows, id];
    setSelectedRows(next);
    updateUrl(selectedSystems, next);
  }

  function handleSelectAllSystems() {
    const next = [...ALL_SYSTEM_IDS];
    setSelectedSystems(next);
    updateUrl(next, selectedRows);
  }

  function handleClearSystems() {
    setSelectedSystems([]);
    updateUrl([], selectedRows);
  }

  function handleSelectAllRows() {
    const next = ALL_METRIC_IDS;
    setSelectedRows(next);
    updateUrl(selectedSystems, next);
  }

  function handleClearRows() {
    setSelectedRows([]);
    updateUrl(selectedSystems, []);
  }

  const activeCount = selectedSystems.length;

  return (
    <div className="min-h-full">
      <div className="border-b border-border/40 bg-card px-6 py-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <GitCompareArrows className="w-4 h-4 text-primary" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                Analysis
              </span>
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground">
              System Comparison
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Filter, sort, and chart all 6 excavation systems side-by-side.
            </p>
          </div>
          <div className="flex items-center gap-3 mt-1 flex-shrink-0">
            <Badge
              variant="outline"
              className="font-mono text-xs text-primary border-primary/30"
            >
              {activeCount}/{SYSTEMS.length} systems
            </Badge>
            <button
              type="button"
              data-ocid="comparison.export_button"
              onClick={() => exportCSV(metrics, selectedSystems, selectedRows)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border/50 bg-card hover:bg-primary/10 hover:border-primary/40 transition-colors font-mono text-[11px] text-foreground"
            >
              <Download className="w-3.5 h-3.5" />
              Export CSV
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-6 py-6 flex gap-6 items-start">
        <FilterPanel
          selectedSystems={selectedSystems}
          selectedRows={selectedRows}
          onToggleSystem={toggleSystem}
          onToggleRow={toggleRow}
          onSelectAllSystems={handleSelectAllSystems}
          onClearSystems={handleClearSystems}
          onSelectAllRows={handleSelectAllRows}
          onClearRows={handleClearRows}
        />

        <div className="flex-1 min-w-0 space-y-8">
          {/* Comparison Metrics Table */}
          <section data-ocid="comparison.table.section">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-display font-semibold text-sm text-foreground">
                Performance Metrics Table
              </h2>
              <span className="font-mono text-[10px] text-muted-foreground">
                {selectedRows.length} criteria &middot; {activeCount} system
                {activeCount !== 1 ? "s" : ""}
              </span>
            </div>
            <MetricsTable
              selectedSystems={selectedSystems}
              selectedRows={selectedRows}
            />
          </section>

          {/* Charts */}
          <section data-ocid="comparison.charts.section">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-primary" />
              <h2 className="font-display font-semibold text-sm text-foreground">
                Visual Comparison
              </h2>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <MaxHeightChart
                metrics={metrics}
                selectedSystems={selectedSystems}
              />
              <CostRangeChart
                metrics={metrics}
                selectedSystems={selectedSystems}
              />
              <WaterControlChart
                metrics={metrics}
                selectedSystems={selectedSystems}
              />
              <MaxHeightLineChart
                metrics={metrics}
                selectedSystems={selectedSystems}
              />
            </div>
          </section>

          {/* Engineering Insights */}
          <section data-ocid="comparison.insights.section">
            <div className="border-t border-border/40 pt-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  Engineering Insights
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {INSIGHTS.map((insight, i) => (
                  <div
                    key={insight.title}
                    data-ocid={`comparison.insight.${i + 1}`}
                    className="p-3.5 rounded-md border border-border/40 bg-card border-l-2"
                    style={{ borderLeftColor: "hsl(var(--primary))" }}
                  >
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {insight.title}
                    </p>
                    <p className="font-display font-semibold text-sm text-primary mt-1">
                      {insight.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {insight.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Input Effects Table */}
          <section data-ocid="comparison.input_effects.section">
            <div className="border-t border-border/40 pt-6">
              <div className="flex items-center gap-2 mb-1">
                <BarChart2 className="w-4 h-4 text-primary" />
                <h2 className="font-display font-semibold text-sm text-foreground">
                  Input Parameters Effects
                </h2>
              </div>
              <p className="font-mono text-[10px] text-muted-foreground mb-4">
                Sensitivity of soil, geometry, loading, and FEM parameters on
                each wall method. Collapsible by group.
              </p>
              <InputEffectsTable />
            </div>
          </section>

          {/* Output Ranges Table */}
          <section data-ocid="comparison.output_ranges.section">
            <div className="border-t border-border/40 pt-6">
              <div className="flex items-center gap-2 mb-1">
                <BarChart2 className="w-4 h-4 text-primary" />
                <h2 className="font-display font-semibold text-sm text-foreground">
                  Output Parameters Comparison
                </h2>
              </div>
              <p className="font-mono text-[10px] text-muted-foreground mb-4">
                Typical numeric ranges for displacement, bending moment,
                stability, and load capacity per method. Click any method column
                header to sort.
              </p>
              <OutputRangesTable />
            </div>
          </section>

          {/* Graph Builder */}
          <section data-ocid="comparison.graph_builder.section">
            <div className="border-t border-border/40 pt-6">
              <div className="flex items-center gap-2 mb-1">
                <LineChartIcon className="w-4 h-4 text-primary" />
                <h2 className="font-display font-semibold text-sm text-foreground">
                  Interactive Parameter Graph
                </h2>
              </div>
              <p className="font-mono text-[10px] text-muted-foreground mb-4">
                Select an input parameter (X-axis) and an output parameter
                (Y-axis) to visualize their relationship across all 6 methods.
              </p>
              <GraphBuilder />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

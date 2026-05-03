import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useGetAllMetrics } from "@/lib/api";
import { COMPARISON_METRICS, SYSTEMS } from "@/lib/data";
import type { ComparisonMetric } from "@/types";
import {
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  Download,
  GitCompareArrows,
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

const ALL_PARAMS = [
  { id: "costRange", label: "Cost Range" },
  { id: "maxHeight", label: "Max Height" },
  { id: "installationTime", label: "Installation Time" },
  { id: "deflection", label: "Deflection" },
  { id: "waterControl", label: "Water Control" },
  { id: "noisyVibration", label: "Noise / Vibration" },
  { id: "mobilizationTime", label: "Mobilization Time" },
] as const;

const WATER_SCORE: Record<string, number> = {
  Excellent: 4,
  Good: 3,
  Moderate: 2,
  "Poor–Moderate": 1.5,
  Poor: 1,
};

// min cost (numeric) from costRange string
function parseCostMin(s: string): number {
  const m = s.match(/(\d[\d,]*)/);
  return m ? Number.parseInt(m[1].replace(",", ""), 10) : 0;
}

function parseCostMax(s: string): number {
  const nums = s.match(/(\d[\d,]+)/g);
  if (!nums || nums.length < 2) return parseCostMin(s);
  return Number.parseInt(nums[nums.length - 1].replace(",", ""), 10);
}

const WATER_CONTROL_COLOR: Record<string, string> = {
  Poor: "text-destructive border-destructive/30 bg-destructive/10",
  Moderate: "text-accent border-accent/30 bg-accent/10",
  Good: "text-primary border-primary/30 bg-primary/10",
  Excellent: "text-primary border-primary/40 bg-primary/20",
  "Poor–Moderate": "text-accent border-accent/30 bg-accent/10",
};

const INSIGHTS = [
  {
    title: "Deepest Capable",
    value: "Diaphragm Wall",
    note: "Up to 40 m retained height, 5–25 mm deflection. Best for sensitive urban adjacencies.",
  },
  {
    title: "Best Water Control",
    value: "Diaphragm Wall / Secant Pile",
    note: "Effectively zero groundwater inflow when correctly constructed; handles 30+ m heads.",
  },
  {
    title: "Most Economical",
    value: "Soldier Pile Wall",
    note: "$200–400/m². Optimal for temporary support in competent soils above water table.",
  },
  {
    title: "Fastest Installation",
    value: "Sheet Pile Wall",
    note: "1–3 weeks with vibratory hammer in soft soils. 2–4 days mobilization.",
  },
  {
    title: "Restricted Access",
    value: "Micropile Wall",
    note: "75–300 mm diameter, ≥2 m headroom only. Ideal for underpinning & karst sites.",
  },
] as const;

// ─── CSV export ───────────────────────────────────────────────────────────────

function exportCSV(
  metrics: ComparisonMetric[],
  selectedSystems: string[],
  selectedParams: string[],
) {
  const sysMetrics = metrics.filter((m) =>
    selectedSystems.includes(m.systemId),
  );
  const paramLabels: Record<string, string> = {};
  for (const p of ALL_PARAMS) paramLabels[p.id] = p.label;

  const headers = ["System", ...selectedParams.map((p) => paramLabels[p] ?? p)];
  const rows = sysMetrics.map((m) => [
    SYSTEM_NAME[m.systemId] ?? m.systemId,
    ...selectedParams.map((p) => {
      const v = (m as unknown as Record<string, unknown>)[p];
      return String(v ?? "");
    }),
  ]);

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

// ─── subcomponents ────────────────────────────────────────────────────────────

interface FilterPanelProps {
  selectedSystems: string[];
  selectedParams: string[];
  onToggleSystem: (id: string) => void;
  onToggleParam: (id: string) => void;
  onSelectAllSystems: () => void;
  onClearSystems: () => void;
  onSelectAllParams: () => void;
  onClearParams: () => void;
}

function FilterPanel({
  selectedSystems,
  selectedParams,
  onToggleSystem,
  onToggleParam,
  onSelectAllSystems,
  onClearSystems,
  onSelectAllParams,
  onClearParams,
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

      {/* Parameters */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Parameters
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              data-ocid="comparison.filter.select_all_params"
              className="font-mono text-[10px] text-primary hover:underline"
              onClick={onSelectAllParams}
            >
              All
            </button>
            <span className="text-muted-foreground text-[10px]">/</span>
            <button
              type="button"
              data-ocid="comparison.filter.clear_params"
              className="font-mono text-[10px] text-muted-foreground hover:text-foreground"
              onClick={onClearParams}
            >
              Clear
            </button>
          </div>
        </div>
        <div className="space-y-1.5">
          {ALL_PARAMS.map((p) => (
            <label
              key={p.id}
              htmlFor={`param-cb-${p.id}`}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <Checkbox
                id={`param-cb-${p.id}`}
                data-ocid={`comparison.filter.param.${p.id}`}
                checked={selectedParams.includes(p.id)}
                onCheckedChange={() => onToggleParam(p.id)}
                className="border-border/60 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <span className="text-xs text-foreground group-hover:text-primary transition-colors">
                {p.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile accordion */}
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
        className="hidden lg:block w-[260px] flex-shrink-0 sticky top-0 self-start"
      >
        <div className="border border-border/40 rounded-md bg-card p-4">
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

// ─── comparison table ─────────────────────────────────────────────────────────

interface ComparisonTableProps {
  metrics: ComparisonMetric[];
  selectedSystems: string[];
  selectedParams: string[];
}

function ComparisonTable({
  metrics,
  selectedSystems,
  selectedParams,
}: ComparisonTableProps) {
  const { sortKey, sortDir, handleSort } = useSortState();

  const filteredMetrics = useMemo(() => {
    const base = metrics.filter((m) => selectedSystems.includes(m.systemId));
    if (!sortKey || !sortDir) return base;
    return [...base].sort((a, b) => {
      const av = (a as unknown as Record<string, unknown>)[sortKey];
      const bv = (b as unknown as Record<string, unknown>)[sortKey];
      if (typeof av === "number" && typeof bv === "number") {
        return sortDir === "asc" ? av - bv : bv - av;
      }
      return sortDir === "asc"
        ? String(av).localeCompare(String(bv))
        : String(bv).localeCompare(String(av));
    });
  }, [metrics, selectedSystems, sortKey, sortDir]);

  const visibleParams = ALL_PARAMS.filter((p) => selectedParams.includes(p.id));

  if (selectedSystems.length === 0) {
    return (
      <div
        data-ocid="comparison.table.empty_state"
        className="rounded-md border border-border/40 bg-card py-12 flex items-center justify-center"
      >
        <p className="font-mono text-xs text-muted-foreground">
          Select at least one wall system to compare.
        </p>
      </div>
    );
  }

  if (selectedParams.length === 0) {
    return (
      <div
        data-ocid="comparison.table.empty_state"
        className="rounded-md border border-border/40 bg-card py-12 flex items-center justify-center"
      >
        <p className="font-mono text-xs text-muted-foreground">
          Select at least one parameter to display.
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
          Metrics from published literature and contractor guidelines. Click any
          column header to sort.
        </caption>
        <thead>
          <tr className="bg-primary/15 border-b border-primary/30">
            <th
              className="px-3 py-2.5 text-left font-mono text-[11px] font-semibold uppercase tracking-widest text-primary whitespace-nowrap select-none cursor-pointer hover:bg-primary/20 transition-colors"
              onClick={() => handleSort("systemId")}
              onKeyDown={(e) => e.key === "Enter" && handleSort("systemId")}
            >
              <span className="inline-flex items-center gap-1">
                System
                <SortIcon k="systemId" sortKey={sortKey} sortDir={sortDir} />
              </span>
            </th>
            {visibleParams.map((p) => (
              <th
                key={p.id}
                className="px-3 py-2.5 text-left font-mono text-[11px] font-semibold uppercase tracking-widest text-primary whitespace-nowrap select-none cursor-pointer hover:bg-primary/20 transition-colors"
                onClick={() => handleSort(p.id)}
                onKeyDown={(e) => e.key === "Enter" && handleSort(p.id)}
              >
                <span className="inline-flex items-center gap-1">
                  {p.label}
                  <SortIcon k={p.id} sortKey={sortKey} sortDir={sortDir} />
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredMetrics.map((m, i) => (
            <tr
              key={m.systemId}
              data-ocid={`comparison.table.row.${i + 1}`}
              className={`border-b border-border/30 transition-colors duration-100 hover:bg-primary/5 ${
                i % 2 === 0 ? "bg-card" : "bg-background"
              }`}
            >
              <td className="px-3 py-2.5 whitespace-nowrap">
                <span className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: SYSTEM_COLOR[m.systemId] }}
                  />
                  <span className="font-mono text-xs font-semibold text-foreground">
                    {SYSTEM_NAME[m.systemId] ?? m.systemId}
                  </span>
                </span>
              </td>
              {visibleParams.map((p) => {
                const rawVal = (m as unknown as Record<string, unknown>)[p.id];
                if (p.id === "waterControl") {
                  const cls =
                    WATER_CONTROL_COLOR[String(rawVal)] ??
                    "text-muted-foreground border-border bg-muted/20";
                  return (
                    <td key={p.id} className="px-3 py-2.5">
                      <Badge
                        variant="outline"
                        className={`font-mono text-[10px] uppercase tracking-wider ${cls}`}
                      >
                        {String(rawVal)}
                      </Badge>
                    </td>
                  );
                }
                return (
                  <td
                    key={p.id}
                    className="px-3 py-2.5 font-mono text-xs text-foreground whitespace-nowrap"
                  >
                    {p.id === "maxHeight"
                      ? `${rawVal} m`
                      : String(rawVal ?? "")}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
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
        Cost Range ($/m²)
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
              `$${v}/m²`,
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
    1.5: "P–M",
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
  // Show how max height varies if we had different excavation depths - use data as single line per system overlaid
  // Instead: multi-system overlay on same axis – simulate progressive depth increments
  const depths = [5, 8, 10, 12, 15, 18, 20, 25, 30, 40];
  const filteredMetrics = metrics.filter((m) =>
    selectedSystems.includes(m.systemId),
  );

  const data = depths.map((d) => {
    const row: Record<string, unknown> = { depth: d };
    for (const m of filteredMetrics) {
      row[m.systemId] = m.maxHeight >= d ? m.maxHeight : null;
    }
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
        Line ends where system max depth is exceeded (no capability shown as
        gap).
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

  // Read URL search params from window.location (avoids TanStack validateSearch requirement)
  function parseFromUrl() {
    const sp = new URLSearchParams(window.location.search);
    const rawSystems = sp.get("systems") ?? "";
    const rawParams = sp.get("params") ?? "";
    const allSysIds: string[] = [...ALL_SYSTEM_IDS];
    const allParamIdsStr: string[] = ALL_PARAMS.map((p) => p.id);

    const parsedSystems = rawSystems
      ? rawSystems.split(",").filter((s) => allSysIds.includes(s))
      : allSysIds;
    const parsedParams = rawParams
      ? rawParams.split(",").filter((s) => allParamIdsStr.includes(s))
      : allParamIdsStr;

    return {
      systems: parsedSystems.length > 0 ? parsedSystems : allSysIds,
      params: parsedParams.length > 0 ? parsedParams : allParamIdsStr,
    };
  }

  const initial = parseFromUrl();
  const [selectedSystems, setSelectedSystems] = useState<string[]>(
    initial.systems,
  );
  const [selectedParams, setSelectedParams] = useState<string[]>(
    initial.params,
  );

  function updateUrl(systems: string[], params: string[]) {
    const url = new URL(window.location.href);
    url.searchParams.set("systems", systems.join(","));
    url.searchParams.set("params", params.join(","));
    window.history.replaceState(null, "", url.toString());
  }

  function toggleSystem(id: string) {
    const next = selectedSystems.includes(id)
      ? selectedSystems.filter((s) => s !== id)
      : [...selectedSystems, id];
    setSelectedSystems(next);
    updateUrl(next, selectedParams);
  }

  function toggleParam(id: string) {
    const next = selectedParams.includes(id)
      ? selectedParams.filter((p) => p !== id)
      : [...selectedParams, id];
    setSelectedParams(next);
    updateUrl(selectedSystems, next);
  }

  function handleSelectAllSystems() {
    const next = [...ALL_SYSTEM_IDS];
    setSelectedSystems(next);
    updateUrl(next, selectedParams);
  }

  function handleClearSystems() {
    setSelectedSystems([]);
    updateUrl([], selectedParams);
  }

  function handleSelectAllParams() {
    const next = ALL_PARAMS.map((p) => p.id);
    setSelectedParams(next);
    updateUrl(selectedSystems, next);
  }

  function handleClearParams() {
    setSelectedParams([]);
    updateUrl(selectedSystems, []);
  }

  function handleExportCSV() {
    exportCSV(metrics, selectedSystems, selectedParams);
  }

  const activeCount = selectedSystems.length;

  return (
    <div className="min-h-full">
      {/* Page header */}
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
              onClick={handleExportCSV}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border/50 bg-card hover:bg-primary/10 hover:border-primary/40 transition-colors font-mono text-[11px] text-foreground"
            >
              <Download className="w-3.5 h-3.5" />
              Export CSV
            </button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 lg:px-6 py-6 flex gap-6 items-start">
        {/* Filter Panel */}
        <FilterPanel
          selectedSystems={selectedSystems}
          selectedParams={selectedParams}
          onToggleSystem={toggleSystem}
          onToggleParam={toggleParam}
          onSelectAllSystems={handleSelectAllSystems}
          onClearSystems={handleClearSystems}
          onSelectAllParams={handleSelectAllParams}
          onClearParams={handleClearParams}
        />

        {/* Main content */}
        <div className="flex-1 min-w-0 space-y-8">
          {/* ── Comparison Table ── */}
          <section data-ocid="comparison.table.section">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-display font-semibold text-sm text-foreground">
                Performance Metrics Table
              </h2>
              <span className="font-mono text-[10px] text-muted-foreground">
                {activeCount} system{activeCount !== 1 ? "s" : ""} ·{" "}
                {selectedParams.length} param
                {selectedParams.length !== 1 ? "s" : ""}
              </span>
            </div>
            <ComparisonTable
              metrics={metrics}
              selectedSystems={selectedSystems}
              selectedParams={selectedParams}
            />
          </section>

          {/* ── Charts ── */}
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

          {/* ── Insights ── */}
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
        </div>
      </div>
    </div>
  );
}

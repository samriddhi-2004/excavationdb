import {
  GRAPH_DATA,
  INPUT_PARAM_OPTIONS,
  type InputParamKey,
  OUTPUT_PARAM_OPTIONS,
  type OutputParamKey,
} from "@/lib/comparison-data";
import { Download } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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

const CHART_TOOLTIP_STYLE = {
  backgroundColor: "hsl(var(--card) / 1)",
  border: "1px solid hsl(var(--border))",
  borderRadius: "6px",
  fontSize: "11px",
  fontFamily: "var(--font-mono, monospace)",
  color: "hsl(var(--foreground))",
};

function buildChartData(
  inputKey: InputParamKey,
  outputKey: OutputParamKey,
): Record<string, number>[] {
  const dataset = GRAPH_DATA[inputKey]?.[outputKey];
  if (!dataset) return [];

  // All systems share the same X values, so use the first system's x values
  const xValues = dataset[ALL_SYSTEM_IDS[0]]?.map((p) => p.x) ?? [];
  return xValues.map((x, i) => {
    const row: Record<string, number> = { x };
    for (const sysId of ALL_SYSTEM_IDS) {
      row[sysId] = dataset[sysId]?.[i]?.y ?? 0;
    }
    return row;
  });
}

export function GraphBuilder() {
  const [inputKey, setInputKey] = useState<InputParamKey>("excavation-depth");
  const [outputKey, setOutputKey] = useState<OutputParamKey>(
    "lateral-displacement",
  );
  const chartRef = useRef<HTMLDivElement>(null);

  const chartData = buildChartData(inputKey, outputKey);
  const xLabel =
    INPUT_PARAM_OPTIONS.find((o) => o.id === inputKey)?.axisLabel ?? inputKey;
  const yLabel =
    OUTPUT_PARAM_OPTIONS.find((o) => o.id === outputKey)?.axisLabel ??
    outputKey;

  const handleExport = useCallback(() => {
    // Use the recharts SVG element to download as SVG file (no extra dependencies)
    const svgEl = chartRef.current?.querySelector("svg");
    if (!svgEl) return;
    const serialized = new XMLSerializer().serializeToString(svgEl);
    const blob = new Blob([serialized], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `excavation-${inputKey}-vs-${outputKey}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  }, [inputKey, outputKey]);

  return (
    <div data-ocid="comparison.graph_builder" className="space-y-4">
      {/* Controls */}
      <div className="flex flex-wrap gap-4 items-end">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="graph-x-axis"
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
          >
            X-Axis: Input Parameter
          </label>
          <select
            id="graph-x-axis"
            data-ocid="comparison.graph_builder.x_axis_select"
            value={inputKey}
            onChange={(e) => setInputKey(e.target.value as InputParamKey)}
            className="bg-card border border-border/60 rounded-md px-3 py-1.5 font-mono text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 min-w-[260px] cursor-pointer"
          >
            {INPUT_PARAM_OPTIONS.map((o) => (
              <option key={o.id} value={o.id}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="graph-y-axis"
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
          >
            Y-Axis: Output Parameter
          </label>
          <select
            id="graph-y-axis"
            data-ocid="comparison.graph_builder.y_axis_select"
            value={outputKey}
            onChange={(e) => setOutputKey(e.target.value as OutputParamKey)}
            className="bg-card border border-border/60 rounded-md px-3 py-1.5 font-mono text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 min-w-[260px] cursor-pointer"
          >
            {OUTPUT_PARAM_OPTIONS.map((o) => (
              <option key={o.id} value={o.id}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          data-ocid="comparison.graph_builder.export_button"
          onClick={handleExport}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border/50 bg-card hover:bg-primary/10 hover:border-primary/40 transition-colors font-mono text-[11px] text-foreground self-end"
        >
          <Download className="w-3.5 h-3.5" />
          Export Chart
        </button>
      </div>

      {/* Chart */}
      <div
        ref={chartRef}
        className="rounded-md border border-border/40 bg-card p-4"
      >
        <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1">
          {INPUT_PARAM_OPTIONS.find((o) => o.id === inputKey)?.label ??
            inputKey}
          {" vs "}
          {OUTPUT_PARAM_OPTIONS.find((o) => o.id === outputKey)?.label ??
            outputKey}
        </p>
        <p className="font-mono text-[10px] text-muted-foreground mb-4">
          All 6 methods — synthetic representative data points
        </p>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart
            data={chartData}
            margin={{ top: 4, right: 16, bottom: 24, left: 16 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(var(--border) / 0.5)"
            />
            <XAxis
              dataKey="x"
              type="number"
              domain={["dataMin", "dataMax"]}
              tick={{
                fill: "hsl(var(--muted-foreground))",
                fontSize: 10,
                fontFamily: "var(--font-mono)",
              }}
              axisLine={false}
              tickLine={false}
              label={{
                value: xLabel,
                position: "insideBottom",
                offset: -12,
                fill: "hsl(var(--muted-foreground))",
                fontSize: 11,
                fontFamily: "var(--font-mono)",
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
              label={{
                value: yLabel,
                angle: -90,
                position: "insideLeft",
                offset: 8,
                fill: "hsl(var(--muted-foreground))",
                fontSize: 11,
                fontFamily: "var(--font-mono)",
              }}
            />
            <Tooltip
              contentStyle={CHART_TOOLTIP_STYLE}
              formatter={(v: number, name: string) => [
                `${v} ${yLabel}`,
                SYSTEM_NAME[name] ?? name,
              ]}
              labelFormatter={(label: number) => `${xLabel}: ${label}`}
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
            {ALL_SYSTEM_IDS.map((sysId) => (
              <Line
                key={sysId}
                type="monotone"
                dataKey={sysId}
                stroke={SYSTEM_COLOR[sysId]}
                strokeWidth={2}
                dot={{ r: 3, fill: SYSTEM_COLOR[sysId] }}
                activeDot={{ r: 5 }}
                connectNulls={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

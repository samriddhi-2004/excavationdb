import { Badge } from "@/components/ui/badge";
import { INPUT_EFFECT_ROWS } from "@/lib/comparison-data";

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

const SENSITIVITY_BADGE: Record<string, string> = {
  High: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Moderate: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  Low: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  "N/A": "bg-muted/40 text-muted-foreground border-border/30",
};

export function InputEffectsTable() {
  return (
    <div
      data-ocid="comparison.input_effects_table"
      className="w-full overflow-x-auto rounded-md border border-border/60"
    >
      <table className="w-full text-sm border-collapse min-w-[900px]">
        <caption className="text-[10px] text-muted-foreground text-left px-3 py-1.5">
          Qualitative sensitivity of each input parameter on wall performance
          per method. FEM Importance and Model Complexity refer to numerical
          simulation context.
        </caption>
        <thead className="sticky top-0 z-10">
          <tr className="bg-primary/15 border-b border-primary/30">
            <th className="px-3 py-2.5 text-left font-mono text-[11px] font-semibold uppercase tracking-widest text-primary whitespace-nowrap">
              Parameter
            </th>
            <th className="px-3 py-2.5 text-center font-mono text-[11px] font-semibold uppercase tracking-widest text-primary whitespace-nowrap">
              Symbol
            </th>
            <th className="px-3 py-2.5 text-center font-mono text-[11px] font-semibold uppercase tracking-widest text-primary whitespace-nowrap">
              Unit
            </th>
            {ALL_SYSTEM_IDS.map((id) => (
              <th
                key={id}
                className="px-3 py-2.5 text-center font-mono text-[11px] font-semibold uppercase tracking-widest text-primary whitespace-nowrap"
              >
                <span
                  className="inline-flex items-center gap-1"
                  style={{ color: SYSTEM_COLOR[id] }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: SYSTEM_COLOR[id] }}
                  />
                  {SYSTEM_NAME[id]}
                </span>
              </th>
            ))}
            <th className="px-3 py-2.5 text-center font-mono text-[11px] font-semibold uppercase tracking-widest text-primary whitespace-nowrap">
              FEM Importance
            </th>
            <th className="px-3 py-2.5 text-center font-mono text-[11px] font-semibold uppercase tracking-widest text-primary whitespace-nowrap">
              Model Complexity
            </th>
          </tr>
        </thead>
        <tbody>
          {INPUT_EFFECT_ROWS.map((row, rowIdx) => (
            <tr
              key={row.param}
              data-ocid={`comparison.input_effects_table.row.${rowIdx + 1}`}
              className={`border-b border-border/30 hover:bg-primary/5 transition-colors ${
                rowIdx % 2 === 0 ? "bg-card" : "bg-background"
              }`}
            >
              <td className="px-3 py-2 whitespace-nowrap">
                <span className="font-mono text-xs font-medium text-foreground">
                  {row.param}
                </span>
              </td>
              <td className="px-3 py-2 text-center">
                <span className="font-mono text-[11px] text-muted-foreground">
                  {row.symbol}
                </span>
              </td>
              <td className="px-3 py-2 text-center whitespace-nowrap">
                <span className="font-mono text-[10px] text-muted-foreground">
                  {row.unit}
                </span>
              </td>
              {ALL_SYSTEM_IDS.map((id) => {
                const val = String(row.values[id] ?? "N/A");
                const cls = SENSITIVITY_BADGE[val] ?? SENSITIVITY_BADGE["N/A"];
                return (
                  <td key={id} className="px-3 py-2 text-center">
                    <Badge
                      variant="outline"
                      className={`font-mono text-[10px] uppercase tracking-wider ${cls}`}
                    >
                      {val}
                    </Badge>
                  </td>
                );
              })}
              <td className="px-3 py-2 text-center">
                <Badge
                  variant="outline"
                  className={`font-mono text-[10px] uppercase tracking-wider ${
                    SENSITIVITY_BADGE[row.femImportance] ??
                    SENSITIVITY_BADGE["N/A"]
                  }`}
                >
                  {row.femImportance}
                </Badge>
              </td>
              <td className="px-3 py-2 text-center">
                <Badge
                  variant="outline"
                  className={`font-mono text-[10px] uppercase tracking-wider ${
                    SENSITIVITY_BADGE[row.modelComplexity] ??
                    SENSITIVITY_BADGE["N/A"]
                  }`}
                >
                  {row.modelComplexity}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

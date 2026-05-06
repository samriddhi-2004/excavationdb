import { OUTPUT_RANGE_ROWS } from "@/lib/comparison-data";
import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

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

type SortDir = "asc" | "desc" | null;

function SortIcon({ active, dir }: { active: boolean; dir: SortDir }) {
  if (!active) return <ChevronsUpDown className="w-3 h-3 text-primary/50" />;
  if (dir === "asc") return <ChevronUp className="w-3 h-3" />;
  return <ChevronDown className="w-3 h-3" />;
}

export function OutputRangesTable() {
  const [sortCol, setSortCol] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>(null);

  function handleSort(col: string) {
    if (sortCol !== col) {
      setSortCol(col);
      setSortDir("asc");
    } else if (sortDir === "asc") {
      setSortDir("desc");
    } else {
      setSortCol(null);
      setSortDir(null);
    }
  }

  const sorted =
    sortCol && sortDir
      ? [...OUTPUT_RANGE_ROWS].sort((a, b) => {
          const av = a.sortNumeric[sortCol] ?? 0;
          const bv = b.sortNumeric[sortCol] ?? 0;
          return sortDir === "asc" ? av - bv : bv - av;
        })
      : OUTPUT_RANGE_ROWS;

  return (
    <div
      data-ocid="comparison.output_ranges_table"
      className="w-full overflow-x-auto rounded-md border border-border/60"
    >
      <table className="w-full text-sm border-collapse min-w-[1000px]">
        <caption className="text-[10px] text-muted-foreground text-left px-3 py-1.5">
          Typical output parameter ranges from published literature and FEM
          analyses. Click column headers to sort by mid-point. N/A = not
          applicable.
        </caption>
        <thead className="sticky top-0 z-20">
          <tr className="bg-card border-b border-primary/30">
            <th className="px-3 py-3 text-left font-mono text-[10px] font-semibold uppercase tracking-widest text-primary whitespace-nowrap w-56 border-r border-border/30">
              Output Parameter
            </th>
            <th className="px-3 py-3 text-left font-mono text-[10px] font-semibold uppercase tracking-widest text-primary whitespace-nowrap w-40 border-r border-border/30 bg-primary/10">
              Indicator
            </th>
            {ALL_SYSTEM_IDS.map((id) => (
              <th
                key={id}
                className="px-2 py-3 text-center font-mono text-[10px] font-semibold uppercase tracking-wider whitespace-nowrap cursor-pointer select-none hover:bg-primary/10 transition-colors border-r border-border/20"
                style={{ color: SYSTEM_COLOR[id] }}
                onClick={() => handleSort(id)}
                onKeyDown={(e) => e.key === "Enter" && handleSort(id)}
              >
                <span className="inline-flex flex-col items-center gap-0.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: SYSTEM_COLOR[id] }}
                  />
                  {SYSTEM_NAME[id]}
                  <SortIcon active={sortCol === id} dir={sortDir} />
                </span>
              </th>
            ))}
            <th className="px-2 py-3 text-center font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap w-14">
              Unit
            </th>
            <th className="px-3 py-3 text-left font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap min-w-[160px]">
              Notes
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, rowIdx) => (
            <tr
              key={row.param}
              data-ocid={`comparison.output_ranges_table.row.${rowIdx + 1}`}
              className={`border-b border-border/20 hover:bg-primary/5 transition-colors ${
                rowIdx % 2 === 0 ? "bg-card" : "bg-background"
              }`}
            >
              <td className="px-3 py-2.5 border-r border-border/30">
                <span className="font-mono text-xs font-semibold text-foreground">
                  {row.param}
                </span>
              </td>
              <td className="px-3 py-2.5 border-r border-border/30 bg-primary/5">
                {row.indicator && (
                  <span className="font-mono text-[9px] text-primary/60 uppercase tracking-wide leading-tight block">
                    {row.indicator}
                  </span>
                )}
              </td>
              {ALL_SYSTEM_IDS.map((id) => {
                const val = row.values[id];
                const isNA = val === "N/A";
                return (
                  <td
                    key={id}
                    className={`px-2 py-2.5 text-center border-r border-border/15 ${
                      isNA ? "opacity-40" : ""
                    }`}
                  >
                    <span
                      className="inline-block font-mono text-xs px-1.5 py-0.5 rounded-sm"
                      style={{
                        background: isNA ? undefined : `${SYSTEM_COLOR[id]}18`,
                        borderLeft: isNA
                          ? undefined
                          : `2px solid ${SYSTEM_COLOR[id]}50`,
                      }}
                    >
                      {val}
                    </span>
                  </td>
                );
              })}
              <td className="px-2 py-2.5 text-center">
                <span className="font-mono text-[10px] text-muted-foreground">
                  {row.unit}
                </span>
              </td>
              <td className="px-3 py-2.5">
                <span className="font-mono text-[10px] text-muted-foreground/80 leading-relaxed">
                  {row.notes}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

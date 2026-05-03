import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";
import { useMemo, useState } from "react";

export interface ColumnDef<T> {
  key: keyof T | string;
  header: string;
  render?: (row: T) => React.ReactNode;
  sortable?: boolean;
  align?: "left" | "center" | "right";
  mono?: boolean;
  width?: string;
}

interface TechTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  keyField: keyof T;
  className?: string;
  rowClassName?: (row: T, index: number) => string;
  onRowClick?: (row: T) => void;
  caption?: string;
  loading?: boolean;
  emptyMessage?: string;
}

type SortDir = "asc" | "desc" | null;

export function TechTable<T>({
  columns,
  data,
  keyField,
  className,
  rowClassName,
  onRowClick,
  caption,
  loading,
  emptyMessage = "No data available",
}: TechTableProps<T>) {
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

  const sorted = useMemo(() => {
    if (!sortKey || !sortDir) return data;
    return [...data].sort((a, b) => {
      const ra = a as Record<string, unknown>;
      const rb = b as Record<string, unknown>;
      const av = ra[sortKey];
      const bv = rb[sortKey];
      if (av === undefined || av === null) return 1;
      if (bv === undefined || bv === null) return -1;
      if (typeof av === "number" && typeof bv === "number") {
        return sortDir === "asc" ? av - bv : bv - av;
      }
      const as = String(av).toLowerCase();
      const bs = String(bv).toLowerCase();
      return sortDir === "asc" ? as.localeCompare(bs) : bs.localeCompare(as);
    });
  }, [data, sortKey, sortDir]);

  return (
    <div
      className={cn(
        "w-full overflow-x-auto rounded-md border border-border/60",
        className,
      )}
    >
      <table className="w-full text-sm border-collapse">
        {caption && (
          <caption className="text-xs text-muted-foreground text-left px-3 py-1.5 caption-bottom">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="bg-primary/15 border-b border-primary/25">
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className={cn(
                  "px-3 py-2.5 text-left font-mono text-[11px] font-semibold uppercase tracking-widest text-primary whitespace-nowrap select-none",
                  col.align === "right" && "text-right",
                  col.align === "center" && "text-center",
                  col.sortable &&
                    "cursor-pointer hover:text-primary/80 transition-colors",
                  col.width,
                )}
                style={col.width ? { width: col.width } : undefined}
                onClick={
                  col.sortable ? () => handleSort(String(col.key)) : undefined
                }
                onKeyDown={
                  col.sortable
                    ? (e) => {
                        if (e.key === "Enter") handleSort(String(col.key));
                      }
                    : undefined
                }
              >
                <span className="inline-flex items-center gap-1">
                  {col.header}
                  {col.sortable && (
                    <span className="text-primary/50">
                      {sortKey === String(col.key) && sortDir === "asc" ? (
                        <ChevronUp className="w-3 h-3" />
                      ) : sortKey === String(col.key) && sortDir === "desc" ? (
                        <ChevronDown className="w-3 h-3" />
                      ) : (
                        <ChevronsUpDown className="w-3 h-3" />
                      )}
                    </span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            Array.from({ length: 4 }, (_, i) => `sk-tt-${i}`).map((key) => (
              <tr key={key} className="border-b border-border/40">
                {columns.map((col) => (
                  <td key={String(col.key)} className="px-3 py-2.5">
                    <div className="h-4 bg-muted/60 rounded animate-pulse" />
                  </td>
                ))}
              </tr>
            ))
          ) : sorted.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-3 py-8 text-center text-muted-foreground font-mono text-xs"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            sorted.map((row, i) => {
              const rowRec = row as Record<string, unknown>;
              return (
                <tr
                  key={String(rowRec[keyField as string])}
                  data-ocid={`table.row.${i + 1}`}
                  onClick={onRowClick ? () => onRowClick(row) : undefined}
                  onKeyDown={
                    onRowClick
                      ? (e) => {
                          if (e.key === "Enter") onRowClick(row);
                        }
                      : undefined
                  }
                  className={cn(
                    "border-b border-border/30 transition-colors duration-100",
                    i % 2 === 0 ? "bg-card" : "bg-background",
                    onRowClick && "cursor-pointer hover:bg-primary/5",
                    !onRowClick && "hover:bg-muted/30",
                    rowClassName?.(row, i),
                  )}
                >
                  {columns.map((col) => {
                    const rawVal = rowRec[col.key as string];
                    const display = col.render
                      ? col.render(row)
                      : String(rawVal ?? "");
                    return (
                      <td
                        key={String(col.key)}
                        className={cn(
                          "px-3 py-2.5",
                          col.mono && "font-mono text-xs",
                          col.align === "right" && "text-right",
                          col.align === "center" && "text-center",
                        )}
                      >
                        {display}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

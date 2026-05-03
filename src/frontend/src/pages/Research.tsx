import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { RESEARCH_PAPERS } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { ResearchPaper } from "@/types";
import {
  ArrowUpDown,
  BookOpen,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";

const CATEGORY_FILTERS: { label: string; value: string }[] = [
  { label: "All", value: "all" },
  { label: "Soldier Pile", value: "soldier-pile" },
  { label: "Secant Pile", value: "secant-pile" },
  { label: "Sheet Pile", value: "sheet-pile" },
  { label: "Tangent Pile", value: "tangent-pile" },
  { label: "Micropile", value: "micropile" },
  { label: "Diaphragm Wall", value: "diaphragm-wall" },
  { label: "FEM", value: "fem" },
  { label: "Earth Pressure", value: "earth-pressure" },
  { label: "Case Study", value: "case-study" },
  { label: "Experimental", value: "experimental" },
];

const CATEGORY_COLORS: Record<string, string> = {
  "soldier-pile": "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",
  "secant-pile": "text-emerald-400 border-emerald-400/40 bg-emerald-400/10",
  "sheet-pile": "text-amber-400 border-amber-400/40 bg-amber-400/10",
  "tangent-pile": "text-violet-400 border-violet-400/40 bg-violet-400/10",
  micropile: "text-rose-400 border-rose-400/40 bg-rose-400/10",
  "diaphragm-wall": "text-sky-400 border-sky-400/40 bg-sky-400/10",
  fem: "text-primary border-primary/40 bg-primary/10",
  "earth-pressure": "text-orange-400 border-orange-400/40 bg-orange-400/10",
  "case-study": "text-green-400 border-green-400/40 bg-green-400/10",
  experimental: "text-fuchsia-400 border-fuchsia-400/40 bg-fuchsia-400/10",
  urban: "text-indigo-400 border-indigo-400/40 bg-indigo-400/10",
  design: "text-yellow-400 border-yellow-400/40 bg-yellow-400/10",
  "deep-excavation": "text-red-400 border-red-400/40 bg-red-400/10",
  "lateral-load": "text-teal-400 border-teal-400/40 bg-teal-400/10",
  probabilistic: "text-purple-400 border-purple-400/40 bg-purple-400/10",
  "soft-clay": "text-lime-400 border-lime-400/40 bg-lime-400/10",
  "soil-variability": "text-stone-400 border-stone-400/40 bg-stone-400/10",
};

function catClass(cat: string): string {
  return (
    CATEGORY_COLORS[cat] ?? "text-muted-foreground border-border/40 bg-muted/30"
  );
}

type SortKey = "title" | "method" | null;
type SortDir = "asc" | "desc";

export default function Research() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortKey, setSortKey] = useState<SortKey>("title");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let papers = RESEARCH_PAPERS as ResearchPaper[];
    if (search.trim()) {
      const q = search.toLowerCase();
      papers = papers.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.method.toLowerCase().includes(q) ||
          p.keyParameters.toLowerCase().includes(q) ||
          p.abstract.toLowerCase().includes(q),
      );
    }
    if (activeCategory !== "all") {
      papers = papers.filter((p) => p.categories.includes(activeCategory));
    }
    if (sortKey) {
      papers = [...papers].sort((a, b) => {
        const av = a[sortKey].toLowerCase();
        const bv = b[sortKey].toLowerCase();
        return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
      });
    }
    return papers;
  }, [search, activeCategory, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  function toggleExpand(id: string) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  return (
    <div className="min-h-full flex flex-col">
      {/* ── Header ── */}
      <div className="border-b border-border/40 bg-card px-6 py-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
              Literature
            </span>
          </div>
          <h1 className="font-display text-xl font-bold text-foreground tracking-tight">
            Research Papers Library
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Indexed academic literature on underground excavation systems —
            methods, parameters, and category mapping.
          </p>
        </div>
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/60 pointer-events-none" />
          <Input
            placeholder="Search title, method, parameters…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 w-72 h-8 text-xs font-mono bg-background border-border/60 placeholder:text-muted-foreground/40"
            data-ocid="research.search_input"
          />
        </div>
      </div>

      {/* ── Filter row ── */}
      <div className="border-b border-border/40 bg-card/30 px-6 py-2.5 flex flex-wrap gap-1.5">
        {CATEGORY_FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setActiveCategory(f.value)}
            data-ocid={`research.filter.${f.value}`}
            className={cn(
              "px-2.5 py-1 rounded font-mono text-[10px] uppercase tracking-wider border transition-colors",
              activeCategory === f.value
                ? "bg-primary/20 text-primary border-primary/50"
                : "bg-transparent text-muted-foreground border-border/30 hover:text-foreground hover:border-border/60",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* ── Stat bar ── */}
      <div className="border-b border-border/30 bg-muted/20 px-6 py-1.5 flex items-center gap-5">
        <span className="font-mono text-[10px] text-muted-foreground">
          <span className="text-foreground font-semibold">
            {RESEARCH_PAPERS.length}
          </span>{" "}
          total papers
        </span>
        <span className="text-border/60 text-xs">|</span>
        <span className="font-mono text-[10px] text-muted-foreground">
          <span
            className={cn(
              "font-semibold",
              filtered.length < RESEARCH_PAPERS.length
                ? "text-primary"
                : "text-foreground",
            )}
          >
            {filtered.length}
          </span>{" "}
          showing
        </span>
        {(search || activeCategory !== "all") && (
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setActiveCategory("all");
            }}
            data-ocid="research.clear_filters"
            className="font-mono text-[10px] text-muted-foreground/60 hover:text-muted-foreground transition-colors underline underline-offset-2"
          >
            clear filters
          </button>
        )}
      </div>

      {/* ── Table ── */}
      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-muted/30 border-b border-border/40">
              <th className="w-8 px-4 py-2.5 text-left" />
              <SortHeader
                label="Title"
                active={sortKey === "title"}
                onClick={() => toggleSort("title")}
                className="w-[38%]"
              />
              <SortHeader
                label="Method"
                active={sortKey === "method"}
                onClick={() => toggleSort("method")}
                className="w-[22%]"
              />
              <th className="px-4 py-2.5 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground w-[22%]">
                Key Parameters
              </th>
              <th className="px-4 py-2.5 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Categories
              </th>
              <th className="px-4 py-2.5 w-8" />
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-16 text-center"
                  data-ocid="research.empty_state"
                >
                  <p className="font-mono text-xs text-muted-foreground">
                    No papers match the current filter.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setActiveCategory("all");
                    }}
                    className="mt-2 font-mono text-[11px] text-primary hover:underline"
                  >
                    Clear all filters
                  </button>
                </td>
              </tr>
            ) : (
              filtered.map((paper, i) => (
                <PaperRow
                  key={paper.id}
                  paper={paper}
                  index={i}
                  expanded={expandedId === paper.id}
                  onToggle={() => toggleExpand(paper.id)}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Sub-components ───────────────────────────────────────────────────────────

function SortHeader({
  label,
  active,
  onClick,
  className,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <th
      className={cn(
        "px-4 py-2.5 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground cursor-pointer select-none hover:text-foreground transition-colors",
        className,
      )}
    >
      <button
        type="button"
        onClick={onClick}
        className="flex items-center gap-1"
        data-ocid={`research.sort.${label.toLowerCase()}`}
      >
        {label}
        <ArrowUpDown
          className={cn(
            "w-3 h-3 transition-colors",
            active ? "text-primary" : "text-muted-foreground/40",
          )}
        />
      </button>
    </th>
  );
}

function PaperRow({
  paper,
  index,
  expanded,
  onToggle,
}: {
  paper: ResearchPaper;
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  const rowNum = index + 1;
  return (
    <>
      <tr
        data-ocid={`research.paper.${rowNum}`}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onToggle();
        }}
        tabIndex={0}
        className={cn(
          "border-b border-border/30 cursor-pointer group transition-colors",
          expanded ? "bg-primary/5 border-primary/20" : "hover:bg-muted/20",
        )}
      >
        {/* Row number */}
        <td className="px-4 py-3 font-mono text-[10px] text-muted-foreground/50 w-8">
          {String(rowNum).padStart(2, "0")}
        </td>

        {/* Title */}
        <td className="px-4 py-3">
          <span
            className={cn(
              "font-display font-semibold text-xs leading-snug block",
              expanded
                ? "text-primary"
                : "text-foreground group-hover:text-primary transition-colors",
            )}
          >
            {paper.title}
          </span>
        </td>

        {/* Method */}
        <td className="px-4 py-3">
          <span className="font-mono text-[10px] text-muted-foreground leading-relaxed">
            {paper.method}
          </span>
        </td>

        {/* Key Parameters */}
        <td className="px-4 py-3">
          <span className="font-mono text-[10px] text-muted-foreground/80 leading-relaxed">
            {paper.keyParameters}
          </span>
        </td>

        {/* Categories */}
        <td className="px-4 py-3">
          <div className="flex flex-wrap gap-1">
            {paper.categories.map((cat) => (
              <span
                key={cat}
                className={cn(
                  "inline-block px-1.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wide border",
                  catClass(cat),
                )}
              >
                {cat}
              </span>
            ))}
          </div>
        </td>

        {/* Expand toggle */}
        <td className="px-3 py-3 text-right">
          {expanded ? (
            <ChevronUp className="w-3.5 h-3.5 text-primary ml-auto" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-muted-foreground/50 ml-auto group-hover:text-primary transition-colors" />
          )}
        </td>
      </tr>

      {/* Expanded detail panel */}
      {expanded && (
        <tr
          data-ocid={`research.paper.${rowNum}.detail`}
          className="border-b border-primary/20 bg-primary/5"
        >
          <td />
          <td colSpan={5} className="px-4 pb-5 pt-1">
            <DetailPanel paper={paper} rowNum={rowNum} />
          </td>
        </tr>
      )}
    </>
  );
}

function DetailPanel({
  paper,
  rowNum,
}: {
  paper: ResearchPaper;
  rowNum: number;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Abstract */}
      <div className="md:col-span-2">
        <p className="font-mono text-[10px] uppercase tracking-widest text-primary/70 mb-1">
          Abstract
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {paper.abstract}
        </p>
      </div>

      {/* Metadata sidebar */}
      <div className="space-y-3 border-l border-border/30 pl-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary/70 mb-1">
            Method
          </p>
          <p className="text-xs text-muted-foreground">{paper.method}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary/70 mb-1">
            Soil Parameters
          </p>
          <p className="font-mono text-[10px] text-muted-foreground leading-relaxed">
            {paper.keyParameters}
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary/70 mb-1.5">
            Categories
          </p>
          <div className="flex flex-wrap gap-1">
            {paper.categories.map((cat) => (
              <Badge
                key={cat}
                variant="outline"
                className={cn(
                  "font-mono text-[9px] uppercase tracking-wide px-1.5 py-0.5 border",
                  catClass(cat),
                )}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>
        {paper.doiLink && (
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary/70 mb-1">
              DOI
            </p>
            <a
              href={paper.doiLink}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid={`research.paper.${rowNum}.doi_link`}
              className="inline-flex items-center gap-1 font-mono text-[10px] text-primary hover:underline transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              View paper
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { RESEARCH_PAPERS } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { ResearchPaper } from "@/types";
import {
  ArrowUpDown,
  BookOpen,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Plus,
  Search,
  X,
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

// ─ Empty form state
const EMPTY_FORM: Omit<ResearchPaper, "id"> = {
  title: "",
  authors: "",
  year: undefined,
  method: "",
  keyParameters: "",
  categories: [],
  abstract: "",
  conclusion: "",
  doiLink: "",
};

export default function Research() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortKey, setSortKey] = useState<SortKey>("title");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // local-only paper additions (state-based, no backend)
  const [localPapers, setLocalPapers] = useState<ResearchPaper[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [form, setForm] = useState<Omit<ResearchPaper, "id">>(EMPTY_FORM);
  const [formError, setFormError] = useState("");
  const [categoryInput, setCategoryInput] = useState("");

  const allPapers = useMemo(
    () => [...RESEARCH_PAPERS, ...localPapers],
    [localPapers],
  );

  const filtered = useMemo(() => {
    let papers = allPapers as ResearchPaper[];
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
  }, [allPapers, search, activeCategory, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  function toggleExpand(id: string) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  function handleFormChange(field: keyof typeof EMPTY_FORM, value: string) {
    setForm((prev) => ({
      ...prev,
      [field]: field === "year" ? (value ? Number(value) : undefined) : value,
    }));
  }

  function addCategory() {
    const cat = categoryInput.trim().toLowerCase().replace(/\s+/g, "-");
    if (cat && !form.categories.includes(cat)) {
      setForm((prev) => ({ ...prev, categories: [...prev.categories, cat] }));
    }
    setCategoryInput("");
  }

  function removeCategory(cat: string) {
    setForm((prev) => ({
      ...prev,
      categories: prev.categories.filter((c) => c !== cat),
    }));
  }

  function submitPaper() {
    if (!form.title.trim()) {
      setFormError("Title is required.");
      return;
    }
    if (!form.method.trim()) {
      setFormError("Method is required.");
      return;
    }
    if (!form.abstract.trim()) {
      setFormError("Abstract is required.");
      return;
    }
    setFormError("");
    const newPaper: ResearchPaper = {
      ...form,
      id: `local-${Date.now()}`,
    };
    setLocalPapers((prev) => [...prev, newPaper]);
    setForm(EMPTY_FORM);
    setCategoryInput("");
    setShowAddForm(false);
  }

  return (
    <div className="min-h-full flex flex-col">
      {/* Header */}
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
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/60 pointer-events-none" />
            <Input
              placeholder="Search title, method, parameters\u2026"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 w-64 h-8 text-xs font-mono bg-background border-border/60 placeholder:text-muted-foreground/40"
              data-ocid="research.search_input"
            />
          </div>
          <Button
            type="button"
            size="sm"
            data-ocid="research.add_paper_button"
            onClick={() => setShowAddForm((v) => !v)}
            className="flex items-center gap-1.5 h-8 text-xs font-mono"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Paper
          </Button>
        </div>
      </div>

      {/* Add Paper Form */}
      {showAddForm && (
        <div
          data-ocid="research.add_paper_form"
          className="border-b border-border/40 bg-muted/20 px-6 py-5"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-sm font-semibold text-foreground">
              Add New Research Paper
            </h2>
            <button
              type="button"
              data-ocid="research.add_paper_form.close_button"
              onClick={() => {
                setShowAddForm(false);
                setFormError("");
              }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Title */}
            <div className="md:col-span-2">
              <Label
                htmlFor="paper-title"
                className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
              >
                Title *
              </Label>
              <Input
                id="paper-title"
                value={form.title}
                onChange={(e) => handleFormChange("title", e.target.value)}
                placeholder="Enter full paper title"
                className="mt-1 text-xs font-mono h-8"
                data-ocid="research.add_paper_form.title_input"
              />
            </div>
            {/* Authors */}
            <div>
              <Label
                htmlFor="paper-authors"
                className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
              >
                Authors
              </Label>
              <Input
                id="paper-authors"
                value={form.authors ?? ""}
                onChange={(e) => handleFormChange("authors", e.target.value)}
                placeholder="e.g. Smith, J. & Lee, K."
                className="mt-1 text-xs font-mono h-8"
                data-ocid="research.add_paper_form.authors_input"
              />
            </div>
            {/* Year */}
            <div>
              <Label
                htmlFor="paper-year"
                className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
              >
                Year
              </Label>
              <Input
                id="paper-year"
                type="number"
                min={1980}
                max={new Date().getFullYear()}
                value={form.year ?? ""}
                onChange={(e) => handleFormChange("year", e.target.value)}
                placeholder="e.g. 2023"
                className="mt-1 text-xs font-mono h-8"
                data-ocid="research.add_paper_form.year_input"
              />
            </div>
            {/* Method */}
            <div>
              <Label
                htmlFor="paper-method"
                className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
              >
                Method / Analysis Type *
              </Label>
              <Input
                id="paper-method"
                value={form.method}
                onChange={(e) => handleFormChange("method", e.target.value)}
                placeholder="e.g. FEM – Plaxis 2D, Field monitoring"
                className="mt-1 text-xs font-mono h-8"
                data-ocid="research.add_paper_form.method_input"
              />
            </div>
            {/* Key Parameters */}
            <div>
              <Label
                htmlFor="paper-params"
                className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
              >
                Key Parameters
              </Label>
              <Input
                id="paper-params"
                value={form.keyParameters}
                onChange={(e) =>
                  handleFormChange("keyParameters", e.target.value)
                }
                placeholder="e.g. φ=32°, c=0 kPa, H=12 m"
                className="mt-1 text-xs font-mono h-8"
                data-ocid="research.add_paper_form.params_input"
              />
            </div>
            {/* DOI */}
            <div>
              <Label
                htmlFor="paper-doi"
                className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
              >
                DOI / URL
              </Label>
              <Input
                id="paper-doi"
                value={form.doiLink}
                onChange={(e) => handleFormChange("doiLink", e.target.value)}
                placeholder="https://doi.org/10.xxx"
                className="mt-1 text-xs font-mono h-8"
                data-ocid="research.add_paper_form.doi_input"
              />
            </div>
            {/* Categories */}
            <div className="md:col-span-2">
              <Label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Categories
              </Label>
              <div className="flex gap-2 mt-1">
                <Input
                  value={categoryInput}
                  onChange={(e) => setCategoryInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addCategory()}
                  placeholder="Type a category and press Enter or Add"
                  className="text-xs font-mono h-8 flex-1"
                  data-ocid="research.add_paper_form.category_input"
                />
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={addCategory}
                  className="h-8 text-xs"
                  data-ocid="research.add_paper_form.add_category_button"
                >
                  Add
                </Button>
              </div>
              {form.categories.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {form.categories.map((cat) => (
                    <span
                      key={cat}
                      className={cn(
                        "inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wide border",
                        catClass(cat),
                      )}
                    >
                      {cat}
                      <button
                        type="button"
                        onClick={() => removeCategory(cat)}
                        className="hover:opacity-70"
                        aria-label={`Remove category ${cat}`}
                      >
                        <X className="w-2.5 h-2.5" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
            {/* Abstract */}
            <div className="md:col-span-2">
              <Label
                htmlFor="paper-abstract"
                className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
              >
                Abstract *
              </Label>
              <Textarea
                id="paper-abstract"
                value={form.abstract}
                onChange={(e) => handleFormChange("abstract", e.target.value)}
                placeholder="Paste or type the paper abstract here\u2026"
                className="mt-1 text-xs font-mono resize-none h-24"
                data-ocid="research.add_paper_form.abstract_textarea"
              />
            </div>
            {/* Conclusion */}
            <div className="md:col-span-2">
              <Label
                htmlFor="paper-conclusion"
                className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
              >
                Conclusion
              </Label>
              <Textarea
                id="paper-conclusion"
                value={form.conclusion ?? ""}
                onChange={(e) => handleFormChange("conclusion", e.target.value)}
                placeholder="Summarize the paper\u2019s conclusions and key findings\u2026"
                className="mt-1 text-xs font-mono resize-none h-20"
                data-ocid="research.add_paper_form.conclusion_textarea"
              />
            </div>
          </div>
          {formError && (
            <p
              data-ocid="research.add_paper_form.error_state"
              className="mt-3 font-mono text-xs text-destructive"
            >
              {formError}
            </p>
          )}
          <div className="flex gap-3 mt-4 justify-end">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setShowAddForm(false);
                setFormError("");
              }}
              data-ocid="research.add_paper_form.cancel_button"
              className="text-xs font-mono"
            >
              Cancel
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={submitPaper}
              data-ocid="research.add_paper_form.submit_button"
              className="text-xs font-mono"
            >
              Save Paper
            </Button>
          </div>
        </div>
      )}

      {/* Filter row */}
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

      {/* Stat bar */}
      <div className="border-b border-border/30 bg-muted/20 px-6 py-1.5 flex items-center gap-5">
        <span className="font-mono text-[10px] text-muted-foreground">
          <span className="text-foreground font-semibold">
            {allPapers.length}
          </span>{" "}
          total papers
        </span>
        {localPapers.length > 0 && (
          <span className="font-mono text-[10px] text-primary">
            +{localPapers.length} added locally
          </span>
        )}
        <span className="text-border/60 text-xs">|</span>
        <span className="font-mono text-[10px] text-muted-foreground">
          <span
            className={cn(
              "font-semibold",
              filtered.length < allPapers.length
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

      {/* Table */}
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

// ── Sub-components ────────────────────────────────────────────────────────────────

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
  const isLocal = paper.id.startsWith("local-");
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
        <td className="px-4 py-3 font-mono text-[10px] text-muted-foreground/50 w-8">
          {String(rowNum).padStart(2, "0")}
        </td>
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
            {isLocal && (
              <Badge
                variant="outline"
                className="ml-2 text-[8px] font-mono text-primary border-primary/40 bg-primary/10 align-middle"
              >
                Local
              </Badge>
            )}
          </span>
          {paper.authors && (
            <span className="font-mono text-[9px] text-muted-foreground/60 block mt-0.5">
              {paper.authors}
              {paper.year ? ` (${paper.year})` : ""}
            </span>
          )}
        </td>
        <td className="px-4 py-3">
          <span className="font-mono text-[10px] text-muted-foreground leading-relaxed">
            {paper.method}
          </span>
        </td>
        <td className="px-4 py-3">
          <span className="font-mono text-[10px] text-muted-foreground/80 leading-relaxed">
            {paper.keyParameters}
          </span>
        </td>
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
        <td className="px-3 py-3 text-right">
          {expanded ? (
            <ChevronUp className="w-3.5 h-3.5 text-primary ml-auto" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-muted-foreground/50 ml-auto group-hover:text-primary transition-colors" />
          )}
        </td>
      </tr>
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
    <div className="space-y-4">
      {/* Abstract + Conclusion row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary/70 mb-1">
            Abstract
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {paper.abstract}
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary/70 mb-1">
            Conclusion
          </p>
          {paper.conclusion ? (
            <p className="text-xs text-muted-foreground leading-relaxed">
              {paper.conclusion}
            </p>
          ) : (
            <p className="text-xs text-muted-foreground/40 italic">
              No conclusion provided for this paper.
            </p>
          )}
        </div>
      </div>

      <Separator className="bg-border/30" />

      {/* Metadata row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary/70 mb-1">
            Method
          </p>
          <p className="text-xs text-muted-foreground">{paper.method}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary/70 mb-1">
            Key Parameters
          </p>
          <p className="font-mono text-[10px] text-muted-foreground leading-relaxed">
            {paper.keyParameters}
          </p>
        </div>
        <div className="space-y-3">
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
          {(paper.authors || paper.year) && (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary/70 mb-1">
                Authors / Year
              </p>
              <p className="font-mono text-[10px] text-muted-foreground">
                {paper.authors ?? "Unknown"}
                {paper.year ? ` — ${paper.year}` : ""}
              </p>
            </div>
          )}
          {paper.doiLink && (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary/70 mb-1">
                DOI / Link
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
    </div>
  );
}

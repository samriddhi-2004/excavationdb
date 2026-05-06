import { c as createLucideIcon, j as jsxRuntimeExports, a as cn, r as reactExports, T as Primitive, d as BookOpen, B as Button, X, C as ChevronDown, e as Separator } from "./index-DUkTmDMn.js";
import { B as Badge } from "./badge-Bv2Vw58l.js";
import { R as RESEARCH_PAPERS } from "./data-BZPzXv08.js";
import { C as ChevronUp } from "./chevron-up-CUcdNnFf.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
];
const ArrowUpDown = createLucideIcon("arrow-up-down", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        var _a;
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root = Label$1;
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
const CATEGORY_FILTERS = [
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
  { label: "Experimental", value: "experimental" }
];
const CATEGORY_COLORS = {
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
  "soil-variability": "text-stone-400 border-stone-400/40 bg-stone-400/10"
};
function catClass(cat) {
  return CATEGORY_COLORS[cat] ?? "text-muted-foreground border-border/40 bg-muted/30";
}
const EMPTY_FORM = {
  title: "",
  authors: "",
  year: void 0,
  method: "",
  keyParameters: "",
  categories: [],
  abstract: "",
  conclusion: "",
  doiLink: ""
};
function Research() {
  const [search, setSearch] = reactExports.useState("");
  const [activeCategory, setActiveCategory] = reactExports.useState("all");
  const [sortKey, setSortKey] = reactExports.useState("title");
  const [sortDir, setSortDir] = reactExports.useState("asc");
  const [expandedId, setExpandedId] = reactExports.useState(null);
  const [localPapers, setLocalPapers] = reactExports.useState([]);
  const [showAddForm, setShowAddForm] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState(EMPTY_FORM);
  const [formError, setFormError] = reactExports.useState("");
  const [categoryInput, setCategoryInput] = reactExports.useState("");
  const allPapers = reactExports.useMemo(
    () => [...RESEARCH_PAPERS, ...localPapers],
    [localPapers]
  );
  const filtered = reactExports.useMemo(() => {
    let papers = allPapers;
    if (search.trim()) {
      const q = search.toLowerCase();
      papers = papers.filter(
        (p) => p.title.toLowerCase().includes(q) || p.method.toLowerCase().includes(q) || p.keyParameters.toLowerCase().includes(q) || p.abstract.toLowerCase().includes(q)
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
  function toggleSort(key) {
    if (sortKey === key) setSortDir((d) => d === "asc" ? "desc" : "asc");
    else {
      setSortKey(key);
      setSortDir("asc");
    }
  }
  function toggleExpand(id) {
    setExpandedId((prev) => prev === id ? null : id);
  }
  function handleFormChange(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: field === "year" ? value ? Number(value) : void 0 : value
    }));
  }
  function addCategory() {
    const cat = categoryInput.trim().toLowerCase().replace(/\s+/g, "-");
    if (cat && !form.categories.includes(cat)) {
      setForm((prev) => ({ ...prev, categories: [...prev.categories, cat] }));
    }
    setCategoryInput("");
  }
  function removeCategory(cat) {
    setForm((prev) => ({
      ...prev,
      categories: prev.categories.filter((c) => c !== cat)
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
    const newPaper = {
      ...form,
      id: `local-${Date.now()}`
    };
    setLocalPapers((prev) => [...prev, newPaper]);
    setForm(EMPTY_FORM);
    setCategoryInput("");
    setShowAddForm(false);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-full flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/40 bg-card px-6 py-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-primary", children: "Literature" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-foreground tracking-tight", children: "Research Papers Library" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Indexed academic literature on underground excavation systems — methods, parameters, and category mapping." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/60 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Search title, method, parameters\\u2026",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              className: "pl-8 w-64 h-8 text-xs font-mono bg-background border-border/60 placeholder:text-muted-foreground/40",
              "data-ocid": "research.search_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            size: "sm",
            "data-ocid": "research.add_paper_button",
            onClick: () => setShowAddForm((v) => !v),
            className: "flex items-center gap-1.5 h-8 text-xs font-mono",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
              "Add Paper"
            ]
          }
        )
      ] })
    ] }),
    showAddForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "research.add_paper_form",
        className: "border-b border-border/40 bg-muted/20 px-6 py-5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold text-foreground", children: "Add New Research Paper" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "research.add_paper_form.close_button",
                onClick: () => {
                  setShowAddForm(false);
                  setFormError("");
                },
                className: "text-muted-foreground hover:text-foreground transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "paper-title",
                  className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
                  children: "Title *"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "paper-title",
                  value: form.title,
                  onChange: (e) => handleFormChange("title", e.target.value),
                  placeholder: "Enter full paper title",
                  className: "mt-1 text-xs font-mono h-8",
                  "data-ocid": "research.add_paper_form.title_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "paper-authors",
                  className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
                  children: "Authors"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "paper-authors",
                  value: form.authors ?? "",
                  onChange: (e) => handleFormChange("authors", e.target.value),
                  placeholder: "e.g. Smith, J. & Lee, K.",
                  className: "mt-1 text-xs font-mono h-8",
                  "data-ocid": "research.add_paper_form.authors_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "paper-year",
                  className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
                  children: "Year"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "paper-year",
                  type: "number",
                  min: 1980,
                  max: (/* @__PURE__ */ new Date()).getFullYear(),
                  value: form.year ?? "",
                  onChange: (e) => handleFormChange("year", e.target.value),
                  placeholder: "e.g. 2023",
                  className: "mt-1 text-xs font-mono h-8",
                  "data-ocid": "research.add_paper_form.year_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "paper-method",
                  className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
                  children: "Method / Analysis Type *"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "paper-method",
                  value: form.method,
                  onChange: (e) => handleFormChange("method", e.target.value),
                  placeholder: "e.g. FEM – Plaxis 2D, Field monitoring",
                  className: "mt-1 text-xs font-mono h-8",
                  "data-ocid": "research.add_paper_form.method_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "paper-params",
                  className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
                  children: "Key Parameters"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "paper-params",
                  value: form.keyParameters,
                  onChange: (e) => handleFormChange("keyParameters", e.target.value),
                  placeholder: "e.g. φ=32°, c=0 kPa, H=12 m",
                  className: "mt-1 text-xs font-mono h-8",
                  "data-ocid": "research.add_paper_form.params_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "paper-doi",
                  className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
                  children: "DOI / URL"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "paper-doi",
                  value: form.doiLink,
                  onChange: (e) => handleFormChange("doiLink", e.target.value),
                  placeholder: "https://doi.org/10.xxx",
                  className: "mt-1 text-xs font-mono h-8",
                  "data-ocid": "research.add_paper_form.doi_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: "Categories" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: categoryInput,
                    onChange: (e) => setCategoryInput(e.target.value),
                    onKeyDown: (e) => e.key === "Enter" && addCategory(),
                    placeholder: "Type a category and press Enter or Add",
                    className: "text-xs font-mono h-8 flex-1",
                    "data-ocid": "research.add_paper_form.category_input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    onClick: addCategory,
                    className: "h-8 text-xs",
                    "data-ocid": "research.add_paper_form.add_category_button",
                    children: "Add"
                  }
                )
              ] }),
              form.categories.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mt-2", children: form.categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: cn(
                    "inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wide border",
                    catClass(cat)
                  ),
                  children: [
                    cat,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => removeCategory(cat),
                        className: "hover:opacity-70",
                        "aria-label": `Remove category ${cat}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-2.5 h-2.5" })
                      }
                    )
                  ]
                },
                cat
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "paper-abstract",
                  className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
                  children: "Abstract *"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "paper-abstract",
                  value: form.abstract,
                  onChange: (e) => handleFormChange("abstract", e.target.value),
                  placeholder: "Paste or type the paper abstract here\\u2026",
                  className: "mt-1 text-xs font-mono resize-none h-24",
                  "data-ocid": "research.add_paper_form.abstract_textarea"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "paper-conclusion",
                  className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
                  children: "Conclusion"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "paper-conclusion",
                  value: form.conclusion ?? "",
                  onChange: (e) => handleFormChange("conclusion", e.target.value),
                  placeholder: "Summarize the paper\\u2019s conclusions and key findings\\u2026",
                  className: "mt-1 text-xs font-mono resize-none h-20",
                  "data-ocid": "research.add_paper_form.conclusion_textarea"
                }
              )
            ] })
          ] }),
          formError && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              "data-ocid": "research.add_paper_form.error_state",
              className: "mt-3 font-mono text-xs text-destructive",
              children: formError
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-4 justify-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                size: "sm",
                onClick: () => {
                  setShowAddForm(false);
                  setFormError("");
                },
                "data-ocid": "research.add_paper_form.cancel_button",
                className: "text-xs font-mono",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                size: "sm",
                onClick: submitPaper,
                "data-ocid": "research.add_paper_form.submit_button",
                className: "text-xs font-mono",
                children: "Save Paper"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 bg-card/30 px-6 py-2.5 flex flex-wrap gap-1.5", children: CATEGORY_FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setActiveCategory(f.value),
        "data-ocid": `research.filter.${f.value}`,
        className: cn(
          "px-2.5 py-1 rounded font-mono text-[10px] uppercase tracking-wider border transition-colors",
          activeCategory === f.value ? "bg-primary/20 text-primary border-primary/50" : "bg-transparent text-muted-foreground border-border/30 hover:text-foreground hover:border-border/60"
        ),
        children: f.label
      },
      f.value
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/30 bg-muted/20 px-6 py-1.5 flex items-center gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: allPapers.length }),
        " ",
        "total papers"
      ] }),
      localPapers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] text-primary", children: [
        "+",
        localPapers.length,
        " added locally"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-border/60 text-xs", children: "|" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: cn(
              "font-semibold",
              filtered.length < allPapers.length ? "text-primary" : "text-foreground"
            ),
            children: filtered.length
          }
        ),
        " ",
        "showing"
      ] }),
      (search || activeCategory !== "all") && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            setSearch("");
            setActiveCategory("all");
          },
          "data-ocid": "research.clear_filters",
          className: "font-mono text-[10px] text-muted-foreground/60 hover:text-muted-foreground transition-colors underline underline-offset-2",
          children: "clear filters"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs border-collapse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/30 border-b border-border/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-8 px-4 py-2.5 text-left" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SortHeader,
          {
            label: "Title",
            active: sortKey === "title",
            onClick: () => toggleSort("title"),
            className: "w-[38%]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SortHeader,
          {
            label: "Method",
            active: sortKey === "method",
            onClick: () => toggleSort("method"),
            className: "w-[22%]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground w-[22%]", children: "Key Parameters" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: "Categories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 w-8" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "td",
        {
          colSpan: 6,
          className: "px-4 py-16 text-center",
          "data-ocid": "research.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground", children: "No papers match the current filter." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setSearch("");
                  setActiveCategory("all");
                },
                className: "mt-2 font-mono text-[11px] text-primary hover:underline",
                children: "Clear all filters"
              }
            )
          ]
        }
      ) }) : filtered.map((paper, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        PaperRow,
        {
          paper,
          index: i,
          expanded: expandedId === paper.id,
          onToggle: () => toggleExpand(paper.id)
        },
        paper.id
      )) })
    ] }) })
  ] });
}
function SortHeader({
  label,
  active,
  onClick,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "th",
    {
      className: cn(
        "px-4 py-2.5 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground cursor-pointer select-none hover:text-foreground transition-colors",
        className
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick,
          className: "flex items-center gap-1",
          "data-ocid": `research.sort.${label.toLowerCase()}`,
          children: [
            label,
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ArrowUpDown,
              {
                className: cn(
                  "w-3 h-3 transition-colors",
                  active ? "text-primary" : "text-muted-foreground/40"
                )
              }
            )
          ]
        }
      )
    }
  );
}
function PaperRow({
  paper,
  index,
  expanded,
  onToggle
}) {
  const rowNum = index + 1;
  const isLocal = paper.id.startsWith("local-");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "tr",
      {
        "data-ocid": `research.paper.${rowNum}`,
        onClick: onToggle,
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ") onToggle();
        },
        tabIndex: 0,
        className: cn(
          "border-b border-border/30 cursor-pointer group transition-colors",
          expanded ? "bg-primary/5 border-primary/20" : "hover:bg-muted/20"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono text-[10px] text-muted-foreground/50 w-8", children: String(rowNum).padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: cn(
                  "font-display font-semibold text-xs leading-snug block",
                  expanded ? "text-primary" : "text-foreground group-hover:text-primary transition-colors"
                ),
                children: [
                  paper.title,
                  isLocal && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: "ml-2 text-[8px] font-mono text-primary border-primary/40 bg-primary/10 align-middle",
                      children: "Local"
                    }
                  )
                ]
              }
            ),
            paper.authors && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[9px] text-muted-foreground/60 block mt-0.5", children: [
              paper.authors,
              paper.year ? ` (${paper.year})` : ""
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground leading-relaxed", children: paper.method }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground/80 leading-relaxed", children: paper.keyParameters }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: paper.categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn(
                "inline-block px-1.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wide border",
                catClass(cat)
              ),
              children: cat
            },
            cat
          )) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-right", children: expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5 text-primary ml-auto" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 text-muted-foreground/50 ml-auto group-hover:text-primary transition-colors" }) })
        ]
      }
    ),
    expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "tr",
      {
        "data-ocid": `research.paper.${rowNum}.detail`,
        className: "border-b border-primary/20 bg-primary/5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 5, className: "px-4 pb-5 pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DetailPanel, { paper, rowNum }) })
        ]
      }
    )
  ] });
}
function DetailPanel({
  paper,
  rowNum
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-primary/70 mb-1", children: "Abstract" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: paper.abstract })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-primary/70 mb-1", children: "Conclusion" }),
        paper.conclusion ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: paper.conclusion }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/40 italic", children: "No conclusion provided for this paper." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-border/30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-primary/70 mb-1", children: "Method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: paper.method })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-primary/70 mb-1", children: "Key Parameters" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] text-muted-foreground leading-relaxed", children: paper.keyParameters })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-primary/70 mb-1.5", children: "Categories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: paper.categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: cn(
                "font-mono text-[9px] uppercase tracking-wide px-1.5 py-0.5 border",
                catClass(cat)
              ),
              children: cat
            },
            cat
          )) })
        ] }),
        (paper.authors || paper.year) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-primary/70 mb-1", children: "Authors / Year" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[10px] text-muted-foreground", children: [
            paper.authors ?? "Unknown",
            paper.year ? ` — ${paper.year}` : ""
          ] })
        ] }),
        paper.doiLink && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-primary/70 mb-1", children: "DOI / Link" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: paper.doiLink,
              target: "_blank",
              rel: "noopener noreferrer",
              "data-ocid": `research.paper.${rowNum}.doi_link`,
              className: "inline-flex items-center gap-1 font-mono text-[10px] text-primary hover:underline transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" }),
                "View paper"
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}
export {
  Research as default
};

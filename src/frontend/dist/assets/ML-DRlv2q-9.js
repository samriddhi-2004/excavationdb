import { c as createLucideIcon, j as jsxRuntimeExports, f as BrainCircuit, b as Layers } from "./index-BUl89JH6.js";
import { B as Badge } from "./badge-DmeArO5X.js";
import { D as Database } from "./database-6mT13oWO.js";
import { A as ArrowRight } from "./arrow-right-BdNoOgMW.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  [
    "path",
    {
      d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
      key: "18mbvz"
    }
  ],
  ["path", { d: "M6.453 15h11.094", key: "3shlmq" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }]
];
const FlaskConical = createLucideIcon("flask-conical", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]
];
const GitBranch = createLucideIcon("git-branch", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
];
const Lightbulb = createLucideIcon("lightbulb", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
function SectionHeader({
  icon: Icon,
  label,
  title
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3 border-b border-primary/20 bg-primary/8 rounded-t-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-primary shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] uppercase tracking-[0.15em] text-primary/60", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-sm text-foreground", children: title })
  ] });
}
const FEATURES = [
  [
    "wall_type",
    "categorical",
    "—",
    "6 classes",
    "output",
    "Soldier / Secant / Sheet / Tangent / Micropile / Diaphragm"
  ],
  ["H", "float", "m", "2–40", "input", "Retained excavation height"],
  ["D", "float", "m", "1–20", "input", "Embedment depth below formation level"],
  ["phi", "float", "°", "20–45", "input", "Effective friction angle"],
  ["c", "float", "kPa", "0–100", "input", "Effective cohesion"],
  ["gamma", "float", "kN/m³", "15–22", "input", "Bulk unit weight"],
  [
    "E_soil",
    "float",
    "MPa",
    "5–500",
    "input",
    "Representative elastic modulus"
  ],
  ["nu", "float", "—", "0.15–0.45", "input", "Poisson's ratio"],
  [
    "K0",
    "float",
    "—",
    "0.3–0.9",
    "input",
    "At-rest earth pressure coefficient"
  ],
  ["gwl", "float", "m", "0–H", "input", "Groundwater level depth from surface"],
  [
    "prop_spacing",
    "float",
    "m",
    "1–6",
    "input",
    "Prop / anchor vertical spacing"
  ],
  ["surcharge", "float", "kPa", "0–100", "input", "Applied surface surcharge"],
  [
    "site_class",
    "categorical",
    "—",
    "A–E",
    "input",
    "Seismic site classification"
  ],
  [
    "delta_max",
    "float",
    "mm",
    "0–200",
    "target",
    "Max lateral wall deflection"
  ],
  [
    "settlement_max",
    "float",
    "mm",
    "0–150",
    "target",
    "Max ground surface settlement"
  ],
  ["M_max", "float", "kNm/m", "0–2000", "target", "Maximum bending moment"]
];
const IMPORTANCE = [
  {
    feature: "H (excavation depth)",
    score: 0.24,
    direction: "+ (deeper → higher demand)"
  },
  {
    feature: "phi (friction angle)",
    score: 0.18,
    direction: "– (higher φ → lower pressure)"
  },
  {
    feature: "gwl (groundwater level)",
    score: 0.15,
    direction: "+ (high GWL → seepage pressure)"
  },
  {
    feature: "E_soil (elastic modulus)",
    score: 0.12,
    direction: "– (stiffer soil → less deform.)"
  },
  {
    feature: "prop_spacing",
    score: 0.11,
    direction: "+ (wider spacing → more deflection)"
  },
  {
    feature: "K0",
    score: 0.09,
    direction: "+ (higher K0 → more lateral pressure)"
  },
  {
    feature: "c (cohesion)",
    score: 0.07,
    direction: "– (cohesion reduces active pressure)"
  },
  {
    feature: "surcharge",
    score: 0.04,
    direction: "+ (higher surcharge → more demand)"
  }
];
const FUTURE_SCOPE = [
  "FEM integration: use Plaxis/OpenSees outputs as training labels for physics-informed surrogate models",
  "Real-time soil data API: ingest CPT/SPT borehole feeds for automatic parameter extraction",
  "Uncertainty quantification: conformal prediction intervals on δmax to replace deterministic factor-of-safety",
  "Deep learning for deflection profiles: 1D-CNN predicting full wall deflection curve, not just peak values",
  "Multi-objective optimisation: Pareto front over cost, deflection, and carbon footprint",
  "Federated learning: train across construction firm datasets without exposing proprietary project data",
  "BIM interoperability: ML output → IFC geometry for preliminary wall sizing in digital twins",
  "Risk classification: predict probability of exceeding alert thresholds from early-stage boring logs"
];
const ARCH_STEPS = [
  {
    step: "01",
    title: "Site Input",
    items: [
      "Borehole logs",
      "CPT/SPT data",
      "Topographic survey",
      "Surcharge loads",
      "Budget envelope"
    ],
    border: "border-primary/30",
    bg: "bg-primary/6"
  },
  {
    step: "02",
    title: "Feature Engineering",
    items: [
      "Soil layer averaging",
      "GWL normalisation",
      "One-hot site class",
      "Depth ratio H/D",
      "Pressuremeter index"
    ],
    border: "border-chart-3/30",
    bg: "bg-chart-3/5"
  },
  {
    step: "03",
    title: "ML Model",
    items: [
      "XGBoost Classifier",
      "GBT Regressor",
      "5-fold CV",
      "Optuna tuning",
      "SHAP explanation"
    ],
    border: "border-accent/30",
    bg: "bg-accent/5"
  },
  {
    step: "04",
    title: "Recommendation",
    items: [
      "Wall type (ranked)",
      "Confidence score",
      "δmax prediction",
      "Settlement estimate",
      "Flag if uncertain"
    ],
    border: "border-chart-4/30",
    bg: "bg-chart-4/5"
  }
];
function ML() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-full", "data-ocid": "ml.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/40 bg-card px-6 py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BrainCircuit, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs uppercase tracking-widest text-primary", children: "Future Work" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Future ML Integration" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1 max-w-3xl", children: "A roadmap for automating underground excavation wall-type selection and performance prediction using machine learning — replacing labour-intensive FEM parametric studies with rapid, data-driven recommendations." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mt-3 flex-wrap", children: [
        "Research Roadmap",
        "Classification",
        "Regression",
        "XGBoost",
        "GNN"
      ].map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Badge,
        {
          variant: "outline",
          className: "font-mono text-[9px] uppercase tracking-widest text-primary/70 border-primary/25 bg-primary/6",
          children: tag
        },
        tag
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-6 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          "data-ocid": "ml.dataset.section",
          className: "rounded-md border border-border/40 bg-card overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                icon: Database,
                label: "Section 01",
                title: "Dataset Explanation"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [
                {
                  label: "Estimated size",
                  value: "≥ 2,000",
                  sub: "labelled case entries"
                },
                {
                  label: "Input features",
                  value: "13",
                  sub: "soil + geometry + site"
                },
                {
                  label: "Target variables",
                  value: "3",
                  sub: "δmax, δv, Mmax"
                }
              ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded border border-primary/20 bg-primary/5 px-3 py-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-widest text-primary/60 mb-0.5", children: stat.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-primary", children: stat.value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: stat.sub })
                  ]
                },
                stat.label
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Each record encodes one excavation scenario: wall geometry, multi-layer soil stratigraphy, support configuration, and measured or FEM-derived performance outputs. Data sources include published case studies (Singapore, London, Chicago), Plaxis/ABAQUS parametric sweeps, and field monitoring reports." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-primary", children: "Target variable (classification):" }),
                  " ",
                  "Recommended wall type given site constraints and budget envelope.",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-primary", children: "Target variables (regression):" }),
                  " ",
                  "Maximum lateral deflection δmax (mm), surface settlement δv (mm), peak bending moment Mmax (kNm/m)."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs border-collapse border border-border/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-primary/12 border-b border-primary/20", children: [
                  "Feature",
                  "Type",
                  "Unit",
                  "Range",
                  "Role",
                  "Description"
                ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "th",
                  {
                    className: "px-3 py-2 text-left font-mono text-[9px] uppercase tracking-widest text-primary whitespace-nowrap",
                    children: h
                  },
                  h
                )) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: FEATURES.map(([feat, type, unit, range, role, desc], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    className: `border-b border-border/25 ${i % 2 === 0 ? "bg-card" : "bg-background"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 font-mono text-primary/80 whitespace-nowrap", children: feat }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 font-mono text-muted-foreground", children: type }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 font-mono text-muted-foreground", children: unit }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 font-mono text-muted-foreground whitespace-nowrap", children: range }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          variant: "outline",
                          className: `font-mono text-[8px] uppercase tracking-widest ${role === "target" ? "text-accent border-accent/40 bg-accent/8" : role === "output" ? "text-chart-2 border-chart-2/40 bg-chart-2/8" : "text-primary/60 border-primary/20 bg-primary/5"}`,
                          children: role
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 text-muted-foreground", children: desc })
                    ]
                  },
                  feat
                )) })
              ] }) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          "data-ocid": "ml.model.section",
          className: "rounded-md border border-border/40 bg-card overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                icon: BrainCircuit,
                label: "Section 02",
                title: "Model Idea"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] uppercase tracking-widest text-primary/60", children: "Classification" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "outline",
                        className: "font-mono text-[8px] text-primary border-primary/30 bg-primary/8",
                        children: "Wall Type Selection"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    "A ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-primary", children: "XGBoost" }),
                    " or",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-primary", children: "Random Forest" }),
                    " ",
                    "multi-class classifier recommends the optimal wall system from 6 candidate types given site parameters. Expected accuracy ≥ 85 % on held-out test split."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-border/30 bg-background px-3 py-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-1.5", children: "Inputs (13 features)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: [
                      "H",
                      "D",
                      "phi",
                      "c",
                      "gamma",
                      "E_soil",
                      "nu",
                      "K0",
                      "gwl",
                      "prop_spacing",
                      "surcharge",
                      "site_class",
                      "budget_band"
                    ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "code",
                      {
                        className: "text-[9px] font-mono px-1.5 py-0.5 rounded bg-primary/10 text-primary/80 border border-primary/15",
                        children: f
                      },
                      f
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-border/30 bg-background px-3 py-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-1", children: "Output" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Recommended wall type + confidence score (0–1) per class" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] uppercase tracking-widest text-primary/60", children: "Regression" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "outline",
                        className: "font-mono text-[8px] text-accent border-accent/30 bg-accent/8",
                        children: "Performance Prediction"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    "A",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-primary", children: "Gradient Boosted Trees" }),
                    " ",
                    "regressor predicts peak δmax, δv, and Mmax. Advanced variant: a ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-primary", children: "1D-CNN" }),
                    " ",
                    "outputs the full lateral deflection profile along wall depth. Baseline target: R² ≥ 0.88 via 5-fold CV."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-border/30 bg-background px-3 py-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-1", children: "Validation strategy" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: [
                      "5-fold stratified cross-validation by wall type",
                      "Metrics: RMSE, MAPE, 90% prediction interval coverage",
                      "Back-analysis on 20+ published monitoring case studies",
                      "SHAP value audit to confirm geotechnical plausibility"
                    ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "li",
                      {
                        className: "flex items-start gap-1.5 text-xs text-muted-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3 shrink-0 mt-0.5 text-primary/40" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
                        ]
                      },
                      item
                    )) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-2", children: "Feature Importance — SHAP (representative XGBoost run)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs border-collapse border border-border/40", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-primary/10 border-b border-primary/20", children: ["Feature", "Importance Score", "Effect Direction"].map(
                    (h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "th",
                      {
                        className: "px-3 py-2 text-left font-mono text-[9px] uppercase tracking-widest text-primary",
                        children: h
                      },
                      h
                    )
                  ) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: IMPORTANCE.map(({ feature, score, direction }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "tr",
                    {
                      className: `border-b border-border/25 ${i % 2 === 0 ? "bg-card" : "bg-background"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 font-mono text-primary/80", children: feature }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "h-2 rounded-full bg-primary/60",
                              style: {
                                width: `${score * 300}px`,
                                maxWidth: "72px"
                              }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-muted-foreground", children: score.toFixed(2) })
                        ] }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 text-muted-foreground", children: direction })
                      ]
                    },
                    feature
                  )) })
                ] })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          "data-ocid": "ml.architecture.section",
          className: "rounded-md border border-border/40 bg-card overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                icon: Layers,
                label: "Section 03",
                title: "Pipeline Architecture"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "End-to-end pipeline from raw site data to engineering recommendation." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-stretch gap-0 min-w-[640px]", children: ARCH_STEPS.map((box, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-stretch flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `flex-1 border ${box.border} ${box.bg} px-3 py-3 ${i === 0 ? "rounded-l-md" : ""} ${i === ARCH_STEPS.length - 1 ? "rounded-r-md" : ""}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-1", children: [
                        "Step ",
                        box.step
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold text-xs text-foreground mb-2", children: box.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: box.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "li",
                        {
                          className: "flex items-center gap-1 text-[10px] text-muted-foreground",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full bg-primary/40 shrink-0" }),
                            item
                          ]
                        },
                        item
                      )) })
                    ]
                  }
                ),
                i < ARCH_STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center px-1 text-primary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" }) })
              ] }, box.step)) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded border border-border/30 bg-background p-3 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "font-mono text-[10px] text-muted-foreground leading-relaxed whitespace-pre", children: `Borehole / CPT Input
       │
       ▼
┌─────────────────────┐
│  Feature Engineering │  ←  soil averaging, H/D ratio, GWL normalisation
└─────────────────────┘
       │
       ├─────────────────────────────────────────┐
       ▼                                         ▼
┌───────────────────┐                  ┌─────────────────────┐
│ XGBoost Classifier │                  │   GBT Regressor      │
│  Wall Type Select  │                  │   δmax, δv, Mmax     │
└───────────────────┘                  └─────────────────────┘
       │                                         │
       └─────────────────────┬───────────────────┘
                             ▼
              ┌──────────────────────────┐
              │  Recommendation Engine    │
              │  Wall: Diaphragm (91%)    │
              │  δmax: 18 mm ± 3 mm       │
              │  Mmax: 420 kNm/m          │
              └──────────────────────────┘` }) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          "data-ocid": "ml.scope.section",
          className: "rounded-md border border-border/40 bg-card overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                icon: FlaskConical,
                label: "Section 04",
                title: "Future Scope"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "Research directions beyond the initial prototype, ordered by estimated engineering impact." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: FUTURE_SCOPE.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": `ml.scope.item.${i + 1}`,
                  className: "flex items-start gap-2.5 rounded border border-border/30 bg-background px-3 py-2.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] text-primary/50 shrink-0 mt-0.5", children: String(i + 1).padStart(2, "0") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground leading-relaxed", children: item })
                  ]
                },
                item
              )) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          "data-ocid": "ml.contribute.section",
          className: "rounded-md border border-primary/25 bg-primary/5 overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                icon: Users,
                label: "Section 05",
                title: "Contribute Data & Research"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-5 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-display font-semibold", children: "Help build the world’s first open geotechnical ML benchmark dataset." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground max-w-3xl", children: "We are collecting anonymised excavation case records — wall geometry, soil parameters, support configuration, and observed performance (deflection monitoring, inclinometer readings, settlement surveys). All contributions are attributed. Data will be released under CC BY 4.0." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3 pt-1", children: [
                {
                  icon: Database,
                  title: "Share Case Data",
                  desc: "Submit anonymised monitoring records using the provided CSV template."
                },
                {
                  icon: FlaskConical,
                  title: "Contribute Models",
                  desc: "Open PRs with alternative model architectures or improved feature sets."
                },
                {
                  icon: Lightbulb,
                  title: "Peer Review",
                  desc: "Review submitted datasets for parameter consistency and label quality."
                }
              ].map(({ icon: Icon, title, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded border border-primary/20 bg-card px-3 py-3 space-y-1",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5 text-primary" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-xs text-foreground", children: title })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: desc })
                  ]
                },
                title
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    "data-ocid": "ml.contribute.github_link",
                    href: "https://github.com/your-org/excavation-ml-dataset",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center gap-2 rounded border border-primary/30 bg-primary/10 px-4 py-2 font-mono text-xs text-primary hover:bg-primary/20 transition-smooth",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(GitBranch, { className: "w-3.5 h-3.5" }),
                      "github.com/your-org/excavation-ml-dataset"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Dataset template · Contribution guide · Anonymisation checklist" })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          "data-ocid": "ml.roadmap.section",
          className: "rounded-md border border-border/40 bg-card overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeader,
              {
                icon: Target,
                label: "Roadmap",
                title: "Implementation Phases"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-2", children: [
              {
                phase: "Phase 1",
                status: "Dataset",
                desc: "Aggregate ≥2,000 case records; build feature pipeline; establish labelling protocol"
              },
              {
                phase: "Phase 2",
                status: "Training",
                desc: "Train XGBoost classifier + GBT regressor; Optuna hyperparameter search; 5-fold CV"
              },
              {
                phase: "Phase 3",
                status: "Validation",
                desc: "Back-analysis vs. 20+ case studies; SHAP audit; physics constraint checks"
              },
              {
                phase: "Phase 4",
                status: "Deployment",
                desc: "REST prediction API; BIM IFC export; federated learning across project partners"
              }
            ].map(({ phase, status, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded border border-border/30 bg-background px-3 py-2.5 space-y-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] text-primary/50", children: phase }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "outline",
                        className: "font-mono text-[8px] uppercase tracking-widest text-primary border-primary/30 bg-primary/8",
                        children: status
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground leading-relaxed", children: desc })
                ]
              },
              phase
            )) }) })
          ]
        }
      )
    ] })
  ] });
}
export {
  ML as default
};

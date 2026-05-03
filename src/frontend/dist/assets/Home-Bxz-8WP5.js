import { c as createLucideIcon, j as jsxRuntimeExports, L as Link, a as cn, D as Drill, B as Button, G as GitCompareArrows, b as Layers, d as BookOpen, S as Skeleton, e as Separator, f as BrainCircuit } from "./index-BUl89JH6.js";
import { B as Badge } from "./badge-DmeArO5X.js";
import { A as ArrowRight } from "./arrow-right-BdNoOgMW.js";
import { u as useGetSystems } from "./api-DuO2vhnj.js";
import { D as Database } from "./database-6mT13oWO.js";
import "./data-DBpipvIs.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
const WALL_TYPE_LABELS = {
  SoldierPile: "Soldier",
  SecantPile: "Secant",
  SheetPile: "Sheet",
  TangentPile: "Tangent",
  Micropile: "Micropile",
  DiaphragmWall: "Diaphragm"
};
const WALL_TYPE_COLOR = {
  SoldierPile: "text-chart-1 border-chart-1/30 bg-chart-1/10",
  SecantPile: "text-chart-2 border-chart-2/30 bg-chart-2/10",
  SheetPile: "text-chart-3 border-chart-3/30 bg-chart-3/10",
  TangentPile: "text-chart-4 border-chart-4/30 bg-chart-4/10",
  Micropile: "text-chart-5 border-chart-5/30 bg-chart-5/10",
  DiaphragmWall: "text-primary border-primary/30 bg-primary/10"
};
const WALL_ICONS = {
  SoldierPile: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 40 40",
      fill: "none",
      className: "w-full h-full",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "6",
            y: "4",
            width: "4",
            height: "32",
            rx: "1",
            fill: "currentColor",
            opacity: "0.8"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "16",
            y: "4",
            width: "4",
            height: "32",
            rx: "1",
            fill: "currentColor",
            opacity: "0.8"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "26",
            y: "4",
            width: "4",
            height: "32",
            rx: "1",
            fill: "currentColor",
            opacity: "0.8"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "4",
            y: "12",
            width: "32",
            height: "3",
            rx: "0.5",
            fill: "currentColor",
            opacity: "0.4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "4",
            y: "22",
            width: "32",
            height: "3",
            rx: "0.5",
            fill: "currentColor",
            opacity: "0.4"
          }
        )
      ]
    }
  ),
  SecantPile: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 40 40",
      fill: "none",
      className: "w-full h-full",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "8", cy: "20", r: "6", fill: "currentColor", opacity: "0.8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "17", cy: "20", r: "6", fill: "currentColor", opacity: "0.4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "26", cy: "20", r: "6", fill: "currentColor", opacity: "0.8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "35", cy: "20", r: "6", fill: "currentColor", opacity: "0.4" })
      ]
    }
  ),
  SheetPile: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 40 40",
      fill: "none",
      className: "w-full h-full",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M4 4 L10 4 L13 20 L10 36 L4 36 Z",
            fill: "currentColor",
            opacity: "0.8"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M10 4 L16 4 L13 20 L16 36 L10 36 Z",
            fill: "currentColor",
            opacity: "0.4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M16 4 L22 4 L25 20 L22 36 L16 36 Z",
            fill: "currentColor",
            opacity: "0.8"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M22 4 L28 4 L25 20 L28 36 L22 36 Z",
            fill: "currentColor",
            opacity: "0.4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M28 4 L34 4 L37 20 L34 36 L28 36 Z",
            fill: "currentColor",
            opacity: "0.8"
          }
        )
      ]
    }
  ),
  TangentPile: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 40 40",
      fill: "none",
      className: "w-full h-full",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "9",
            cy: "20",
            r: "5.5",
            stroke: "currentColor",
            strokeWidth: "2",
            fill: "currentColor",
            opacity: "0.6"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "18",
            cy: "20",
            r: "5.5",
            stroke: "currentColor",
            strokeWidth: "2",
            fill: "currentColor",
            opacity: "0.3"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "27",
            cy: "20",
            r: "5.5",
            stroke: "currentColor",
            strokeWidth: "2",
            fill: "currentColor",
            opacity: "0.6"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "36",
            cy: "20",
            r: "5.5",
            stroke: "currentColor",
            strokeWidth: "2",
            fill: "currentColor",
            opacity: "0.3"
          }
        )
      ]
    }
  ),
  Micropile: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 40 40",
      fill: "none",
      className: "w-full h-full",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "6",
            y: "4",
            width: "2",
            height: "32",
            rx: "1",
            fill: "currentColor",
            opacity: "0.8"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "10",
            y: "4",
            width: "2",
            height: "32",
            rx: "1",
            fill: "currentColor",
            opacity: "0.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "14",
            y: "4",
            width: "2",
            height: "32",
            rx: "1",
            fill: "currentColor",
            opacity: "0.8"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "18",
            y: "4",
            width: "2",
            height: "32",
            rx: "1",
            fill: "currentColor",
            opacity: "0.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "22",
            y: "4",
            width: "2",
            height: "32",
            rx: "1",
            fill: "currentColor",
            opacity: "0.8"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "26",
            y: "4",
            width: "2",
            height: "32",
            rx: "1",
            fill: "currentColor",
            opacity: "0.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "30",
            y: "4",
            width: "2",
            height: "32",
            rx: "1",
            fill: "currentColor",
            opacity: "0.8"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "34",
            y: "4",
            width: "2",
            height: "32",
            rx: "1",
            fill: "currentColor",
            opacity: "0.5"
          }
        )
      ]
    }
  ),
  DiaphragmWall: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 40 40",
      fill: "none",
      className: "w-full h-full",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "4",
            y: "4",
            width: "32",
            height: "32",
            rx: "1",
            fill: "currentColor",
            opacity: "0.2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "4",
            y: "4",
            width: "32",
            height: "4",
            rx: "0.5",
            fill: "currentColor",
            opacity: "0.8"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "4",
            y: "32",
            width: "32",
            height: "4",
            rx: "0.5",
            fill: "currentColor",
            opacity: "0.8"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "4",
            y1: "14",
            x2: "36",
            y2: "14",
            stroke: "currentColor",
            strokeWidth: "1",
            opacity: "0.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "4",
            y1: "20",
            x2: "36",
            y2: "20",
            stroke: "currentColor",
            strokeWidth: "1",
            opacity: "0.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "4",
            y1: "26",
            x2: "36",
            y2: "26",
            stroke: "currentColor",
            strokeWidth: "1",
            opacity: "0.5"
          }
        )
      ]
    }
  )
};
function SystemCard({ system, index }) {
  const colorClass = WALL_TYPE_COLOR[system.wallType] ?? "text-primary border-primary/30 bg-primary/10";
  const label = WALL_TYPE_LABELS[system.wallType] ?? system.wallType;
  const icon = WALL_ICONS[system.wallType];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: "/systems/$systemId",
      params: { systemId: system.id },
      "data-ocid": `system.card.${index + 1}`,
      className: "group block",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: cn(
            "h-full flex flex-col p-4 rounded-md border border-border/50 bg-card",
            "transition-all duration-200 hover:border-primary/40 hover:bg-card hover:shadow-tech"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: cn(
                    "w-10 h-10 rounded-sm flex items-center justify-center",
                    colorClass
                  ),
                  children: icon
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: cn(
                    "text-[10px] font-mono uppercase tracking-wider",
                    colorClass
                  ),
                  children: label
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-sm text-foreground mb-1.5 group-hover:text-primary transition-colors", children: system.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-3", children: system.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-1 text-xs text-primary/70 group-hover:text-primary transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: "View system" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3 group-hover:translate-x-0.5 transition-transform" })
            ] })
          ]
        }
      )
    }
  );
}
const ABOUT_POINTS = [
  {
    icon: Database,
    label: "Technical database",
    text: "Soil parameters, earth pressure formulas, FEM data, and design procedures for every system — in one reference."
  },
  {
    icon: GitCompareArrows,
    label: "Comparative analysis",
    text: "Side-by-side quantitative comparison of cost, deflection, water control, installation time, and maximum wall height."
  },
  {
    icon: Layers,
    label: "Geotechnical scope",
    text: "Covers soldier pile, secant pile, sheet pile, tangent pile, micropile, and diaphragm wall systems to EC7 / AASHTO / FHWA standards."
  },
  {
    icon: BrainCircuit,
    label: "Future ML integration",
    text: "Dataset architecture designed for supervised learning — predict optimal system selection from geotechnical site parameters."
  }
];
const NAV_SECTIONS = [
  {
    to: "/comparison",
    icon: GitCompareArrows,
    title: "Comparison Dashboard",
    desc: "Quantitative comparison table, performance charts, and engineering insights for all 6 systems.",
    featured: true
  },
  {
    to: "/research",
    icon: BookOpen,
    title: "Research Papers",
    desc: "Indexed academic papers with method, key parameters, and category mapping.",
    featured: false
  },
  {
    to: "/ml",
    icon: BrainCircuit,
    title: "ML Roadmap",
    desc: "Dataset structure, model concept, and future automation scope for system selection.",
    featured: false
  }
];
function Home() {
  const { data: systems = [], isLoading } = useGetSystems();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "hero",
        className: "border-b border-border/40 bg-card px-6 py-12",
        "data-ocid": "home.hero.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Drill, { className: "w-4 h-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-primary/80", children: "Geotechnical Reference · Underground Excavation" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl font-bold tracking-tight text-foreground mb-1", children: [
            "Excavation",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "DB" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4", children: "Underground Retaining Wall Systems Reference" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed max-w-2xl mb-6", children: "A structured technical database for deep excavation retaining systems used in geotechnical and underground construction engineering. Covers design parameters, earth pressure analysis, FEM benchmarks, and real-world case studies across six wall typologies — built for engineers, researchers, and ML-driven decision tools." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                variant: "default",
                size: "sm",
                "data-ocid": "home.comparison.primary_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/comparison", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(GitCompareArrows, { className: "w-4 h-4 mr-1.5" }),
                  "Comparison Dashboard"
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                variant: "outline",
                size: "sm",
                "data-ocid": "home.systems.secondary_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#systems", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4 mr-1.5" }),
                  "Browse Systems"
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                variant: "outline",
                size: "sm",
                "data-ocid": "home.research.secondary_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/research", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4 mr-1.5" }),
                  "Research Papers"
                ] })
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: "systems",
        className: "px-6 py-8 bg-background",
        "data-ocid": "home.systems.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-base text-foreground", children: "Excavation Systems" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Select a system to view soil parameters, earth pressure, FEM benchmarks, and design procedures" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "outline",
                className: "font-mono text-xs text-primary border-primary/30",
                children: [
                  systems.length,
                  " systems"
                ]
              }
            )
          ] }),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", children: Array.from({ length: 6 }, (_, i) => `sk-sys-${i}`).map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-36" }, key)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
              "data-ocid": "systems.list",
              children: systems.map((system, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(SystemCard, { system, index: i }, system.id))
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "about",
        className: "px-6 py-8 bg-muted/20",
        "data-ocid": "home.about.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-base text-foreground", children: "About this project" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-6", children: "Scope, purpose, and design philosophy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl", children: "ExcavationDB consolidates the fragmented technical knowledge of deep excavation retaining systems into a single structured reference. Each wall typology is documented from first-principles soil mechanics through construction components, classical and numerical earth pressure methods, FEM benchmarks, and verified case studies — all indexed to EC7, AASHTO LRFD, and FHWA design standards. The dataset is also structured to support future supervised machine learning models that predict optimal system selection based on site geotechnical input parameters." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: ABOUT_POINTS.map((pt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex gap-3 p-3 rounded-md border border-border/30 bg-card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(pt.icon, { className: "w-4 h-4 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-wider text-primary/80 mb-0.5", children: pt.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: pt.text })
                ] })
              ]
            },
            pt.label
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: "sections",
        className: "px-6 py-8 bg-background",
        "data-ocid": "home.sections.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4", children: "Reference Sections" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: NAV_SECTIONS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: item.to,
              "data-ocid": `home.section.${item.to.replace("/", "")}.link`,
              className: "group relative p-4 rounded-md border bg-card transition-all duration-200 hover:border-primary/40 hover:shadow-tech",
              style: {
                borderColor: item.featured ? "oklch(var(--primary) / 0.35)" : void 0
              },
              children: [
                item.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    variant: "outline",
                    className: "text-[9px] font-mono uppercase tracking-wider text-accent border-accent/40 bg-accent/10 px-1.5 py-0",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-2.5 h-2.5 mr-0.5 fill-current" }),
                      "Featured"
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-5 h-5 text-primary mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed", children: item.desc }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-1 text-xs text-primary/60 group-hover:text-primary transition-colors", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: "Open" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3 group-hover:translate-x-0.5 transition-transform" })
                ] })
              ]
            },
            item.to
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "footer",
      {
        className: "px-6 py-6 bg-card border-t border-border/40",
        "data-ocid": "home.footer.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Drill, { className: "w-3.5 h-3.5 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-semibold text-sm text-foreground", children: [
                  "Excavation",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "DB" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Underground retaining wall systems · 6 wall types · EC7 · AASHTO · FHWA" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start sm:items-end gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 text-accent fill-current" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-wider text-accent", children: "Featured tool" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/comparison",
                  className: "font-display text-xs font-medium text-primary hover:underline flex items-center gap-1",
                  "data-ocid": "home.footer.comparison_link",
                  children: "Comparison Dashboard →"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Charts · filters · insights · earth pressure comparison" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground font-mono", children: [
              "© ",
              (/* @__PURE__ */ new Date()).getFullYear(),
              " ExcavationDB — Geotechnical Reference System"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-[11px] text-muted-foreground hover:text-foreground transition-colors font-mono",
                children: "Built with love using caffeine.ai"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
export {
  Home as default
};

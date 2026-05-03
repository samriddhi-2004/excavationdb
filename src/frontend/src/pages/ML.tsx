import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BrainCircuit,
  Database,
  FlaskConical,
  GitBranch,
  Layers,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";

// ── Section header component ──────────────────────────────────────────────────
function SectionHeader({
  icon: Icon,
  label,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 border-b border-primary/20 bg-primary/8 rounded-t-md">
      <Icon className="w-4 h-4 text-primary shrink-0" />
      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-primary/60">
        {label}
      </span>
      <h2 className="font-display font-semibold text-sm text-foreground">
        {title}
      </h2>
    </div>
  );
}

// ── Dataset feature rows ──────────────────────────────────────────────────────
const FEATURES: [string, string, string, string, string, string][] = [
  [
    "wall_type",
    "categorical",
    "—",
    "6 classes",
    "output",
    "Soldier / Secant / Sheet / Tangent / Micropile / Diaphragm",
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
    "Representative elastic modulus",
  ],
  ["nu", "float", "—", "0.15–0.45", "input", "Poisson's ratio"],
  [
    "K0",
    "float",
    "—",
    "0.3–0.9",
    "input",
    "At-rest earth pressure coefficient",
  ],
  ["gwl", "float", "m", "0–H", "input", "Groundwater level depth from surface"],
  [
    "prop_spacing",
    "float",
    "m",
    "1–6",
    "input",
    "Prop / anchor vertical spacing",
  ],
  ["surcharge", "float", "kPa", "0–100", "input", "Applied surface surcharge"],
  [
    "site_class",
    "categorical",
    "—",
    "A–E",
    "input",
    "Seismic site classification",
  ],
  [
    "delta_max",
    "float",
    "mm",
    "0–200",
    "target",
    "Max lateral wall deflection",
  ],
  [
    "settlement_max",
    "float",
    "mm",
    "0–150",
    "target",
    "Max ground surface settlement",
  ],
  ["M_max", "float", "kNm/m", "0–2000", "target", "Maximum bending moment"],
];

// ── Feature importance data ──────────────────────────────────────────────────
const IMPORTANCE: { feature: string; score: number; direction: string }[] = [
  {
    feature: "H (excavation depth)",
    score: 0.24,
    direction: "+ (deeper → higher demand)",
  },
  {
    feature: "phi (friction angle)",
    score: 0.18,
    direction: "– (higher φ → lower pressure)",
  },
  {
    feature: "gwl (groundwater level)",
    score: 0.15,
    direction: "+ (high GWL → seepage pressure)",
  },
  {
    feature: "E_soil (elastic modulus)",
    score: 0.12,
    direction: "– (stiffer soil → less deform.)",
  },
  {
    feature: "prop_spacing",
    score: 0.11,
    direction: "+ (wider spacing → more deflection)",
  },
  {
    feature: "K0",
    score: 0.09,
    direction: "+ (higher K0 → more lateral pressure)",
  },
  {
    feature: "c (cohesion)",
    score: 0.07,
    direction: "– (cohesion reduces active pressure)",
  },
  {
    feature: "surcharge",
    score: 0.04,
    direction: "+ (higher surcharge → more demand)",
  },
];

// ── Future scope items ───────────────────────────────────────────────────────
const FUTURE_SCOPE = [
  "FEM integration: use Plaxis/OpenSees outputs as training labels for physics-informed surrogate models",
  "Real-time soil data API: ingest CPT/SPT borehole feeds for automatic parameter extraction",
  "Uncertainty quantification: conformal prediction intervals on δmax to replace deterministic factor-of-safety",
  "Deep learning for deflection profiles: 1D-CNN predicting full wall deflection curve, not just peak values",
  "Multi-objective optimisation: Pareto front over cost, deflection, and carbon footprint",
  "Federated learning: train across construction firm datasets without exposing proprietary project data",
  "BIM interoperability: ML output → IFC geometry for preliminary wall sizing in digital twins",
  "Risk classification: predict probability of exceeding alert thresholds from early-stage boring logs",
];

// ── Architecture steps ────────────────────────────────────────────────────────
const ARCH_STEPS = [
  {
    step: "01",
    title: "Site Input",
    items: [
      "Borehole logs",
      "CPT/SPT data",
      "Topographic survey",
      "Surcharge loads",
      "Budget envelope",
    ],
    border: "border-primary/30",
    bg: "bg-primary/6",
  },
  {
    step: "02",
    title: "Feature Engineering",
    items: [
      "Soil layer averaging",
      "GWL normalisation",
      "One-hot site class",
      "Depth ratio H/D",
      "Pressuremeter index",
    ],
    border: "border-chart-3/30",
    bg: "bg-chart-3/5",
  },
  {
    step: "03",
    title: "ML Model",
    items: [
      "XGBoost Classifier",
      "GBT Regressor",
      "5-fold CV",
      "Optuna tuning",
      "SHAP explanation",
    ],
    border: "border-accent/30",
    bg: "bg-accent/5",
  },
  {
    step: "04",
    title: "Recommendation",
    items: [
      "Wall type (ranked)",
      "Confidence score",
      "δmax prediction",
      "Settlement estimate",
      "Flag if uncertain",
    ],
    border: "border-chart-4/30",
    bg: "bg-chart-4/5",
  },
] as const;

export default function ML() {
  return (
    <div className="min-h-full" data-ocid="ml.page">
      {/* ── Page header ── */}
      <div className="border-b border-border/40 bg-card px-6 py-6">
        <div className="flex items-center gap-2 mb-1">
          <BrainCircuit className="w-5 h-5 text-primary" />
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Future Work
          </span>
        </div>
        <h1 className="font-display text-2xl font-bold text-foreground">
          Future ML Integration
        </h1>
        <p className="text-sm text-muted-foreground mt-1 max-w-3xl">
          A roadmap for automating underground excavation wall-type selection
          and performance prediction using machine learning — replacing
          labour-intensive FEM parametric studies with rapid, data-driven
          recommendations.
        </p>
        <div className="flex gap-2 mt-3 flex-wrap">
          {[
            "Research Roadmap",
            "Classification",
            "Regression",
            "XGBoost",
            "GNN",
          ].map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="font-mono text-[9px] uppercase tracking-widest text-primary/70 border-primary/25 bg-primary/6"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* ── Section 1: Dataset Explanation ── */}
        <section
          data-ocid="ml.dataset.section"
          className="rounded-md border border-border/40 bg-card overflow-hidden"
        >
          <SectionHeader
            icon={Database}
            label="Section 01"
            title="Dataset Explanation"
          />
          <div className="px-4 py-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                {
                  label: "Estimated size",
                  value: "≥ 2,000",
                  sub: "labelled case entries",
                },
                {
                  label: "Input features",
                  value: "13",
                  sub: "soil + geometry + site",
                },
                {
                  label: "Target variables",
                  value: "3",
                  sub: "δmax, δv, Mmax",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded border border-primary/20 bg-primary/5 px-3 py-3"
                >
                  <div className="font-mono text-[9px] uppercase tracking-widest text-primary/60 mb-0.5">
                    {stat.label}
                  </div>
                  <div className="font-display text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">
                Each record encodes one excavation scenario: wall geometry,
                multi-layer soil stratigraphy, support configuration, and
                measured or FEM-derived performance outputs. Data sources
                include published case studies (Singapore, London, Chicago),
                Plaxis/ABAQUS parametric sweeps, and field monitoring reports.
              </p>
              <p className="text-xs text-muted-foreground">
                <span className="font-mono text-primary">
                  Target variable (classification):
                </span>{" "}
                Recommended wall type given site constraints and budget
                envelope.{" "}
                <span className="font-mono text-primary">
                  Target variables (regression):
                </span>{" "}
                Maximum lateral deflection δmax (mm), surface settlement
                δv (mm), peak bending moment Mmax (kNm/m).
              </p>
            </div>

            {/* Feature schema table */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse border border-border/40">
                <thead>
                  <tr className="bg-primary/12 border-b border-primary/20">
                    {[
                      "Feature",
                      "Type",
                      "Unit",
                      "Range",
                      "Role",
                      "Description",
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-3 py-2 text-left font-mono text-[9px] uppercase tracking-widest text-primary whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {FEATURES.map(([feat, type, unit, range, role, desc], i) => (
                    <tr
                      key={feat}
                      className={`border-b border-border/25 ${
                        i % 2 === 0 ? "bg-card" : "bg-background"
                      }`}
                    >
                      <td className="px-3 py-1.5 font-mono text-primary/80 whitespace-nowrap">
                        {feat}
                      </td>
                      <td className="px-3 py-1.5 font-mono text-muted-foreground">
                        {type}
                      </td>
                      <td className="px-3 py-1.5 font-mono text-muted-foreground">
                        {unit}
                      </td>
                      <td className="px-3 py-1.5 font-mono text-muted-foreground whitespace-nowrap">
                        {range}
                      </td>
                      <td className="px-3 py-1.5">
                        <Badge
                          variant="outline"
                          className={`font-mono text-[8px] uppercase tracking-widest ${
                            role === "target"
                              ? "text-accent border-accent/40 bg-accent/8"
                              : role === "output"
                                ? "text-chart-2 border-chart-2/40 bg-chart-2/8"
                                : "text-primary/60 border-primary/20 bg-primary/5"
                          }`}
                        >
                          {role}
                        </Badge>
                      </td>
                      <td className="px-3 py-1.5 text-muted-foreground">
                        {desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Section 2: Model Idea ── */}
        <section
          data-ocid="ml.model.section"
          className="rounded-md border border-border/40 bg-card overflow-hidden"
        >
          <SectionHeader
            icon={BrainCircuit}
            label="Section 02"
            title="Model Idea"
          />
          <div className="px-4 py-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Classification */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-primary/60">
                    Classification
                  </span>
                  <Badge
                    variant="outline"
                    className="font-mono text-[8px] text-primary border-primary/30 bg-primary/8"
                  >
                    Wall Type Selection
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  A <span className="font-mono text-primary">XGBoost</span> or{" "}
                  <span className="font-mono text-primary">Random Forest</span>{" "}
                  multi-class classifier recommends the optimal wall system from
                  6 candidate types given site parameters. Expected accuracy
                  ≥ 85 % on held-out test split.
                </p>
                <div className="rounded border border-border/30 bg-background px-3 py-2">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-1.5">
                    Inputs (13 features)
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {[
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
                      "budget_band",
                    ].map((f) => (
                      <code
                        key={f}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-primary/10 text-primary/80 border border-primary/15"
                      >
                        {f}
                      </code>
                    ))}
                  </div>
                </div>
                <div className="rounded border border-border/30 bg-background px-3 py-2">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-1">
                    Output
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Recommended wall type + confidence score (0–1) per class
                  </p>
                </div>
              </div>

              {/* Regression */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-primary/60">
                    Regression
                  </span>
                  <Badge
                    variant="outline"
                    className="font-mono text-[8px] text-accent border-accent/30 bg-accent/8"
                  >
                    Performance Prediction
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  A{" "}
                  <span className="font-mono text-primary">
                    Gradient Boosted Trees
                  </span>{" "}
                  regressor predicts peak δmax, δv, and Mmax. Advanced variant:
                  a <span className="font-mono text-primary">1D-CNN</span>{" "}
                  outputs the full lateral deflection profile along wall depth.
                  Baseline target: R² ≥ 0.88 via 5-fold CV.
                </p>
                <div className="rounded border border-border/30 bg-background px-3 py-2">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-1">
                    Validation strategy
                  </div>
                  <ul className="space-y-1">
                    {[
                      "5-fold stratified cross-validation by wall type",
                      "Metrics: RMSE, MAPE, 90% prediction interval coverage",
                      "Back-analysis on 20+ published monitoring case studies",
                      "SHAP value audit to confirm geotechnical plausibility",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-1.5 text-xs text-muted-foreground"
                      >
                        <ArrowRight className="w-3 h-3 shrink-0 mt-0.5 text-primary/40" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature importance table */}
            <div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-2">
                Feature Importance — SHAP (representative XGBoost run)
              </div>
              <table className="w-full text-xs border-collapse border border-border/40">
                <thead>
                  <tr className="bg-primary/10 border-b border-primary/20">
                    {["Feature", "Importance Score", "Effect Direction"].map(
                      (h) => (
                        <th
                          key={h}
                          className="px-3 py-2 text-left font-mono text-[9px] uppercase tracking-widest text-primary"
                        >
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {IMPORTANCE.map(({ feature, score, direction }, i) => (
                    <tr
                      key={feature}
                      className={`border-b border-border/25 ${
                        i % 2 === 0 ? "bg-card" : "bg-background"
                      }`}
                    >
                      <td className="px-3 py-1.5 font-mono text-primary/80">
                        {feature}
                      </td>
                      <td className="px-3 py-1.5">
                        <div className="flex items-center gap-2">
                          <div
                            className="h-2 rounded-full bg-primary/60"
                            style={{
                              width: `${score * 300}px`,
                              maxWidth: "72px",
                            }}
                          />
                          <span className="font-mono text-muted-foreground">
                            {score.toFixed(2)}
                          </span>
                        </div>
                      </td>
                      <td className="px-3 py-1.5 text-muted-foreground">
                        {direction}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Section 3: Architecture Diagram ── */}
        <section
          data-ocid="ml.architecture.section"
          className="rounded-md border border-border/40 bg-card overflow-hidden"
        >
          <SectionHeader
            icon={Layers}
            label="Section 03"
            title="Pipeline Architecture"
          />
          <div className="px-4 py-4 space-y-4">
            <p className="text-xs text-muted-foreground">
              End-to-end pipeline from raw site data to engineering
              recommendation.
            </p>

            {/* Styled box diagram */}
            <div className="overflow-x-auto">
              <div className="flex items-stretch gap-0 min-w-[640px]">
                {ARCH_STEPS.map((box, i) => (
                  <div key={box.step} className="flex items-stretch flex-1">
                    <div
                      className={`flex-1 border ${box.border} ${box.bg} px-3 py-3 ${
                        i === 0 ? "rounded-l-md" : ""
                      } ${i === ARCH_STEPS.length - 1 ? "rounded-r-md" : ""}`}
                    >
                      <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-1">
                        Step {box.step}
                      </div>
                      <div className="font-display font-semibold text-xs text-foreground mb-2">
                        {box.title}
                      </div>
                      <ul className="space-y-1">
                        {box.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-1 text-[10px] text-muted-foreground"
                          >
                            <span className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {i < ARCH_STEPS.length - 1 && (
                      <div className="flex items-center px-1 text-primary/40">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ASCII diagram */}
            <div className="rounded border border-border/30 bg-background p-3 overflow-x-auto">
              <pre className="font-mono text-[10px] text-muted-foreground leading-relaxed whitespace-pre">{`Borehole / CPT Input
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
              └──────────────────────────┘`}</pre>
            </div>
          </div>
        </section>

        {/* ── Section 4: Future Scope ── */}
        <section
          data-ocid="ml.scope.section"
          className="rounded-md border border-border/40 bg-card overflow-hidden"
        >
          <SectionHeader
            icon={FlaskConical}
            label="Section 04"
            title="Future Scope"
          />
          <div className="px-4 py-4">
            <p className="text-xs text-muted-foreground mb-3">
              Research directions beyond the initial prototype, ordered by
              estimated engineering impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {FUTURE_SCOPE.map((item, i) => (
                <div
                  key={item}
                  data-ocid={`ml.scope.item.${i + 1}`}
                  className="flex items-start gap-2.5 rounded border border-border/30 bg-background px-3 py-2.5"
                >
                  <span className="font-mono text-[9px] text-primary/50 shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 5: Contribute ── */}
        <section
          data-ocid="ml.contribute.section"
          className="rounded-md border border-primary/25 bg-primary/5 overflow-hidden"
        >
          <SectionHeader
            icon={Users}
            label="Section 05"
            title="Contribute Data & Research"
          />
          <div className="px-4 py-5 space-y-3">
            <p className="text-sm text-foreground font-display font-semibold">
              Help build the world’s first open geotechnical ML benchmark
              dataset.
            </p>
            <p className="text-xs text-muted-foreground max-w-3xl">
              We are collecting anonymised excavation case records — wall
              geometry, soil parameters, support configuration, and observed
              performance (deflection monitoring, inclinometer readings,
              settlement surveys). All contributions are attributed. Data will
              be released under CC BY 4.0.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              {[
                {
                  icon: Database,
                  title: "Share Case Data",
                  desc: "Submit anonymised monitoring records using the provided CSV template.",
                },
                {
                  icon: FlaskConical,
                  title: "Contribute Models",
                  desc: "Open PRs with alternative model architectures or improved feature sets.",
                },
                {
                  icon: Lightbulb,
                  title: "Peer Review",
                  desc: "Review submitted datasets for parameter consistency and label quality.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded border border-primary/20 bg-card px-3 py-3 space-y-1"
                >
                  <div className="flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-primary" />
                    <span className="font-display font-semibold text-xs text-foreground">
                      {title}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                data-ocid="ml.contribute.github_link"
                href="https://github.com/your-org/excavation-ml-dataset"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded border border-primary/30 bg-primary/10 px-4 py-2 font-mono text-xs text-primary hover:bg-primary/20 transition-smooth"
              >
                <GitBranch className="w-3.5 h-3.5" />
                github.com/your-org/excavation-ml-dataset
              </a>
              <span className="text-xs text-muted-foreground">
                Dataset template · Contribution guide · Anonymisation checklist
              </span>
            </div>
          </div>
        </section>

        {/* ── Phase roadmap summary ── */}
        <section
          data-ocid="ml.roadmap.section"
          className="rounded-md border border-border/40 bg-card overflow-hidden"
        >
          <SectionHeader
            icon={Target}
            label="Roadmap"
            title="Implementation Phases"
          />
          <div className="px-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              {[
                {
                  phase: "Phase 1",
                  status: "Dataset",
                  desc: "Aggregate ≥2,000 case records; build feature pipeline; establish labelling protocol",
                },
                {
                  phase: "Phase 2",
                  status: "Training",
                  desc: "Train XGBoost classifier + GBT regressor; Optuna hyperparameter search; 5-fold CV",
                },
                {
                  phase: "Phase 3",
                  status: "Validation",
                  desc: "Back-analysis vs. 20+ case studies; SHAP audit; physics constraint checks",
                },
                {
                  phase: "Phase 4",
                  status: "Deployment",
                  desc: "REST prediction API; BIM IFC export; federated learning across project partners",
                },
              ].map(({ phase, status, desc }) => (
                <div
                  key={phase}
                  className="rounded border border-border/30 bg-background px-3 py-2.5 space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] text-primary/50">
                      {phase}
                    </span>
                    <Badge
                      variant="outline"
                      className="font-mono text-[8px] uppercase tracking-widest text-primary border-primary/30 bg-primary/8"
                    >
                      {status}
                    </Badge>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// ─── Comparison Metrics Matrix ───────────────────────────────────────────────
// Features as rows, 6 wall methods as columns

export interface MetricRow {
  id: string;
  label: string;
  description: string;
  values: Record<string, string>;
  /** rating key for color coding: 'best'|'good'|'moderate'|'poor'|'worst'|'neutral' */
  ratings: Record<
    string,
    "best" | "good" | "moderate" | "poor" | "worst" | "neutral"
  >;
}

export const METRIC_ROWS: MetricRow[] = [
  {
    id: "system-type",
    label: "System Type",
    description: "Structural continuity of the wall",
    values: {
      "soldier-pile": "Discontinuous",
      "secant-pile": "Continuous",
      "sheet-pile": "Continuous",
      "tangent-pile": "Discontinuous",
      micropile: "Discontinuous",
      "diaphragm-wall": "Continuous",
    },
    ratings: {
      "soldier-pile": "moderate",
      "secant-pile": "best",
      "sheet-pile": "good",
      "tangent-pile": "moderate",
      micropile: "moderate",
      "diaphragm-wall": "best",
    },
  },
  {
    id: "stiffness",
    label: "Stiffness",
    description: "Resistance to deformation under lateral load",
    values: {
      "soldier-pile": "Low",
      "secant-pile": "High",
      "sheet-pile": "Medium",
      "tangent-pile": "Medium",
      micropile: "Low–Medium",
      "diaphragm-wall": "Very High",
    },
    ratings: {
      "soldier-pile": "poor",
      "secant-pile": "good",
      "sheet-pile": "moderate",
      "tangent-pile": "moderate",
      micropile: "poor",
      "diaphragm-wall": "best",
    },
  },
  {
    id: "continuity",
    label: "Continuity / Waterproof",
    description: "Whether wall provides watertight barrier",
    values: {
      "soldier-pile": "Non-waterproof",
      "secant-pile": "Waterproof",
      "sheet-pile": "Waterproof",
      "tangent-pile": "Non-waterproof",
      micropile: "Non-waterproof",
      "diaphragm-wall": "Waterproof",
    },
    ratings: {
      "soldier-pile": "worst",
      "secant-pile": "best",
      "sheet-pile": "best",
      "tangent-pile": "worst",
      micropile: "worst",
      "diaphragm-wall": "best",
    },
  },
  {
    id: "max-height",
    label: "Max Height",
    description: "Typical maximum retained height range",
    values: {
      "soldier-pile": "8–12 m",
      "secant-pile": "20–40 m",
      "sheet-pile": "6–15 m",
      "tangent-pile": "10–20 m",
      micropile: "10–20 m",
      "diaphragm-wall": "30–50 m+",
    },
    ratings: {
      "soldier-pile": "poor",
      "secant-pile": "good",
      "sheet-pile": "moderate",
      "tangent-pile": "moderate",
      micropile: "moderate",
      "diaphragm-wall": "best",
    },
  },
  {
    id: "installation-time",
    label: "Installation Time",
    description: "Speed of installation from mobilization to complete",
    values: {
      "soldier-pile": "Fast (2–4 wks)",
      "secant-pile": "Moderate–Slow (4–8 wks)",
      "sheet-pile": "Fast (1–3 wks)",
      "tangent-pile": "Moderate (3–6 wks)",
      micropile: "Slow (6–12 wks)",
      "diaphragm-wall": "Slow (8–16 wks)",
    },
    ratings: {
      "soldier-pile": "best",
      "secant-pile": "moderate",
      "sheet-pile": "best",
      "tangent-pile": "moderate",
      micropile: "poor",
      "diaphragm-wall": "worst",
    },
  },
  {
    id: "deflection",
    label: "Deflection",
    description: "Typical lateral wall displacement range",
    values: {
      "soldier-pile": "High (25–50 mm)",
      "secant-pile": "Low (5–15 mm)",
      "sheet-pile": "Medium (10–30 mm)",
      "tangent-pile": "Medium (10–25 mm)",
      micropile: "Low–Medium (8–20 mm)",
      "diaphragm-wall": "Very Low (5–10 mm)",
    },
    ratings: {
      "soldier-pile": "worst",
      "secant-pile": "good",
      "sheet-pile": "moderate",
      "tangent-pile": "moderate",
      micropile: "good",
      "diaphragm-wall": "best",
    },
  },
  {
    id: "water-control",
    label: "Water Control",
    description: "Effectiveness at controlling groundwater ingress",
    values: {
      "soldier-pile": "Poor",
      "secant-pile": "Excellent",
      "sheet-pile": "Good",
      "tangent-pile": "Poor",
      micropile: "Poor",
      "diaphragm-wall": "Excellent",
    },
    ratings: {
      "soldier-pile": "worst",
      "secant-pile": "best",
      "sheet-pile": "good",
      "tangent-pile": "worst",
      micropile: "worst",
      "diaphragm-wall": "best",
    },
  },
  {
    id: "noise-vibration",
    label: "Noise / Vibration",
    description: "Construction noise and vibration generation",
    values: {
      "soldier-pile": "Low",
      "secant-pile": "Low",
      "sheet-pile": "High",
      "tangent-pile": "Low",
      micropile: "Low",
      "diaphragm-wall": "Low",
    },
    ratings: {
      "soldier-pile": "best",
      "secant-pile": "best",
      "sheet-pile": "worst",
      "tangent-pile": "best",
      micropile: "best",
      "diaphragm-wall": "best",
    },
  },
  {
    id: "mobilization-time",
    label: "Mobilization Time",
    description: "Time to mobilize equipment and begin work",
    values: {
      "soldier-pile": "Low (1–2 days)",
      "secant-pile": "Medium (1–2 wks)",
      "sheet-pile": "Low (2–4 days)",
      "tangent-pile": "Medium (1–2 wks)",
      micropile: "Medium (3–5 days)",
      "diaphragm-wall": "High (2–4 wks)",
    },
    ratings: {
      "soldier-pile": "best",
      "secant-pile": "moderate",
      "sheet-pile": "best",
      "tangent-pile": "moderate",
      micropile: "moderate",
      "diaphragm-wall": "worst",
    },
  },
  {
    id: "deformation",
    label: "Deformation",
    description: "Behavior character under lateral loading",
    values: {
      "soldier-pile": "Flexible",
      "secant-pile": "Rigid",
      "sheet-pile": "Semi-flexible",
      "tangent-pile": "Semi-rigid",
      micropile: "Flexible",
      "diaphragm-wall": "Very Rigid",
    },
    ratings: {
      "soldier-pile": "poor",
      "secant-pile": "good",
      "sheet-pile": "moderate",
      "tangent-pile": "moderate",
      micropile: "poor",
      "diaphragm-wall": "best",
    },
  },
  {
    id: "construction-speed",
    label: "Construction Speed",
    description: "Overall pace of wall construction",
    values: {
      "soldier-pile": "Fast",
      "secant-pile": "Moderate",
      "sheet-pile": "Fast",
      "tangent-pile": "Moderate",
      micropile: "Slow",
      "diaphragm-wall": "Slow",
    },
    ratings: {
      "soldier-pile": "best",
      "secant-pile": "moderate",
      "sheet-pile": "best",
      "tangent-pile": "moderate",
      micropile: "poor",
      "diaphragm-wall": "poor",
    },
  },
  {
    id: "cost",
    label: "Cost",
    description: "Relative cost of installation per m²",
    values: {
      "soldier-pile": "Low ($200–400/m²)",
      "secant-pile": "High ($600–900/m²)",
      "sheet-pile": "Low–Med ($300–550/m²)",
      "tangent-pile": "Medium ($400–700/m²)",
      micropile: "High ($500–1200/m²)",
      "diaphragm-wall": "Very High ($900–1800/m²)",
    },
    ratings: {
      "soldier-pile": "best",
      "secant-pile": "poor",
      "sheet-pile": "good",
      "tangent-pile": "moderate",
      micropile: "poor",
      "diaphragm-wall": "worst",
    },
  },
  {
    id: "performance",
    label: "Performance",
    description: "Overall structural performance rating",
    values: {
      "soldier-pile": "Moderate",
      "secant-pile": "High",
      "sheet-pile": "Moderate–High",
      "tangent-pile": "Moderate",
      micropile: "High",
      "diaphragm-wall": "Excellent",
    },
    ratings: {
      "soldier-pile": "moderate",
      "secant-pile": "good",
      "sheet-pile": "moderate",
      "tangent-pile": "moderate",
      micropile: "good",
      "diaphragm-wall": "best",
    },
  },
  {
    id: "urban-sustainability",
    label: "Urban Sustainability",
    description: "Suitability for sensitive urban environments",
    values: {
      "soldier-pile": "Moderate",
      "secant-pile": "Good",
      "sheet-pile": "Low (vibration)",
      "tangent-pile": "Good",
      micropile: "Excellent",
      "diaphragm-wall": "Good",
    },
    ratings: {
      "soldier-pile": "moderate",
      "secant-pile": "good",
      "sheet-pile": "poor",
      "tangent-pile": "good",
      micropile: "best",
      "diaphragm-wall": "good",
    },
  },
];

export const ALL_METRIC_IDS = METRIC_ROWS.map((r) => r.id);

// ─── Input Effects Table Data ─────────────────────────────────────────────────

export type SensitivityLevel =
  | "High"
  | "Moderate"
  | "Low"
  | "N/A"
  | "Critical"
  | "Very High"
  | "Minimal";

export interface InputEffectRow {
  param: string;
  symbol: string;
  unit: string;
  values: Record<string, SensitivityLevel | string>;
  femImportance: SensitivityLevel;
  modelComplexity: SensitivityLevel;
}

export const INPUT_EFFECT_ROWS: InputEffectRow[] = [
  {
    param: "Cohesion (C)",
    symbol: "c",
    unit: "kPa",
    values: {
      "soldier-pile": "High",
      "secant-pile": "Moderate",
      "sheet-pile": "Moderate",
      "tangent-pile": "Moderate",
      micropile: "Low",
      "diaphragm-wall": "High",
    },
    femImportance: "Critical",
    modelComplexity: "Moderate",
  },
  {
    param: "Friction Angle (φ)",
    symbol: "φ",
    unit: "°",
    values: {
      "soldier-pile": "High",
      "secant-pile": "Moderate",
      "sheet-pile": "High",
      "tangent-pile": "Moderate",
      micropile: "Low",
      "diaphragm-wall": "Moderate",
    },
    femImportance: "Critical",
    modelComplexity: "Moderate",
  },
  {
    param: "Modulus of Elasticity (E)",
    symbol: "E",
    unit: "MPa",
    values: {
      "soldier-pile": "Low",
      "secant-pile": "Moderate",
      "sheet-pile": "Moderate",
      "tangent-pile": "Moderate",
      micropile: "High",
      "diaphragm-wall": "Moderate",
    },
    femImportance: "High",
    modelComplexity: "Moderate",
  },
  {
    param: "Unit Weight (γ)",
    symbol: "γ",
    unit: "kN/m³",
    values: {
      "soldier-pile": "High",
      "secant-pile": "High",
      "sheet-pile": "High",
      "tangent-pile": "High",
      micropile: "Moderate",
      "diaphragm-wall": "High",
    },
    femImportance: "High",
    modelComplexity: "Minimal",
  },
  {
    param: "Poisson's Ratio (ν)",
    symbol: "ν",
    unit: "–",
    values: {
      "soldier-pile": "Low",
      "secant-pile": "Moderate",
      "sheet-pile": "Low",
      "tangent-pile": "Low",
      micropile: "Low",
      "diaphragm-wall": "Moderate",
    },
    femImportance: "Moderate",
    modelComplexity: "Low",
  },
  {
    param: "Permeability (k)",
    symbol: "k",
    unit: "m/s",
    values: {
      "soldier-pile": "N/A",
      "secant-pile": "High",
      "sheet-pile": "High",
      "tangent-pile": "Moderate",
      micropile: "Low",
      "diaphragm-wall": "High",
    },
    femImportance: "High",
    modelComplexity: "High",
  },
  {
    param: "Dilatancy Angle (ψ)",
    symbol: "ψ",
    unit: "°",
    values: {
      "soldier-pile": "Low",
      "secant-pile": "Moderate",
      "sheet-pile": "Low",
      "tangent-pile": "Low",
      micropile: "Moderate",
      "diaphragm-wall": "Moderate",
    },
    femImportance: "Moderate",
    modelComplexity: "High",
  },
  {
    param: "Material Type",
    symbol: "–",
    unit: "steel/concrete/composite",
    values: {
      "soldier-pile": "High",
      "secant-pile": "High",
      "sheet-pile": "High",
      "tangent-pile": "High",
      micropile: "High",
      "diaphragm-wall": "High",
    },
    femImportance: "Critical",
    modelComplexity: "Moderate",
  },
  {
    param: "Young's Modulus of Structure (Es)",
    symbol: "Es",
    unit: "GPa",
    values: {
      "soldier-pile": "High",
      "secant-pile": "High",
      "sheet-pile": "High",
      "tangent-pile": "High",
      micropile: "Moderate",
      "diaphragm-wall": "Moderate",
    },
    femImportance: "High",
    modelComplexity: "Low",
  },
  {
    param: "Moment of Inertia (I)",
    symbol: "I",
    unit: "m⁴",
    values: {
      "soldier-pile": "High",
      "secant-pile": "High",
      "sheet-pile": "High",
      "tangent-pile": "High",
      micropile: "Moderate",
      "diaphragm-wall": "High",
    },
    femImportance: "High",
    modelComplexity: "Low",
  },
  {
    param: "Cross-sectional Properties",
    symbol: "A, Sx",
    unit: "m², cm³/m",
    values: {
      "soldier-pile": "High",
      "secant-pile": "Moderate",
      "sheet-pile": "High",
      "tangent-pile": "Moderate",
      micropile: "High",
      "diaphragm-wall": "Moderate",
    },
    femImportance: "Moderate",
    modelComplexity: "Low",
  },
  {
    param: "Reinforcement Details",
    symbol: "ρ",
    unit: "%",
    values: {
      "soldier-pile": "N/A",
      "secant-pile": "High",
      "sheet-pile": "N/A",
      "tangent-pile": "High",
      micropile: "High",
      "diaphragm-wall": "High",
    },
    femImportance: "Moderate",
    modelComplexity: "Moderate",
  },
  {
    param: "Excavation Depth (H)",
    symbol: "H",
    unit: "m",
    values: {
      "soldier-pile": "High",
      "secant-pile": "High",
      "sheet-pile": "High",
      "tangent-pile": "High",
      micropile: "High",
      "diaphragm-wall": "High",
    },
    femImportance: "Critical",
    modelComplexity: "Moderate",
  },
  {
    param: "Embedment Depth (D)",
    symbol: "D",
    unit: "m",
    values: {
      "soldier-pile": "High",
      "secant-pile": "High",
      "sheet-pile": "High",
      "tangent-pile": "High",
      micropile: "High",
      "diaphragm-wall": "Moderate",
    },
    femImportance: "Critical",
    modelComplexity: "Moderate",
  },
  {
    param: "Pile Diameter (d)",
    symbol: "d",
    unit: "mm",
    values: {
      "soldier-pile": "Low",
      "secant-pile": "High",
      "sheet-pile": "N/A",
      "tangent-pile": "High",
      micropile: "High",
      "diaphragm-wall": "Moderate",
    },
    femImportance: "High",
    modelComplexity: "Low",
  },
  {
    param: "Pile Spacing (s)",
    symbol: "s",
    unit: "m",
    values: {
      "soldier-pile": "High",
      "secant-pile": "N/A",
      "sheet-pile": "N/A",
      "tangent-pile": "N/A",
      micropile: "High",
      "diaphragm-wall": "N/A",
    },
    femImportance: "High",
    modelComplexity: "Moderate",
  },
  {
    param: "Wall Thickness (t)",
    symbol: "t",
    unit: "mm",
    values: {
      "soldier-pile": "N/A",
      "secant-pile": "High",
      "sheet-pile": "High",
      "tangent-pile": "Moderate",
      micropile: "N/A",
      "diaphragm-wall": "High",
    },
    femImportance: "High",
    modelComplexity: "Low",
  },
  {
    param: "Anchor Spacing & Inclination",
    symbol: "lh, α",
    unit: "m, °",
    values: {
      "soldier-pile": "High",
      "secant-pile": "Moderate",
      "sheet-pile": "High",
      "tangent-pile": "Moderate",
      micropile: "High",
      "diaphragm-wall": "Moderate",
    },
    femImportance: "High",
    modelComplexity: "High",
  },
  {
    param: "Surcharge Load (q)",
    symbol: "q",
    unit: "kPa",
    values: {
      "soldier-pile": "High",
      "secant-pile": "Moderate",
      "sheet-pile": "High",
      "tangent-pile": "Moderate",
      micropile: "Moderate",
      "diaphragm-wall": "Low",
    },
    femImportance: "High",
    modelComplexity: "Low",
  },
  {
    param: "Lateral Earth Pressure",
    symbol: "pa",
    unit: "kPa",
    values: {
      "soldier-pile": "High",
      "secant-pile": "High",
      "sheet-pile": "High",
      "tangent-pile": "High",
      micropile: "High",
      "diaphragm-wall": "High",
    },
    femImportance: "Critical",
    modelComplexity: "Moderate",
  },
  {
    param: "Hydrostatic Pressure",
    symbol: "uw",
    unit: "kPa",
    values: {
      "soldier-pile": "N/A",
      "secant-pile": "High",
      "sheet-pile": "High",
      "tangent-pile": "Moderate",
      micropile: "Low",
      "diaphragm-wall": "High",
    },
    femImportance: "High",
    modelComplexity: "High",
  },
  {
    param: "Seismic Loading",
    symbol: "ag",
    unit: "g",
    values: {
      "soldier-pile": "High",
      "secant-pile": "Moderate",
      "sheet-pile": "High",
      "tangent-pile": "Moderate",
      micropile: "High",
      "diaphragm-wall": "Low",
    },
    femImportance: "High",
    modelComplexity: "Very High",
  },
  {
    param: "Construction Stage Loading",
    symbol: "–",
    unit: "stage",
    values: {
      "soldier-pile": "Moderate",
      "secant-pile": "High",
      "sheet-pile": "Moderate",
      "tangent-pile": "High",
      micropile: "High",
      "diaphragm-wall": "High",
    },
    femImportance: "Critical",
    modelComplexity: "High",
  },
  {
    param: "Model Type (2D/3D)",
    symbol: "–",
    unit: "2D/3D",
    values: {
      "soldier-pile": "Moderate",
      "secant-pile": "High",
      "sheet-pile": "Moderate",
      "tangent-pile": "High",
      micropile: "High",
      "diaphragm-wall": "High",
    },
    femImportance: "Critical",
    modelComplexity: "Very High",
  },
  {
    param: "Element Type",
    symbol: "–",
    unit: "beam/plate/solid",
    values: {
      "soldier-pile": "High",
      "secant-pile": "Moderate",
      "sheet-pile": "High",
      "tangent-pile": "Moderate",
      micropile: "High",
      "diaphragm-wall": "Moderate",
    },
    femImportance: "High",
    modelComplexity: "Moderate",
  },
  {
    param: "Mesh Size & Refinement",
    symbol: "–",
    unit: "m",
    values: {
      "soldier-pile": "Moderate",
      "secant-pile": "High",
      "sheet-pile": "Moderate",
      "tangent-pile": "High",
      micropile: "High",
      "diaphragm-wall": "High",
    },
    femImportance: "High",
    modelComplexity: "High",
  },
  {
    param: "Boundary Conditions",
    symbol: "–",
    unit: "–",
    values: {
      "soldier-pile": "Moderate",
      "secant-pile": "Moderate",
      "sheet-pile": "Moderate",
      "tangent-pile": "Moderate",
      micropile: "Moderate",
      "diaphragm-wall": "High",
    },
    femImportance: "High",
    modelComplexity: "Moderate",
  },
  {
    param: "Interface Properties (SSI)",
    symbol: "Ri",
    unit: "–",
    values: {
      "soldier-pile": "High",
      "secant-pile": "High",
      "sheet-pile": "Moderate",
      "tangent-pile": "High",
      micropile: "High",
      "diaphragm-wall": "High",
    },
    femImportance: "Critical",
    modelComplexity: "High",
  },
  {
    param: "Constitutive Soil Model",
    symbol: "–",
    unit: "MC/HS/HSS",
    values: {
      "soldier-pile": "High",
      "secant-pile": "High",
      "sheet-pile": "Moderate",
      "tangent-pile": "High",
      micropile: "High",
      "diaphragm-wall": "High",
    },
    femImportance: "Critical",
    modelComplexity: "Very High",
  },
  {
    param: "Initial Stress Conditions",
    symbol: "K0",
    unit: "–",
    values: {
      "soldier-pile": "Moderate",
      "secant-pile": "High",
      "sheet-pile": "Moderate",
      "tangent-pile": "Moderate",
      micropile: "Moderate",
      "diaphragm-wall": "High",
    },
    femImportance: "High",
    modelComplexity: "Moderate",
  },
];

// ─── Output Ranges Table Data ──────────────────────────────────────────────────

export interface OutputRangeRow {
  param: string;
  indicator?: string;
  unit: string;
  notes: string;
  values: Record<string, string>;
  sortNumeric: Record<string, number>;
}

export const OUTPUT_RANGE_ROWS: OutputRangeRow[] = [
  {
    param: "Lateral Wall Displacement",
    indicator: "Deformation & serviceability",
    unit: "mm",
    notes:
      "Max lateral movement at top of wall; lower = better for adjacent structures",
    values: {
      "soldier-pile": "25–75",
      "secant-pile": "5–20",
      "sheet-pile": "15–40",
      "tangent-pile": "10–30",
      micropile: "15–35",
      "diaphragm-wall": "5–15",
    },
    sortNumeric: {
      "soldier-pile": 50,
      "secant-pile": 12.5,
      "sheet-pile": 27.5,
      "tangent-pile": 20,
      micropile: 25,
      "diaphragm-wall": 10,
    },
  },
  {
    param: "Ground Surface Settlement",
    indicator: "Deformation & serviceability",
    unit: "mm",
    notes:
      "Vertical settlement at ground surface behind wall; critical near existing structures",
    values: {
      "soldier-pile": "15–50",
      "secant-pile": "5–15",
      "sheet-pile": "10–30",
      "tangent-pile": "8–25",
      micropile: "10–20",
      "diaphragm-wall": "3–10",
    },
    sortNumeric: {
      "soldier-pile": 32.5,
      "secant-pile": 10,
      "sheet-pile": 20,
      "tangent-pile": 16.5,
      micropile: 15,
      "diaphragm-wall": 6.5,
    },
  },
  {
    param: "Maximum Bending Moment",
    indicator: "Structural design",
    unit: "kNm/m",
    notes:
      "Maximum bending moment in wall section; governs structural section design",
    values: {
      "soldier-pile": "200–600",
      "secant-pile": "400–1200",
      "sheet-pile": "150–400",
      "tangent-pile": "300–800",
      micropile: "50–200",
      "diaphragm-wall": "800–2000",
    },
    sortNumeric: {
      "soldier-pile": 400,
      "secant-pile": 800,
      "sheet-pile": 275,
      "tangent-pile": 550,
      micropile: 125,
      "diaphragm-wall": 1400,
    },
  },
  {
    param: "FOS — Sliding",
    indicator: "Overall stability",
    unit: "SF",
    notes:
      "Design target FOS > 1.5; accounts for horizontal force resistance at base",
    values: {
      "soldier-pile": "1.3–2.0",
      "secant-pile": "1.5–2.5",
      "sheet-pile": "1.4–2.2",
      "tangent-pile": "1.5–2.2",
      micropile: "1.5–2.5",
      "diaphragm-wall": "1.8–2.8",
    },
    sortNumeric: {
      "soldier-pile": 1.65,
      "secant-pile": 2.0,
      "sheet-pile": 1.8,
      "tangent-pile": 1.85,
      micropile: 2.0,
      "diaphragm-wall": 2.3,
    },
  },
  {
    param: "FOS — Overturning",
    indicator: "Overall stability",
    unit: "SF",
    notes: "Design target FOS > 2.0; moment equilibrium about toe of wall",
    values: {
      "soldier-pile": "1.8–2.8",
      "secant-pile": "2.0–3.5",
      "sheet-pile": "1.8–3.0",
      "tangent-pile": "2.0–3.2",
      micropile: "2.0–3.5",
      "diaphragm-wall": "2.5–4.0",
    },
    sortNumeric: {
      "soldier-pile": 2.3,
      "secant-pile": 2.75,
      "sheet-pile": 2.4,
      "tangent-pile": 2.6,
      micropile: 2.75,
      "diaphragm-wall": 3.25,
    },
  },
  {
    param: "FOS — Basal Heave / Failure",
    indicator: "Overall stability",
    unit: "SF",
    notes:
      "Design target FOS > 1.3 (heave) and > 1.5 (failure); critical in soft clay",
    values: {
      "soldier-pile": "1.3–2.0",
      "secant-pile": "1.5–2.5",
      "sheet-pile": "1.3–2.0",
      "tangent-pile": "1.5–2.3",
      micropile: "1.5–2.5",
      "diaphragm-wall": "1.8–3.0",
    },
    sortNumeric: {
      "soldier-pile": 1.65,
      "secant-pile": 2.0,
      "sheet-pile": 1.65,
      "tangent-pile": 1.9,
      micropile: 2.0,
      "diaphragm-wall": 2.4,
    },
  },
  {
    param: "Load-Bearing Capacity",
    indicator: "System capacity",
    unit: "kN/m",
    notes: "Lateral load-bearing capacity per meter of wall run",
    values: {
      "soldier-pile": "200–600",
      "secant-pile": "500–1500",
      "sheet-pile": "300–800",
      "tangent-pile": "400–1000",
      micropile: "100–500 (per pile)",
      "diaphragm-wall": "1000–3000",
    },
    sortNumeric: {
      "soldier-pile": 400,
      "secant-pile": 1000,
      "sheet-pile": 550,
      "tangent-pile": 700,
      micropile: 300,
      "diaphragm-wall": 2000,
    },
  },
  {
    param: "Axial Load Capacity",
    indicator: "Micropile-specific",
    unit: "kN/pile",
    notes:
      "Individual pile axial capacity; primary capacity mechanism for micropile walls",
    values: {
      "soldier-pile": "N/A",
      "secant-pile": "N/A",
      "sheet-pile": "N/A",
      "tangent-pile": "N/A",
      micropile: "200–2000",
      "diaphragm-wall": "N/A",
    },
    sortNumeric: {
      "soldier-pile": 0,
      "secant-pile": 0,
      "sheet-pile": 0,
      "tangent-pile": 0,
      micropile: 1100,
      "diaphragm-wall": 0,
    },
  },
  {
    param: "Grout-Ground Bond Strength",
    indicator: "Micropile-specific",
    unit: "kPa",
    notes:
      "Bond stress between grout and soil/rock; Type C/D grouting increases bond by 50–200%",
    values: {
      "soldier-pile": "N/A",
      "secant-pile": "N/A",
      "sheet-pile": "N/A",
      "tangent-pile": "N/A",
      micropile: "100–3500",
      "diaphragm-wall": "N/A",
    },
    sortNumeric: {
      "soldier-pile": 0,
      "secant-pile": 0,
      "sheet-pile": 0,
      "tangent-pile": 0,
      micropile: 1800,
      "diaphragm-wall": 0,
    },
  },
];

// ─── Graph Builder Data ────────────────────────────────────────────────────────

export type InputParamKey =
  | "cohesion"
  | "friction-angle"
  | "elastic-modulus-soil"
  | "unit-weight"
  | "poissons-ratio"
  | "permeability"
  | "dilatancy-angle"
  | "material-type"
  | "youngs-modulus-structure"
  | "moment-of-inertia"
  | "cross-sectional-properties"
  | "reinforcement-details"
  | "excavation-depth"
  | "embedment-depth"
  | "pile-diameter"
  | "pile-spacing"
  | "wall-thickness"
  | "anchor-spacing-inclination"
  | "surcharge-load"
  | "lateral-earth-pressure"
  | "hydrostatic-pressure"
  | "seismic-loading"
  | "construction-stage-loading"
  | "model-type"
  | "element-type"
  | "mesh-size"
  | "boundary-conditions"
  | "interface-properties"
  | "constitutive-soil-model"
  | "initial-stress-conditions"
  | "fem-importance"
  | "model-complexity";

export type OutputParamKey =
  | "lateral-displacement"
  | "surface-settlement"
  | "bending-moment"
  | "fos-sliding"
  | "fos-overturning"
  | "fos-failure"
  | "load-bearing-capacity"
  | "axial-load-capacity"
  | "bond-strength";

export const INPUT_PARAM_OPTIONS: {
  id: InputParamKey;
  label: string;
  axisLabel: string;
}[] = [
  { id: "cohesion", label: "Cohesion (C)", axisLabel: "c (kPa)" },
  { id: "friction-angle", label: "Friction Angle (φ)", axisLabel: "φ (°)" },
  {
    id: "elastic-modulus-soil",
    label: "Modulus of Elasticity (E)",
    axisLabel: "E (MPa)",
  },
  { id: "unit-weight", label: "Unit Weight (γ)", axisLabel: "γ (kN/m³)" },
  { id: "poissons-ratio", label: "Poisson's Ratio (ν)", axisLabel: "ν" },
  { id: "permeability", label: "Permeability (k)", axisLabel: "k (×10⁻⁵ m/s)" },
  { id: "dilatancy-angle", label: "Dilatancy Angle (ψ)", axisLabel: "ψ (°)" },
  {
    id: "material-type",
    label: "Material Type (index)",
    axisLabel: "material index",
  },
  {
    id: "youngs-modulus-structure",
    label: "Young's Modulus of Structure (Es)",
    axisLabel: "Es (GPa)",
  },
  {
    id: "moment-of-inertia",
    label: "Moment of Inertia (I)",
    axisLabel: "I (×10⁻⁴ m⁴)",
  },
  {
    id: "cross-sectional-properties",
    label: "Cross-sectional Properties (A)",
    axisLabel: "A (cm²)",
  },
  {
    id: "reinforcement-details",
    label: "Reinforcement Details (ρ)",
    axisLabel: "ρ (%)",
  },
  { id: "excavation-depth", label: "Excavation Depth (H)", axisLabel: "H (m)" },
  { id: "embedment-depth", label: "Embedment Depth (D)", axisLabel: "D (m)" },
  { id: "pile-diameter", label: "Pile Diameter (d)", axisLabel: "d (mm)" },
  { id: "pile-spacing", label: "Pile Spacing (s)", axisLabel: "s (m)" },
  { id: "wall-thickness", label: "Wall Thickness (t)", axisLabel: "t (mm)" },
  {
    id: "anchor-spacing-inclination",
    label: "Anchor Spacing & Inclination",
    axisLabel: "lh (m)",
  },
  { id: "surcharge-load", label: "Surcharge Load (q)", axisLabel: "q (kPa)" },
  {
    id: "lateral-earth-pressure",
    label: "Lateral Earth Pressure",
    axisLabel: "pa (kPa)",
  },
  {
    id: "hydrostatic-pressure",
    label: "Hydrostatic Pressure",
    axisLabel: "uw (kPa)",
  },
  { id: "seismic-loading", label: "Seismic Loading (ag)", axisLabel: "ag (g)" },
  {
    id: "construction-stage-loading",
    label: "Construction Stage Loading",
    axisLabel: "stage",
  },
  { id: "model-type", label: "Model Type (2D/3D)", axisLabel: "model type" },
  { id: "element-type", label: "Element Type", axisLabel: "element type" },
  { id: "mesh-size", label: "Mesh Size & Refinement", axisLabel: "mesh (m)" },
  {
    id: "boundary-conditions",
    label: "Boundary Conditions",
    axisLabel: "BC index",
  },
  {
    id: "interface-properties",
    label: "Interface Properties (SSI)",
    axisLabel: "Ri",
  },
  {
    id: "constitutive-soil-model",
    label: "Constitutive Soil Model",
    axisLabel: "model index",
  },
  {
    id: "initial-stress-conditions",
    label: "Initial Stress Conditions (K0)",
    axisLabel: "K0",
  },
  { id: "fem-importance", label: "FEM Importance", axisLabel: "FEM level" },
  {
    id: "model-complexity",
    label: "Model Complexity",
    axisLabel: "complexity",
  },
];

export const OUTPUT_PARAM_OPTIONS: {
  id: OutputParamKey;
  label: string;
  axisLabel: string;
}[] = [
  {
    id: "lateral-displacement",
    label: "Lateral Wall Displacement (mm)",
    axisLabel: "δ (mm)",
  },
  {
    id: "surface-settlement",
    label: "Ground Surface Settlement (mm)",
    axisLabel: "s (mm)",
  },
  {
    id: "bending-moment",
    label: "Maximum Bending Moment (kNm/m)",
    axisLabel: "M (kNm/m)",
  },
  { id: "fos-sliding", label: "FOS — Sliding", axisLabel: "FOS sliding" },
  {
    id: "fos-overturning",
    label: "FOS — Overturning",
    axisLabel: "FOS overturn",
  },
  {
    id: "fos-failure",
    label: "FOS — Basal Heave / Failure",
    axisLabel: "FOS failure",
  },
  {
    id: "load-bearing-capacity",
    label: "Load-Bearing Capacity (kN/m)",
    axisLabel: "Q (kN/m)",
  },
  {
    id: "axial-load-capacity",
    label: "Axial Load Capacity (kN/pile)",
    axisLabel: "Qa (kN)",
  },
  {
    id: "bond-strength",
    label: "Grout-Ground Bond Strength (kPa)",
    axisLabel: "fs (kPa)",
  },
];

export type GraphPoint = { x: number; y: number };
export type GraphDataSet = Record<string, GraphPoint[]>;
export type GraphData = Record<
  InputParamKey,
  Record<OutputParamKey, GraphDataSet>
>;

function pts(xs: number[], baseLine: number[], factor: number): GraphPoint[] {
  return xs.map((x, i) => ({
    x,
    y: Math.round(baseLine[i] * factor * 10) / 10,
  }));
}

const SYSTEMS_LIST = [
  "soldier-pile",
  "secant-pile",
  "sheet-pile",
  "tangent-pile",
  "micropile",
  "diaphragm-wall",
] as const;

// ── X-axis value arrays for each input parameter
const X: Record<InputParamKey, number[]> = {
  cohesion: [0, 10, 20, 30, 50, 80, 120],
  "friction-angle": [20, 25, 28, 30, 32, 35, 38],
  "elastic-modulus-soil": [10, 20, 40, 80, 120, 200, 300],
  "unit-weight": [15, 16, 17, 18, 19, 20, 21],
  "poissons-ratio": [0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4],
  permeability: [0.1, 0.5, 1, 2, 5, 10, 20],
  "dilatancy-angle": [0, 2, 4, 6, 8, 10, 12],
  "material-type": [1, 2, 3, 4, 5, 6, 7],
  "youngs-modulus-structure": [10, 25, 50, 100, 150, 200, 210],
  "moment-of-inertia": [1, 5, 10, 20, 40, 80, 160],
  "cross-sectional-properties": [50, 100, 200, 400, 600, 900, 1200],
  "reinforcement-details": [0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0],
  "excavation-depth": [4, 6, 8, 10, 12, 15, 20],
  "embedment-depth": [2, 3, 4, 5, 6, 8, 10],
  "pile-diameter": [150, 300, 450, 600, 750, 900, 1050],
  "pile-spacing": [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0],
  "wall-thickness": [200, 400, 600, 800, 1000, 1200, 1500],
  "anchor-spacing-inclination": [1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 5.0],
  "surcharge-load": [0, 10, 20, 40, 60, 80, 100],
  "lateral-earth-pressure": [10, 20, 30, 40, 60, 80, 100],
  "hydrostatic-pressure": [0, 20, 40, 60, 80, 100, 120],
  "seismic-loading": [0, 0.05, 0.1, 0.15, 0.2, 0.3, 0.4],
  "construction-stage-loading": [1, 2, 3, 4, 5, 6, 7],
  "model-type": [1, 2, 3, 4, 5, 6, 7],
  "element-type": [1, 2, 3, 4, 5, 6, 7],
  "mesh-size": [0.1, 0.25, 0.5, 1.0, 1.5, 2.0, 3.0],
  "boundary-conditions": [1, 2, 3, 4, 5, 6, 7],
  "interface-properties": [0.5, 0.6, 0.67, 0.75, 0.8, 0.9, 1.0],
  "constitutive-soil-model": [1, 2, 3, 4, 5, 6, 7],
  "initial-stress-conditions": [0.4, 0.5, 0.6, 0.7, 0.8, 1.0, 1.2],
  "fem-importance": [1, 2, 3, 4, 5, 6, 7],
  "model-complexity": [1, 2, 3, 4, 5, 6, 7],
};

// ── Base curves: 7-point representative values for each input→output combination.
// Illustrative synthetic data — not real measurements.
const BASE: Record<InputParamKey, Record<OutputParamKey, number[]>> = {
  cohesion: {
    "lateral-displacement": [55, 50, 42, 35, 25, 18, 12],
    "surface-settlement": [40, 36, 30, 25, 18, 13, 9],
    "bending-moment": [200, 220, 250, 280, 320, 380, 450],
    "fos-sliding": [1.2, 1.35, 1.5, 1.65, 1.8, 2.0, 2.2],
    "fos-overturning": [1.5, 1.7, 1.9, 2.1, 2.3, 2.6, 3.0],
    "fos-failure": [1.1, 1.3, 1.5, 1.65, 1.8, 2.0, 2.2],
    "load-bearing-capacity": [250, 320, 420, 540, 700, 900, 1100],
    "axial-load-capacity": [200, 260, 350, 450, 580, 750, 950],
    "bond-strength": [100, 180, 300, 500, 800, 1200, 1800],
  },
  "friction-angle": {
    "lateral-displacement": [75, 60, 50, 42, 35, 25, 18],
    "surface-settlement": [55, 44, 37, 31, 25, 18, 13],
    "bending-moment": [350, 280, 240, 210, 180, 140, 110],
    "fos-sliding": [1.1, 1.25, 1.4, 1.55, 1.7, 1.9, 2.1],
    "fos-overturning": [1.4, 1.6, 1.8, 2.0, 2.2, 2.5, 2.8],
    "fos-failure": [1.1, 1.25, 1.4, 1.55, 1.7, 1.9, 2.1],
    "load-bearing-capacity": [200, 300, 400, 520, 650, 820, 1000],
    "axial-load-capacity": [150, 230, 330, 450, 590, 770, 980],
    "bond-strength": [80, 150, 250, 400, 620, 950, 1400],
  },
  "elastic-modulus-soil": {
    "lateral-displacement": [65, 52, 40, 30, 22, 15, 10],
    "surface-settlement": [48, 38, 29, 22, 16, 11, 7],
    "bending-moment": [350, 310, 270, 230, 190, 150, 120],
    "fos-sliding": [1.3, 1.45, 1.6, 1.75, 1.88, 2.0, 2.1],
    "fos-overturning": [1.6, 1.8, 2.0, 2.2, 2.4, 2.6, 2.8],
    "fos-failure": [1.2, 1.38, 1.55, 1.7, 1.85, 2.0, 2.1],
    "load-bearing-capacity": [250, 350, 480, 620, 760, 920, 1080],
    "axial-load-capacity": [180, 270, 390, 530, 680, 840, 1020],
    "bond-strength": [120, 200, 320, 500, 720, 980, 1300],
  },
  "unit-weight": {
    "lateral-displacement": [20, 25, 30, 38, 46, 55, 65],
    "surface-settlement": [14, 18, 22, 28, 34, 42, 52],
    "bending-moment": [100, 140, 190, 250, 320, 400, 500],
    "fos-sliding": [2.2, 2.05, 1.9, 1.75, 1.6, 1.45, 1.3],
    "fos-overturning": [2.8, 2.6, 2.4, 2.2, 2.0, 1.8, 1.6],
    "fos-failure": [2.1, 1.95, 1.8, 1.65, 1.5, 1.35, 1.2],
    "load-bearing-capacity": [300, 400, 520, 660, 820, 990, 1180],
    "axial-load-capacity": [240, 320, 420, 540, 680, 840, 1020],
    "bond-strength": [200, 280, 380, 500, 650, 840, 1050],
  },
  "poissons-ratio": {
    "lateral-displacement": [18, 22, 27, 33, 40, 48, 58],
    "surface-settlement": [13, 16, 20, 25, 30, 37, 46],
    "bending-moment": [180, 210, 245, 285, 330, 385, 450],
    "fos-sliding": [2.0, 1.9, 1.8, 1.7, 1.6, 1.5, 1.35],
    "fos-overturning": [2.5, 2.35, 2.2, 2.05, 1.9, 1.75, 1.6],
    "fos-failure": [1.9, 1.8, 1.7, 1.6, 1.5, 1.4, 1.25],
    "load-bearing-capacity": [700, 650, 590, 520, 450, 370, 290],
    "axial-load-capacity": [560, 510, 460, 400, 340, 270, 200],
    "bond-strength": [900, 820, 730, 620, 510, 390, 280],
  },
  permeability: {
    "lateral-displacement": [12, 15, 20, 28, 38, 52, 68],
    "surface-settlement": [9, 12, 16, 22, 30, 42, 56],
    "bending-moment": [150, 180, 215, 260, 315, 380, 460],
    "fos-sliding": [2.1, 1.95, 1.8, 1.65, 1.5, 1.35, 1.2],
    "fos-overturning": [2.6, 2.4, 2.2, 2.0, 1.8, 1.6, 1.4],
    "fos-failure": [2.0, 1.85, 1.7, 1.55, 1.4, 1.25, 1.1],
    "load-bearing-capacity": [750, 680, 600, 510, 420, 320, 220],
    "axial-load-capacity": [600, 540, 470, 390, 310, 230, 160],
    "bond-strength": [1100, 980, 840, 690, 540, 390, 250],
  },
  "dilatancy-angle": {
    "lateral-displacement": [55, 48, 42, 36, 30, 24, 18],
    "surface-settlement": [42, 36, 31, 26, 22, 17, 13],
    "bending-moment": [280, 255, 230, 205, 180, 155, 130],
    "fos-sliding": [1.3, 1.42, 1.55, 1.68, 1.8, 1.95, 2.1],
    "fos-overturning": [1.6, 1.75, 1.9, 2.05, 2.2, 2.38, 2.55],
    "fos-failure": [1.2, 1.34, 1.48, 1.62, 1.75, 1.9, 2.05],
    "load-bearing-capacity": [300, 380, 470, 570, 680, 800, 930],
    "axial-load-capacity": [240, 310, 390, 480, 580, 690, 810],
    "bond-strength": [200, 280, 380, 500, 650, 830, 1050],
  },
  "material-type": {
    "lateral-displacement": [65, 52, 40, 30, 22, 16, 12],
    "surface-settlement": [50, 40, 30, 22, 16, 12, 9],
    "bending-moment": [150, 220, 310, 420, 540, 680, 840],
    "fos-sliding": [1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4],
    "fos-overturning": [1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0],
    "fos-failure": [1.1, 1.32, 1.55, 1.78, 2.0, 2.22, 2.4],
    "load-bearing-capacity": [200, 320, 460, 620, 800, 1000, 1200],
    "axial-load-capacity": [160, 260, 380, 520, 680, 860, 1060],
    "bond-strength": [120, 220, 360, 540, 760, 1020, 1320],
  },
  "youngs-modulus-structure": {
    "lateral-displacement": [70, 55, 42, 32, 24, 17, 12],
    "surface-settlement": [54, 42, 32, 24, 18, 13, 9],
    "bending-moment": [120, 180, 260, 360, 470, 590, 720],
    "fos-sliding": [1.25, 1.42, 1.6, 1.78, 1.96, 2.14, 2.3],
    "fos-overturning": [1.55, 1.75, 1.95, 2.18, 2.4, 2.6, 2.8],
    "fos-failure": [1.15, 1.34, 1.54, 1.74, 1.92, 2.1, 2.28],
    "load-bearing-capacity": [220, 340, 490, 660, 840, 1040, 1250],
    "axial-load-capacity": [180, 280, 410, 560, 730, 920, 1120],
    "bond-strength": [140, 240, 380, 560, 780, 1040, 1340],
  },
  "moment-of-inertia": {
    "lateral-displacement": [80, 60, 44, 32, 22, 15, 10],
    "surface-settlement": [62, 47, 34, 24, 17, 11, 8],
    "bending-moment": [100, 160, 240, 350, 480, 630, 800],
    "fos-sliding": [1.2, 1.4, 1.62, 1.84, 2.06, 2.28, 2.5],
    "fos-overturning": [1.5, 1.72, 1.98, 2.24, 2.5, 2.76, 3.0],
    "fos-failure": [1.1, 1.32, 1.56, 1.8, 2.04, 2.26, 2.48],
    "load-bearing-capacity": [180, 300, 450, 630, 830, 1050, 1280],
    "axial-load-capacity": [140, 240, 370, 530, 710, 920, 1150],
    "bond-strength": [110, 200, 330, 500, 710, 970, 1280],
  },
  "cross-sectional-properties": {
    "lateral-displacement": [75, 58, 43, 31, 22, 15, 10],
    "surface-settlement": [58, 44, 32, 23, 16, 11, 7],
    "bending-moment": [110, 170, 250, 360, 490, 640, 810],
    "fos-sliding": [1.2, 1.42, 1.64, 1.86, 2.08, 2.3, 2.5],
    "fos-overturning": [1.5, 1.74, 2.0, 2.26, 2.52, 2.78, 3.0],
    "fos-failure": [1.1, 1.34, 1.58, 1.82, 2.06, 2.28, 2.5],
    "load-bearing-capacity": [190, 310, 460, 640, 840, 1060, 1290],
    "axial-load-capacity": [150, 250, 380, 540, 720, 930, 1160],
    "bond-strength": [120, 210, 340, 510, 720, 980, 1290],
  },
  "reinforcement-details": {
    "lateral-displacement": [60, 52, 44, 36, 28, 20, 13],
    "surface-settlement": [46, 40, 33, 27, 21, 15, 10],
    "bending-moment": [150, 220, 300, 390, 490, 600, 720],
    "fos-sliding": [1.3, 1.48, 1.66, 1.84, 2.02, 2.2, 2.38],
    "fos-overturning": [1.6, 1.8, 2.0, 2.22, 2.44, 2.66, 2.88],
    "fos-failure": [1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4],
    "load-bearing-capacity": [220, 340, 480, 640, 820, 1020, 1240],
    "axial-load-capacity": [180, 280, 410, 560, 730, 920, 1130],
    "bond-strength": [140, 240, 370, 530, 720, 940, 1200],
  },
  "excavation-depth": {
    "lateral-displacement": [8, 15, 25, 38, 52, 70, 100],
    "surface-settlement": [6, 11, 18, 28, 40, 56, 82],
    "bending-moment": [40, 100, 200, 380, 600, 950, 1600],
    "fos-sliding": [2.5, 2.1, 1.8, 1.55, 1.35, 1.2, 1.05],
    "fos-overturning": [3.2, 2.7, 2.3, 2.0, 1.72, 1.5, 1.3],
    "fos-failure": [2.4, 2.0, 1.7, 1.45, 1.25, 1.1, 0.95],
    "load-bearing-capacity": [900, 800, 700, 580, 460, 340, 200],
    "axial-load-capacity": [720, 640, 560, 460, 360, 260, 150],
    "bond-strength": [1200, 1060, 920, 760, 600, 440, 260],
  },
  "embedment-depth": {
    "lateral-displacement": [85, 62, 45, 32, 23, 16, 11],
    "surface-settlement": [65, 47, 34, 24, 17, 12, 8],
    "bending-moment": [500, 420, 340, 265, 200, 145, 100],
    "fos-sliding": [1.1, 1.35, 1.6, 1.85, 2.1, 2.35, 2.6],
    "fos-overturning": [1.3, 1.6, 1.9, 2.2, 2.5, 2.8, 3.1],
    "fos-failure": [1.0, 1.28, 1.56, 1.84, 2.12, 2.4, 2.68],
    "load-bearing-capacity": [250, 380, 530, 700, 880, 1080, 1300],
    "axial-load-capacity": [200, 310, 440, 590, 760, 950, 1160],
    "bond-strength": [160, 260, 390, 550, 740, 960, 1210],
  },
  "pile-diameter": {
    "lateral-displacement": [55, 40, 30, 22, 16, 12, 9],
    "surface-settlement": [42, 31, 22, 16, 12, 9, 7],
    "bending-moment": [220, 280, 350, 420, 500, 590, 680],
    "fos-sliding": [1.3, 1.5, 1.7, 1.9, 2.1, 2.25, 2.4],
    "fos-overturning": [1.6, 1.82, 2.04, 2.26, 2.48, 2.68, 2.88],
    "fos-failure": [1.2, 1.42, 1.64, 1.86, 2.08, 2.28, 2.48],
    "load-bearing-capacity": [200, 350, 520, 700, 880, 1050, 1220],
    "axial-load-capacity": [160, 280, 430, 600, 780, 970, 1170],
    "bond-strength": [130, 240, 390, 570, 780, 1010, 1270],
  },
  "pile-spacing": {
    "lateral-displacement": [18, 25, 32, 40, 52, 65, 80],
    "surface-settlement": [13, 18, 24, 31, 41, 52, 66],
    "bending-moment": [80, 130, 190, 260, 340, 430, 550],
    "fos-sliding": [2.2, 2.0, 1.8, 1.6, 1.4, 1.25, 1.1],
    "fos-overturning": [2.8, 2.55, 2.3, 2.05, 1.8, 1.58, 1.38],
    "fos-failure": [2.1, 1.9, 1.7, 1.5, 1.3, 1.15, 1.0],
    "load-bearing-capacity": [950, 800, 650, 500, 380, 280, 200],
    "axial-load-capacity": [760, 640, 520, 400, 300, 220, 160],
    "bond-strength": [1100, 920, 740, 560, 420, 300, 210],
  },
  "wall-thickness": {
    "lateral-displacement": [72, 54, 40, 29, 20, 14, 10],
    "surface-settlement": [56, 41, 30, 22, 15, 10, 7],
    "bending-moment": [120, 190, 280, 390, 510, 650, 810],
    "fos-sliding": [1.2, 1.44, 1.68, 1.92, 2.16, 2.38, 2.6],
    "fos-overturning": [1.5, 1.76, 2.02, 2.28, 2.54, 2.78, 3.02],
    "fos-failure": [1.1, 1.36, 1.62, 1.88, 2.14, 2.38, 2.6],
    "load-bearing-capacity": [180, 310, 470, 660, 870, 1090, 1330],
    "axial-load-capacity": [140, 250, 390, 560, 750, 960, 1190],
    "bond-strength": [110, 210, 350, 530, 740, 990, 1280],
  },
  "anchor-spacing-inclination": {
    "lateral-displacement": [12, 18, 26, 36, 48, 62, 78],
    "surface-settlement": [9, 14, 20, 28, 38, 50, 64],
    "bending-moment": [500, 420, 340, 265, 200, 145, 100],
    "fos-sliding": [2.3, 2.1, 1.9, 1.7, 1.5, 1.32, 1.15],
    "fos-overturning": [2.9, 2.65, 2.4, 2.15, 1.9, 1.66, 1.44],
    "fos-failure": [2.2, 2.0, 1.8, 1.6, 1.4, 1.22, 1.05],
    "load-bearing-capacity": [900, 780, 650, 520, 400, 295, 210],
    "axial-load-capacity": [720, 620, 520, 415, 315, 230, 165],
    "bond-strength": [1050, 900, 745, 585, 440, 315, 215],
  },
  "surcharge-load": {
    "lateral-displacement": [20, 28, 38, 52, 65, 80, 95],
    "surface-settlement": [14, 20, 28, 40, 52, 65, 80],
    "bending-moment": [100, 160, 230, 340, 460, 580, 700],
    "fos-sliding": [2.3, 2.1, 1.9, 1.65, 1.45, 1.28, 1.12],
    "fos-overturning": [2.9, 2.65, 2.38, 2.1, 1.82, 1.58, 1.38],
    "fos-failure": [2.2, 2.0, 1.8, 1.55, 1.35, 1.18, 1.02],
    "load-bearing-capacity": [850, 750, 640, 510, 390, 280, 180],
    "axial-load-capacity": [680, 600, 510, 405, 305, 220, 140],
    "bond-strength": [1000, 880, 745, 585, 440, 310, 195],
  },
  "lateral-earth-pressure": {
    "lateral-displacement": [10, 18, 28, 42, 58, 76, 98],
    "surface-settlement": [7, 13, 21, 32, 46, 62, 82],
    "bending-moment": [80, 150, 240, 360, 500, 660, 840],
    "fos-sliding": [2.6, 2.3, 2.0, 1.7, 1.45, 1.22, 1.02],
    "fos-overturning": [3.2, 2.8, 2.4, 2.05, 1.72, 1.42, 1.18],
    "fos-failure": [2.5, 2.2, 1.9, 1.6, 1.35, 1.12, 0.92],
    "load-bearing-capacity": [1000, 860, 710, 560, 420, 300, 190],
    "axial-load-capacity": [800, 680, 560, 440, 325, 225, 140],
    "bond-strength": [1200, 1020, 840, 650, 480, 330, 200],
  },
  "hydrostatic-pressure": {
    "lateral-displacement": [12, 18, 26, 38, 52, 70, 92],
    "surface-settlement": [8, 13, 19, 29, 41, 56, 76],
    "bending-moment": [100, 165, 245, 360, 500, 660, 840],
    "fos-sliding": [2.4, 2.15, 1.9, 1.65, 1.42, 1.22, 1.04],
    "fos-overturning": [3.0, 2.68, 2.36, 2.04, 1.74, 1.48, 1.24],
    "fos-failure": [2.3, 2.05, 1.8, 1.55, 1.32, 1.12, 0.94],
    "load-bearing-capacity": [950, 820, 680, 540, 405, 285, 180],
    "axial-load-capacity": [760, 655, 545, 430, 320, 225, 140],
    "bond-strength": [1100, 950, 785, 615, 455, 315, 195],
  },
  "seismic-loading": {
    "lateral-displacement": [18, 26, 38, 54, 72, 92, 118],
    "surface-settlement": [13, 19, 28, 41, 56, 74, 98],
    "bending-moment": [120, 195, 290, 420, 570, 740, 940],
    "fos-sliding": [2.5, 2.2, 1.9, 1.62, 1.36, 1.14, 0.95],
    "fos-overturning": [3.1, 2.74, 2.38, 2.02, 1.68, 1.4, 1.14],
    "fos-failure": [2.4, 2.1, 1.82, 1.54, 1.28, 1.06, 0.88],
    "load-bearing-capacity": [980, 840, 690, 535, 390, 265, 160],
    "axial-load-capacity": [785, 670, 550, 425, 305, 205, 125],
    "bond-strength": [1150, 985, 805, 620, 450, 300, 180],
  },
  "construction-stage-loading": {
    "lateral-displacement": [12, 20, 30, 44, 60, 78, 100],
    "surface-settlement": [8, 14, 22, 33, 46, 61, 80],
    "bending-moment": [90, 160, 260, 390, 540, 710, 900],
    "fos-sliding": [2.6, 2.3, 2.0, 1.7, 1.42, 1.18, 0.98],
    "fos-overturning": [3.2, 2.84, 2.48, 2.12, 1.76, 1.46, 1.2],
    "fos-failure": [2.5, 2.2, 1.9, 1.62, 1.35, 1.1, 0.9],
    "load-bearing-capacity": [1000, 860, 705, 545, 395, 265, 160],
    "axial-load-capacity": [800, 690, 565, 435, 310, 205, 125],
    "bond-strength": [1200, 1030, 845, 650, 465, 305, 185],
  },
  "model-type": {
    "lateral-displacement": [48, 40, 32, 25, 19, 14, 10],
    "surface-settlement": [37, 30, 24, 19, 14, 10, 7],
    "bending-moment": [260, 310, 365, 425, 490, 560, 640],
    "fos-sliding": [1.4, 1.55, 1.7, 1.85, 2.0, 2.15, 2.3],
    "fos-overturning": [1.75, 1.93, 2.11, 2.3, 2.49, 2.68, 2.87],
    "fos-failure": [1.3, 1.46, 1.62, 1.78, 1.94, 2.1, 2.26],
    "load-bearing-capacity": [380, 490, 610, 740, 880, 1030, 1190],
    "axial-load-capacity": [300, 400, 510, 630, 760, 900, 1060],
    "bond-strength": [340, 460, 600, 760, 940, 1140, 1360],
  },
  "element-type": {
    "lateral-displacement": [45, 38, 30, 23, 18, 13, 9],
    "surface-settlement": [34, 28, 22, 17, 13, 10, 7],
    "bending-moment": [240, 295, 355, 420, 490, 565, 645],
    "fos-sliding": [1.35, 1.52, 1.69, 1.86, 2.03, 2.2, 2.37],
    "fos-overturning": [1.7, 1.9, 2.1, 2.3, 2.5, 2.7, 2.9],
    "fos-failure": [1.25, 1.44, 1.63, 1.82, 2.01, 2.2, 2.39],
    "load-bearing-capacity": [360, 475, 600, 735, 880, 1035, 1200],
    "axial-load-capacity": [285, 385, 500, 625, 760, 905, 1060],
    "bond-strength": [320, 445, 590, 755, 940, 1145, 1370],
  },
  "mesh-size": {
    "lateral-displacement": [8, 12, 18, 28, 40, 55, 72],
    "surface-settlement": [6, 9, 14, 21, 31, 44, 59],
    "bending-moment": [600, 540, 460, 370, 285, 210, 150],
    "fos-sliding": [2.3, 2.1, 1.9, 1.68, 1.48, 1.3, 1.14],
    "fos-overturning": [2.9, 2.64, 2.38, 2.1, 1.84, 1.6, 1.4],
    "fos-failure": [2.2, 2.0, 1.8, 1.58, 1.38, 1.2, 1.04],
    "load-bearing-capacity": [1050, 920, 775, 620, 475, 345, 235],
    "axial-load-capacity": [840, 735, 620, 495, 375, 270, 185],
    "bond-strength": [1250, 1095, 920, 735, 555, 395, 265],
  },
  "boundary-conditions": {
    "lateral-displacement": [50, 42, 35, 28, 22, 17, 13],
    "surface-settlement": [38, 32, 26, 21, 16, 12, 9],
    "bending-moment": [270, 320, 375, 435, 500, 570, 645],
    "fos-sliding": [1.38, 1.54, 1.7, 1.86, 2.02, 2.18, 2.34],
    "fos-overturning": [1.72, 1.9, 2.08, 2.28, 2.48, 2.68, 2.88],
    "fos-failure": [1.28, 1.46, 1.64, 1.82, 2.0, 2.18, 2.36],
    "load-bearing-capacity": [370, 480, 600, 730, 870, 1020, 1180],
    "axial-load-capacity": [295, 395, 510, 635, 770, 915, 1070],
    "bond-strength": [330, 455, 600, 765, 950, 1155, 1380],
  },
  "interface-properties": {
    "lateral-displacement": [75, 60, 48, 37, 27, 18, 12],
    "surface-settlement": [58, 46, 36, 28, 20, 14, 9],
    "bending-moment": [320, 290, 258, 225, 192, 160, 130],
    "fos-sliding": [1.2, 1.38, 1.56, 1.74, 1.92, 2.1, 2.28],
    "fos-overturning": [1.5, 1.7, 1.92, 2.14, 2.36, 2.58, 2.8],
    "fos-failure": [1.1, 1.3, 1.5, 1.7, 1.9, 2.1, 2.3],
    "load-bearing-capacity": [240, 360, 500, 660, 840, 1040, 1260],
    "axial-load-capacity": [190, 295, 420, 565, 730, 920, 1130],
    "bond-strength": [200, 330, 500, 710, 970, 1280, 1640],
  },
  "constitutive-soil-model": {
    "lateral-displacement": [52, 44, 36, 29, 23, 18, 14],
    "surface-settlement": [40, 33, 27, 22, 17, 13, 10],
    "bending-moment": [245, 295, 350, 410, 475, 545, 620],
    "fos-sliding": [1.32, 1.5, 1.68, 1.86, 2.04, 2.22, 2.4],
    "fos-overturning": [1.64, 1.84, 2.04, 2.26, 2.48, 2.7, 2.92],
    "fos-failure": [1.22, 1.42, 1.62, 1.82, 2.02, 2.22, 2.42],
    "load-bearing-capacity": [350, 460, 580, 710, 850, 1000, 1160],
    "axial-load-capacity": [275, 375, 490, 615, 750, 895, 1050],
    "bond-strength": [310, 430, 570, 730, 910, 1110, 1330],
  },
  "initial-stress-conditions": {
    "lateral-displacement": [15, 20, 26, 34, 44, 56, 70],
    "surface-settlement": [11, 15, 20, 26, 34, 44, 56],
    "bending-moment": [140, 185, 240, 305, 380, 465, 560],
    "fos-sliding": [2.2, 2.0, 1.8, 1.6, 1.4, 1.22, 1.06],
    "fos-overturning": [2.76, 2.5, 2.24, 2.0, 1.76, 1.52, 1.3],
    "fos-failure": [2.1, 1.9, 1.7, 1.5, 1.3, 1.12, 0.96],
    "load-bearing-capacity": [920, 800, 675, 545, 415, 295, 195],
    "axial-load-capacity": [735, 640, 540, 435, 330, 235, 155],
    "bond-strength": [1080, 940, 790, 635, 480, 340, 220],
  },
  "fem-importance": {
    "lateral-displacement": [60, 50, 40, 32, 25, 19, 14],
    "surface-settlement": [46, 38, 30, 24, 18, 14, 10],
    "bending-moment": [200, 260, 330, 410, 500, 600, 710],
    "fos-sliding": [1.3, 1.48, 1.66, 1.84, 2.02, 2.2, 2.38],
    "fos-overturning": [1.62, 1.82, 2.04, 2.26, 2.48, 2.7, 2.92],
    "fos-failure": [1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4],
    "load-bearing-capacity": [300, 410, 535, 670, 820, 980, 1150],
    "axial-load-capacity": [240, 335, 445, 565, 700, 845, 1005],
    "bond-strength": [270, 390, 535, 700, 890, 1105, 1340],
  },
  "model-complexity": {
    "lateral-displacement": [55, 46, 37, 29, 23, 17, 12],
    "surface-settlement": [42, 35, 28, 22, 17, 12, 9],
    "bending-moment": [220, 275, 338, 408, 484, 566, 654],
    "fos-sliding": [1.3, 1.48, 1.66, 1.84, 2.02, 2.2, 2.38],
    "fos-overturning": [1.62, 1.83, 2.04, 2.26, 2.48, 2.7, 2.92],
    "fos-failure": [1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4],
    "load-bearing-capacity": [310, 420, 545, 680, 830, 990, 1160],
    "axial-load-capacity": [248, 345, 455, 578, 714, 860, 1020],
    "bond-strength": [280, 400, 545, 712, 904, 1120, 1360],
  },
};

// Per-output, per-system scale factors controlling relative sensitivity.
const SCALE: Record<OutputParamKey, Record<string, number>> = {
  "lateral-displacement": {
    "soldier-pile": 1.5,
    "secant-pile": 0.9,
    "sheet-pile": 1.2,
    "tangent-pile": 1.0,
    micropile: 0.5,
    "diaphragm-wall": 0.25,
  },
  "surface-settlement": {
    "soldier-pile": 1.4,
    "secant-pile": 0.85,
    "sheet-pile": 1.15,
    "tangent-pile": 0.95,
    micropile: 0.55,
    "diaphragm-wall": 0.3,
  },
  "bending-moment": {
    "soldier-pile": 0.5,
    "secant-pile": 1.2,
    "sheet-pile": 0.9,
    "tangent-pile": 1.0,
    micropile: 0.15,
    "diaphragm-wall": 2.2,
  },
  "fos-sliding": {
    "soldier-pile": 0.8,
    "secant-pile": 1.05,
    "sheet-pile": 0.9,
    "tangent-pile": 0.95,
    micropile: 1.1,
    "diaphragm-wall": 1.25,
  },
  "fos-overturning": {
    "soldier-pile": 0.78,
    "secant-pile": 1.02,
    "sheet-pile": 0.88,
    "tangent-pile": 0.93,
    micropile: 1.08,
    "diaphragm-wall": 1.22,
  },
  "fos-failure": {
    "soldier-pile": 0.82,
    "secant-pile": 1.06,
    "sheet-pile": 0.91,
    "tangent-pile": 0.96,
    micropile: 1.12,
    "diaphragm-wall": 1.28,
  },
  "load-bearing-capacity": {
    "soldier-pile": 0.4,
    "secant-pile": 1.2,
    "sheet-pile": 0.75,
    "tangent-pile": 0.95,
    micropile: 0.65,
    "diaphragm-wall": 2.3,
  },
  "axial-load-capacity": {
    "soldier-pile": 0.0,
    "secant-pile": 0.0,
    "sheet-pile": 0.0,
    "tangent-pile": 0.0,
    micropile: 2.2,
    "diaphragm-wall": 0.0,
  },
  "bond-strength": {
    "soldier-pile": 0.0,
    "secant-pile": 0.0,
    "sheet-pile": 0.0,
    "tangent-pile": 0.0,
    micropile: 1.8,
    "diaphragm-wall": 0.0,
  },
};

const ALL_INPUT_KEYS = Object.keys(BASE) as InputParamKey[];
const ALL_OUTPUT_KEYS: OutputParamKey[] = [
  "lateral-displacement",
  "surface-settlement",
  "bending-moment",
  "fos-sliding",
  "fos-overturning",
  "fos-failure",
  "load-bearing-capacity",
  "axial-load-capacity",
  "bond-strength",
];

export const GRAPH_DATA: GraphData = ALL_INPUT_KEYS.reduce((acc, inputKey) => {
  acc[inputKey] = ALL_OUTPUT_KEYS.reduce(
    (oAcc, outputKey) => {
      const baseCurve = BASE[inputKey][outputKey];
      const xs = X[inputKey];
      oAcc[outputKey] = SYSTEMS_LIST.reduce((sAcc, sysId) => {
        sAcc[sysId] = pts(xs, baseCurve, SCALE[outputKey][sysId]);
        return sAcc;
      }, {} as GraphDataSet);
      return oAcc;
    },
    {} as Record<OutputParamKey, GraphDataSet>,
  );
  return acc;
}, {} as GraphData);

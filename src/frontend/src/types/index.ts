import type { WallType } from "@/backend";

export type { WallType };

export interface ExcavationSystem {
  id: string;
  name: string;
  description: string;
  wallType: WallType;
}

export interface SoilParameters {
  frictionAngle: number;
  cohesion: number;
  unitWeight: number;
  elasticModulus: number;
  poissonRatio: number;
}

export interface EarthPressure {
  kaActive: number;
  kpPassive: number;
  k0AtRest: number;
  activeForce: number;
  passiveForce: number;
  formula: string;
}

export interface SystemDetail {
  systemId: string;
  tabName: string;
  content: string;
}

export interface ComparisonMetric {
  systemId: string;
  costRange: string;
  maxHeight: number;
  installationTime: string;
  deflection: string;
  waterControl: string;
  noisyVibration: string;
  mobilizationTime: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors?: string;
  year?: number;
  method: string;
  keyParameters: string;
  categories: string[];
  abstract: string;
  conclusion?: string;
  doiLink: string;
}

export type SystemTab =
  | "basic"
  | "components"
  | "soil"
  | "earth-pressure"
  | "fem"
  | "parameter-effects"
  | "design"
  | "case-studies";

export const SYSTEM_TABS: { id: SystemTab; label: string }[] = [
  { id: "basic", label: "Basic" },
  { id: "components", label: "Components" },
  { id: "soil", label: "Soil Parameters" },
  { id: "earth-pressure", label: "Earth Pressure" },
  { id: "fem", label: "FEM" },
  { id: "parameter-effects", label: "Parameter Effects" },
  { id: "design", label: "Design" },
  { id: "case-studies", label: "Case Studies" },
];

export const SYSTEM_IDS = [
  "soldier-pile",
  "secant-pile",
  "sheet-pile",
  "tangent-pile",
  "micropile",
  "diaphragm-wall",
] as const;

export type SystemId = (typeof SYSTEM_IDS)[number];

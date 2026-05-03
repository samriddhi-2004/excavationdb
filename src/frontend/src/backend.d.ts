import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ComparisonMetric {
    installationTime: string;
    waterControl: string;
    maxHeight: number;
    deflection: string;
    systemId: string;
    mobilizationTime: string;
    noisyVibration: string;
    costRange: string;
}
export interface ExcavationSystem {
    id: string;
    name: string;
    description: string;
    wallType: WallType;
}
export interface ResearchPaper {
    id: string;
    categories: Array<string>;
    method: string;
    title: string;
    doiLink: string;
    keyParameters: string;
    abstract: string;
}
export interface SystemDetail {
    content: string;
    tabName: string;
    systemId: string;
}
export enum WallType {
    TangentPile = "TangentPile",
    SheetPile = "SheetPile",
    SecantPile = "SecantPile",
    DiaphragmWall = "DiaphragmWall",
    Micropile = "Micropile",
    SoldierPile = "SoldierPile"
}
export interface backendInterface {
    getAllMetrics(): Promise<Array<ComparisonMetric>>;
    getPapers(): Promise<Array<ResearchPaper>>;
    getPapersByCategory(category: string): Promise<Array<ResearchPaper>>;
    getSystemDetail(systemId: string, tab: string): Promise<SystemDetail | null>;
    getSystems(): Promise<Array<ExcavationSystem>>;
}

import { TechTable } from "@/components/TechTable";
import type { ColumnDef } from "@/components/TechTable";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { SYSTEMS } from "@/lib/data";
import { SYSTEM_DETAILS_RICH } from "@/lib/systemDetailData";
import { cn } from "@/lib/utils";
import { SYSTEM_IDS, SYSTEM_TABS } from "@/types";
import type { SystemTab } from "@/types";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { useState } from "react";

// ─── Sub-renderers ────────────────────────────────────────────────────────────

function ProseSection({ text }: { text: string }) {
  return (
    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
      {text}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-primary mb-2 mt-6 first:mt-0">
      {children}
    </h3>
  );
}

function FormulaBlock({
  label,
  formula,
  note,
}: { label: string; formula: string; note?: string }) {
  return (
    <div className="mb-3">
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <pre className="bg-muted/50 border border-border/50 rounded px-4 py-3 font-mono text-sm text-foreground overflow-x-auto">
        {formula}
      </pre>
      {note && (
        <p className="text-xs text-muted-foreground/70 mt-1 italic">{note}</p>
      )}
    </div>
  );
}

function UseCaseList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 mt-2">
      {Array.from(items, (item, i) => `uc-${i}-${item.slice(0, 12)}`).map(
        (key, i) => (
          <li
            key={key}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <span className="text-primary font-mono text-xs mt-0.5 shrink-0">
              ▸
            </span>
            <span>{items[i]}</span>
          </li>
        ),
      )}
    </ul>
  );
}

function StepList({ steps }: { steps: string[] }) {
  return (
    <ol className="space-y-2 mt-2">
      {Array.from(steps, (step, i) => `step-${i}-${step.slice(0, 10)}`).map(
        (key, i) => (
          <li
            key={key}
            className="flex items-start gap-3 text-sm text-muted-foreground"
          >
            <span className="font-mono text-xs text-primary bg-primary/10 border border-primary/20 rounded px-1.5 py-0.5 shrink-0 min-w-[22px] text-center">
              {i + 1}
            </span>
            <span className="leading-relaxed">{steps[i]}</span>
          </li>
        ),
      )}
    </ol>
  );
}

// ─── Tab content renderers ─────────────────────────────────────────────────

type TabData = NonNullable<ReturnType<typeof SYSTEM_DETAILS_RICH.get>>;

function BasicTab({ data }: { data: TabData["basic"] }) {
  return (
    <div className="space-y-5">
      <div>
        <SectionHeading>Description</SectionHeading>
        <ProseSection text={data.description} />
      </div>
      <div>
        <SectionHeading>Typical Applications</SectionHeading>
        <UseCaseList items={data.useCases} />
      </div>
      <div>
        <SectionHeading>Typical Dimensions</SectionHeading>
        <TechTable
          columns={DIMS_COLS}
          data={data.dimensions}
          keyField="parameter"
        />
      </div>
    </div>
  );
}

const DIMS_COLS: ColumnDef<{
  parameter: string;
  value: string;
  unit: string;
  notes: string;
}>[] = [
  { key: "parameter", header: "Parameter", mono: true },
  { key: "value", header: "Typical Range", mono: true, align: "right" },
  { key: "unit", header: "Unit", mono: true, align: "center" },
  { key: "notes", header: "Notes" },
];

function ComponentsTab({ data }: { data: TabData["components"] }) {
  return (
    <div className="space-y-5">
      <div>
        <SectionHeading>Primary Materials</SectionHeading>
        <UseCaseList items={data.materials} />
      </div>
      <div>
        <SectionHeading>Structural Elements</SectionHeading>
        <div className="space-y-3">
          {Array.from(data.elements, (el) => el.name).map((key, i) => (
            <div
              key={key}
              className="border border-border/40 rounded-md p-3 bg-card/50"
            >
              <p className="font-mono text-xs font-semibold text-primary mb-1">
                {data.elements[i].name}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {data.elements[i].description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const SOIL_COLS: ColumnDef<{
  parameter: string;
  range: string;
  unit: string;
  effect: string;
}>[] = [
  { key: "parameter", header: "Parameter", mono: true },
  { key: "range", header: "Typical Range", mono: true, align: "right" },
  { key: "unit", header: "Unit", mono: true, align: "center" },
  { key: "effect", header: "Effect on Design" },
];

function SoilTab({ data }: { data: TabData["soil"] }) {
  return (
    <div className="space-y-5">
      <div>
        <SectionHeading>Applicable Soil Conditions</SectionHeading>
        <ProseSection text={data.applicability} />
      </div>
      <div>
        <SectionHeading>Design Parameters</SectionHeading>
        <TechTable
          columns={SOIL_COLS}
          data={data.parameters}
          keyField="parameter"
        />
      </div>
    </div>
  );
}

function EarthPressureTab({ data }: { data: TabData["earthPressure"] }) {
  return (
    <div className="space-y-5">
      <div>
        <SectionHeading>Rankine Earth Pressure Coefficients</SectionHeading>
        {Array.from(data.rankine, (f) => f.label).map((key, i) => (
          <FormulaBlock
            key={key}
            label={data.rankine[i].label}
            formula={data.rankine[i].formula}
            note={data.rankine[i].note}
          />
        ))}
      </div>
      <div>
        <SectionHeading>Coulomb Method</SectionHeading>
        {Array.from(data.coulomb, (f) => f.label).map((key, i) => (
          <FormulaBlock
            key={key}
            label={data.coulomb[i].label}
            formula={data.coulomb[i].formula}
            note={data.coulomb[i].note}
          />
        ))}
      </div>
      <div>
        <SectionHeading>Design Notes</SectionHeading>
        <ProseSection text={data.notes} />
      </div>
    </div>
  );
}

const FEM_SOFTWARE_COLS: ColumnDef<{
  tool: string;
  type: string;
  application: string;
}>[] = [
  { key: "tool", header: "Software", mono: true },
  { key: "type", header: "Type" },
  { key: "application", header: "Application" },
];

function FemTab({ data }: { data: TabData["fem"] }) {
  return (
    <div className="space-y-5">
      <div>
        <SectionHeading>Numerical Analysis Approach</SectionHeading>
        <ProseSection text={data.approach} />
      </div>
      <div>
        <SectionHeading>Mesh & Model Parameters</SectionHeading>
        <UseCaseList items={data.meshParams} />
      </div>
      <div>
        <SectionHeading>Recommended Software Tools</SectionHeading>
        <TechTable
          columns={FEM_SOFTWARE_COLS}
          data={data.software}
          keyField="tool"
        />
      </div>
    </div>
  );
}

const SENSITIVITY_COLS: ColumnDef<{
  parameter: string;
  change: string;
  deflection: string;
  moment: string;
  shear: string;
}>[] = [
  { key: "parameter", header: "Input Parameter", mono: true },
  { key: "change", header: "Change", mono: true, align: "center" },
  { key: "deflection", header: "Wall Deflection", mono: true, align: "right" },
  { key: "moment", header: "Bending Moment", mono: true, align: "right" },
  { key: "shear", header: "Shear Force", mono: true, align: "right" },
];

function ParameterEffectsTab({ data }: { data: TabData["parameterEffects"] }) {
  return (
    <div className="space-y-5">
      <div>
        <SectionHeading>
          Sensitivity Analysis (±20% input variation)
        </SectionHeading>
        <p className="text-xs text-muted-foreground mb-3">
          Effect on wall performance metrics when each input parameter varies
          independently by ±20% from design baseline.
        </p>
        <TechTable
          columns={SENSITIVITY_COLS}
          data={data.sensitivity}
          keyField="parameter"
        />
      </div>
      <div>
        <SectionHeading>Key Observations</SectionHeading>
        <UseCaseList items={data.observations} />
      </div>
    </div>
  );
}

const SAFETY_COLS: ColumnDef<{
  checkType: string;
  minFS: string;
  basis: string;
}>[] = [
  { key: "checkType", header: "Check Type", mono: true },
  { key: "minFS", header: "Min FS", mono: true, align: "center" },
  { key: "basis", header: "Code Basis" },
];

function DesignTab({ data }: { data: TabData["design"] }) {
  return (
    <div className="space-y-5">
      <div>
        <SectionHeading>Sizing Guidelines</SectionHeading>
        <ProseSection text={data.guidelines} />
      </div>
      <div>
        <SectionHeading>Safety Factors</SectionHeading>
        <TechTable
          columns={SAFETY_COLS}
          data={data.safetyFactors}
          keyField="checkType"
        />
      </div>
      <div>
        <SectionHeading>Design Procedure</SectionHeading>
        <StepList steps={data.steps} />
      </div>
    </div>
  );
}

const CASE_COLS: ColumnDef<{
  project: string;
  location: string;
  dimensions: string;
  soilType: string;
  outcome: string;
}>[] = [
  { key: "project", header: "Project", mono: true },
  { key: "location", header: "Location" },
  { key: "dimensions", header: "Wall Dimensions", mono: true, align: "center" },
  { key: "soilType", header: "Soil Type" },
  { key: "outcome", header: "Outcome / Result" },
];

function CaseStudiesTab({ data }: { data: TabData["caseStudies"] }) {
  return (
    <div className="space-y-5">
      <div>
        <SectionHeading>Published Case Studies</SectionHeading>
        <TechTable columns={CASE_COLS} data={data.cases} keyField="project" />
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────

export default function SystemDetail() {
  const { systemId } = useParams({ from: "/systems/$systemId" });
  const [activeTab, setActiveTab] = useState<SystemTab>("basic");

  const system = SYSTEMS.find((s) => s.id === systemId);
  const richData = SYSTEM_DETAILS_RICH.get(systemId);

  const currentIdx = SYSTEM_IDS.indexOf(
    systemId as (typeof SYSTEM_IDS)[number],
  );
  const prevId = currentIdx > 0 ? SYSTEM_IDS[currentIdx - 1] : null;
  const nextId =
    currentIdx < SYSTEM_IDS.length - 1 ? SYSTEM_IDS[currentIdx + 1] : null;
  const prevSystem = prevId ? SYSTEMS.find((s) => s.id === prevId) : null;
  const nextSystem = nextId ? SYSTEMS.find((s) => s.id === nextId) : null;

  const WALL_TYPE_LABELS: Record<string, string> = {
    "soldier-pile": "H-Pile / Lagging",
    "secant-pile": "Interlocked Bored Piles",
    "sheet-pile": "Driven Interlocked Sheet",
    "tangent-pile": "Tangent Bored Piles",
    micropile: "Drilled & Grouted",
    "diaphragm-wall": "In-Situ RC Slurry Wall",
  };

  return (
    <div className="min-h-full flex flex-col">
      {/* Page header */}
      <div className="border-b border-border/40 bg-card px-6 py-5">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 mb-3 font-mono text-xs text-muted-foreground">
          <Link
            to="/"
            className="hover:text-foreground transition-colors"
            data-ocid="breadcrumb.home.link"
          >
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary">{system?.name ?? systemId}</span>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <h1 className="font-display text-2xl font-bold text-foreground">
                {system?.name ?? systemId}
              </h1>
              <Badge
                variant="outline"
                className="font-mono text-[10px] text-primary border-primary/30 uppercase tracking-wider"
              >
                {WALL_TYPE_LABELS[systemId] ?? "Wall System"}
              </Badge>
            </div>
            {system?.description && (
              <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                {system.description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border/40 bg-card/60 px-6 overflow-x-auto sticky top-0 z-10">
        <div className="flex gap-0 min-w-max">
          {SYSTEM_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              data-ocid={`system.tab.${tab.id}`}
              className={cn(
                "px-4 py-3 font-mono text-[11px] uppercase tracking-wider whitespace-nowrap transition-colors border-b-2 -mb-px",
                activeTab === tab.id
                  ? "text-primary border-primary bg-primary/5"
                  : "text-muted-foreground border-transparent hover:text-foreground hover:border-border/60",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 max-w-4xl">
        {!richData ? (
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-32 w-full mt-4" />
          </div>
        ) : (
          <div data-ocid={`system.${activeTab}.panel`}>
            {activeTab === "basic" && <BasicTab data={richData.basic} />}
            {activeTab === "components" && (
              <ComponentsTab data={richData.components} />
            )}
            {activeTab === "soil" && <SoilTab data={richData.soil} />}
            {activeTab === "earth-pressure" && (
              <EarthPressureTab data={richData.earthPressure} />
            )}
            {activeTab === "fem" && <FemTab data={richData.fem} />}
            {activeTab === "parameter-effects" && (
              <ParameterEffectsTab data={richData.parameterEffects} />
            )}
            {activeTab === "design" && <DesignTab data={richData.design} />}
            {activeTab === "case-studies" && (
              <CaseStudiesTab data={richData.caseStudies} />
            )}
          </div>
        )}
      </div>

      {/* Prev / Next navigation */}
      <div className="border-t border-border/40 bg-card/40 px-6 py-4 mt-auto">
        <div className="flex items-center justify-between gap-4">
          {prevSystem ? (
            <Link
              to="/systems/$systemId"
              params={{ systemId: prevId! }}
              data-ocid="system.prev.link"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>
                <span className="block font-mono text-[10px] text-muted-foreground/60 uppercase tracking-wider">
                  Previous
                </span>
                <span className="font-medium">{prevSystem.name}</span>
              </span>
            </Link>
          ) : (
            <div />
          )}
          {nextSystem ? (
            <Link
              to="/systems/$systemId"
              params={{ systemId: nextId! }}
              data-ocid="system.next.link"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group text-right"
            >
              <span>
                <span className="block font-mono text-[10px] text-muted-foreground/60 uppercase tracking-wider">
                  Next
                </span>
                <span className="font-medium">{nextSystem.name}</span>
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

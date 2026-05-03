import { SystemCard } from "@/components/SystemCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetSystems } from "@/lib/api";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Database,
  Drill,
  GitCompareArrows,
  Layers,
  Star,
} from "lucide-react";

const ABOUT_POINTS = [
  {
    icon: Database,
    label: "Technical database",
    text: "Soil parameters, earth pressure formulas, FEM data, and design procedures for every system — in one reference.",
  },
  {
    icon: GitCompareArrows,
    label: "Comparative analysis",
    text: "Side-by-side quantitative comparison of cost, deflection, water control, installation time, and maximum wall height.",
  },
  {
    icon: Layers,
    label: "Geotechnical scope",
    text: "Covers soldier pile, secant pile, sheet pile, tangent pile, micropile, and diaphragm wall systems to EC7 / AASHTO / FHWA standards.",
  },
  {
    icon: BrainCircuit,
    label: "Future ML integration",
    text: "Dataset architecture designed for supervised learning — predict optimal system selection from geotechnical site parameters.",
  },
];

const NAV_SECTIONS = [
  {
    to: "/comparison",
    icon: GitCompareArrows,
    title: "Comparison Dashboard",
    desc: "Quantitative comparison table, performance charts, and engineering insights for all 6 systems.",
    featured: true,
  },
  {
    to: "/research",
    icon: BookOpen,
    title: "Research Papers",
    desc: "Indexed academic papers with method, key parameters, and category mapping.",
    featured: false,
  },
  {
    to: "/ml",
    icon: BrainCircuit,
    title: "ML Roadmap",
    desc: "Dataset structure, model concept, and future automation scope for system selection.",
    featured: false,
  },
];

export default function Home() {
  const { data: systems = [], isLoading } = useGetSystems();

  return (
    <div className="min-h-full">
      {/* ── Hero ── */}
      <section
        id="hero"
        className="border-b border-border/40 bg-card px-6 py-12"
        data-ocid="home.hero.section"
      >
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <Drill className="w-4 h-4 text-primary" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary/80">
              Geotechnical Reference · Underground Excavation
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground mb-1">
            Excavation
            <span className="text-primary">DB</span>
          </h1>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Underground Retaining Wall Systems Reference
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-6">
            A structured technical database for deep excavation retaining
            systems used in geotechnical and underground construction
            engineering. Covers design parameters, earth pressure analysis, FEM
            benchmarks, and real-world case studies across six wall typologies —
            built for engineers, researchers, and ML-driven decision tools.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              variant="default"
              size="sm"
              data-ocid="home.comparison.primary_button"
            >
              <Link to="/comparison">
                <GitCompareArrows className="w-4 h-4 mr-1.5" />
                Comparison Dashboard
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              data-ocid="home.systems.secondary_button"
            >
              <a href="#systems">
                <Layers className="w-4 h-4 mr-1.5" />
                Browse Systems
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              data-ocid="home.research.secondary_button"
            >
              <Link to="/research">
                <BookOpen className="w-4 h-4 mr-1.5" />
                Research Papers
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Systems Overview ── */}
      <section
        id="systems"
        className="px-6 py-8 bg-background"
        data-ocid="home.systems.section"
      >
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="font-display font-semibold text-base text-foreground">
              Excavation Systems
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Select a system to view soil parameters, earth pressure, FEM
              benchmarks, and design procedures
            </p>
          </div>
          <Badge
            variant="outline"
            className="font-mono text-xs text-primary border-primary/30"
          >
            {systems.length} systems
          </Badge>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {Array.from({ length: 6 }, (_, i) => `sk-sys-${i}`).map((key) => (
              <Skeleton key={key} className="h-36" />
            ))}
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            data-ocid="systems.list"
          >
            {systems.map((system, i) => (
              <SystemCard key={system.id} system={system} index={i} />
            ))}
          </div>
        )}
      </section>

      <Separator className="opacity-40" />

      {/* ── About ── */}
      <section
        id="about"
        className="px-6 py-8 bg-muted/20"
        data-ocid="home.about.section"
      >
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-1">
            <h2 className="font-display font-semibold text-base text-foreground">
              About this project
            </h2>
          </div>
          <p className="text-xs text-muted-foreground mb-6">
            Scope, purpose, and design philosophy
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
            ExcavationDB consolidates the fragmented technical knowledge of deep
            excavation retaining systems into a single structured reference.
            Each wall typology is documented from first-principles soil
            mechanics through construction components, classical and numerical
            earth pressure methods, FEM benchmarks, and verified case studies —
            all indexed to EC7, AASHTO LRFD, and FHWA design standards. The
            dataset is also structured to support future supervised machine
            learning models that predict optimal system selection based on site
            geotechnical input parameters.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ABOUT_POINTS.map((pt) => (
              <div
                key={pt.label}
                className="flex gap-3 p-3 rounded-md border border-border/30 bg-card"
              >
                <div className="mt-0.5 shrink-0">
                  <pt.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-primary/80 mb-0.5">
                    {pt.label}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {pt.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ── Reference Sections Nav ── */}
      <section
        id="sections"
        className="px-6 py-8 bg-background"
        data-ocid="home.sections.section"
      >
        <h2 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
          Reference Sections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {NAV_SECTIONS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              data-ocid={`home.section.${item.to.replace("/", "")}.link`}
              className="group relative p-4 rounded-md border bg-card transition-all duration-200 hover:border-primary/40 hover:shadow-tech"
              style={{
                borderColor: item.featured
                  ? "oklch(var(--primary) / 0.35)"
                  : undefined,
              }}
            >
              {item.featured && (
                <div className="absolute top-2 right-2">
                  <Badge
                    variant="outline"
                    className="text-[9px] font-mono uppercase tracking-wider text-accent border-accent/40 bg-accent/10 px-1.5 py-0"
                  >
                    <Star className="w-2.5 h-2.5 mr-0.5 fill-current" />
                    Featured
                  </Badge>
                </div>
              )}
              <item.icon className="w-5 h-5 text-primary mb-2" />
              <h3 className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-2 flex items-center gap-1 text-xs text-primary/60 group-hover:text-primary transition-colors">
                <span className="font-mono">Open</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ── Footer ── */}
      <footer
        className="px-6 py-6 bg-card border-t border-border/40"
        data-ocid="home.footer.section"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Drill className="w-3.5 h-3.5 text-primary" />
              <span className="font-display font-semibold text-sm text-foreground">
                Excavation<span className="text-primary">DB</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Underground retaining wall systems · 6 wall types · EC7 · AASHTO ·
              FHWA
            </p>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-1">
            <div className="flex items-center gap-1.5">
              <Star className="w-3 h-3 text-accent fill-current" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                Featured tool
              </span>
            </div>
            <Link
              to="/comparison"
              className="font-display text-xs font-medium text-primary hover:underline flex items-center gap-1"
              data-ocid="home.footer.comparison_link"
            >
              Comparison Dashboard →
            </Link>
            <p className="text-[10px] text-muted-foreground">
              Charts · filters · insights · earth pressure comparison
            </p>
          </div>
        </div>

        <Separator className="my-4 opacity-30" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-[11px] text-muted-foreground font-mono">
            © {new Date().getFullYear()} ExcavationDB — Geotechnical Reference
            System
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-muted-foreground hover:text-foreground transition-colors font-mono"
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </footer>
    </div>
  );
}

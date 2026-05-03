import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  BrainCircuit,
  ChevronDown,
  Drill,
  GitCompareArrows,
  Layers,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const SYSTEMS_NAV = [
  { id: "soldier-pile", label: "Soldier Pile Wall" },
  { id: "secant-pile", label: "Secant Pile Wall" },
  { id: "sheet-pile", label: "Sheet Pile Wall" },
  { id: "tangent-pile", label: "Tangent Pile Wall" },
  { id: "micropile", label: "Micropile Wall" },
  { id: "diaphragm-wall", label: "Diaphragm Wall" },
];

const TOP_NAV = [
  { path: "/", label: "Home", icon: LayoutDashboard },
  { path: "/comparison", label: "Comparison", icon: GitCompareArrows },
  { path: "/research", label: "Research", icon: BookOpen },
  { path: "/ml", label: "ML Roadmap", icon: BrainCircuit },
];

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const [systemsOpen, setSystemsOpen] = useState(
    currentPath.startsWith("/systems"),
  );

  const isActive = (path: string) =>
    path === "/" ? currentPath === "/" : currentPath.startsWith(path);

  return (
    <nav className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-4 py-5 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-sm bg-primary/20 border border-primary/40 flex items-center justify-center">
          <Drill className="w-4 h-4 text-primary" />
        </div>
        <div>
          <p className="font-display text-xs font-semibold tracking-widest uppercase text-primary">
            GeoTech
          </p>
          <p className="font-mono text-[10px] text-muted-foreground leading-none">
            Excavation Ref
          </p>
        </div>
      </div>

      <Separator className="mx-4 w-auto" />

      <div className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
        {/* Home */}
        {TOP_NAV.slice(0, 1).map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={onNavigate}
            data-ocid={`nav.${item.label.toLowerCase().replace(/ /g, "-")}.link`}
            className={cn(
              "flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors duration-150",
              isActive(item.path)
                ? "bg-primary/15 text-primary font-medium border-l-2 border-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
            )}
          >
            <item.icon className="w-4 h-4 shrink-0" />
            <span>{item.label}</span>
          </Link>
        ))}

        {/* Systems accordion */}
        <div>
          <button
            type="button"
            onClick={() => setSystemsOpen((v) => !v)}
            data-ocid="nav.systems.toggle"
            className={cn(
              "w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors duration-150",
              currentPath.startsWith("/systems")
                ? "bg-primary/15 text-primary font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
            )}
          >
            <Layers className="w-4 h-4 shrink-0" />
            <span className="flex-1 text-left">Systems</span>
            <ChevronDown
              className={cn(
                "w-3.5 h-3.5 transition-transform duration-200",
                systemsOpen && "rotate-180",
              )}
            />
          </button>

          {systemsOpen && (
            <div className="ml-6 mt-0.5 space-y-0.5 border-l border-border/50 pl-3">
              {SYSTEMS_NAV.map((sys) => (
                <Link
                  key={sys.id}
                  to="/systems/$systemId"
                  params={{ systemId: sys.id }}
                  onClick={onNavigate}
                  data-ocid={`nav.system.${sys.id}.link`}
                  className={cn(
                    "block px-2 py-1.5 rounded-sm text-xs transition-colors duration-150",
                    currentPath === `/systems/${sys.id}`
                      ? "text-primary font-medium bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/40",
                  )}
                >
                  {sys.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Other top nav items */}
        {TOP_NAV.slice(1).map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={onNavigate}
            data-ocid={`nav.${item.label.toLowerCase().replace(/ /g, "-")}.link`}
            className={cn(
              "flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors duration-150",
              isActive(item.path)
                ? "bg-primary/15 text-primary font-medium border-l-2 border-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
            )}
          >
            <item.icon className="w-4 h-4 shrink-0" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-border/50">
        <p className="text-[10px] font-mono text-muted-foreground/60 leading-relaxed">
          © {new Date().getFullYear()} Built with{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary/60 hover:text-primary transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </nav>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-56 shrink-0 flex-col border-r border-border/50 bg-card shadow-subtle">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="fixed top-3 left-3 z-50 md:hidden"
            data-ocid="nav.mobile.menu_button"
          >
            <Menu className="w-5 h-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-56 p-0 bg-card border-r border-border/50"
        >
          <SidebarContent onNavigate={() => setMobileOpen(false)} />
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto bg-background">{children}</main>
    </div>
  );
}

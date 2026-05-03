import { Layout } from "@/components/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("@/pages/Home"));
const SystemDetailPage = lazy(() => import("@/pages/SystemDetail"));
const ComparisonPage = lazy(() => import("@/pages/Comparison"));
const ResearchPage = lazy(() => import("@/pages/Research"));
const MLPage = lazy(() => import("@/pages/ML"));

function PageFallback() {
  return (
    <div className="p-6 space-y-4">
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense fallback={<PageFallback />}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageFallback />}>
      <HomePage />
    </Suspense>
  ),
});

const systemDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/systems/$systemId",
  component: () => (
    <Suspense fallback={<PageFallback />}>
      <SystemDetailPage />
    </Suspense>
  ),
});

const comparisonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/comparison",
  component: () => (
    <Suspense fallback={<PageFallback />}>
      <ComparisonPage />
    </Suspense>
  ),
});

const researchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/research",
  component: () => (
    <Suspense fallback={<PageFallback />}>
      <ResearchPage />
    </Suspense>
  ),
});

const mlRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ml",
  component: () => (
    <Suspense fallback={<PageFallback />}>
      <MLPage />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  systemDetailRoute,
  comparisonRoute,
  researchRoute,
  mlRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}

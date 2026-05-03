import { createActor } from "@/backend";
import {
  COMPARISON_METRICS,
  RESEARCH_PAPERS,
  SYSTEMS,
  SYSTEM_DETAILS,
} from "@/lib/data";
import type {
  ComparisonMetric,
  ExcavationSystem,
  ResearchPaper,
  SystemDetail,
} from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Query key factory
export const queryKeys = {
  systems: ["systems"] as const,
  systemDetail: (id: string, tab: string) => ["systemDetail", id, tab] as const,
  metrics: ["metrics"] as const,
  papers: ["papers"] as const,
  papersByCategory: (category: string) =>
    ["papers", "category", category] as const,
};

export function useGetSystems() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<ExcavationSystem[]>({
    queryKey: queryKeys.systems,
    queryFn: async () => {
      if (!actor) return SYSTEMS;
      try {
        const result = await actor.getSystems();
        return result.length > 0 ? result : SYSTEMS;
      } catch {
        return SYSTEMS;
      }
    },
    enabled: !isFetching,
    staleTime: 5 * 60 * 1000,
    placeholderData: SYSTEMS,
  });
}

export function useGetSystemDetail(systemId: string, tab: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<SystemDetail | null>({
    queryKey: queryKeys.systemDetail(systemId, tab),
    queryFn: async () => {
      if (!actor) {
        return (
          SYSTEM_DETAILS.find(
            (d) => d.systemId === systemId && d.tabName === tab,
          ) ?? null
        );
      }
      try {
        const result = await actor.getSystemDetail(systemId, tab);
        if (result) return result;
        return (
          SYSTEM_DETAILS.find(
            (d) => d.systemId === systemId && d.tabName === tab,
          ) ?? null
        );
      } catch {
        return (
          SYSTEM_DETAILS.find(
            (d) => d.systemId === systemId && d.tabName === tab,
          ) ?? null
        );
      }
    },
    enabled: !isFetching && !!systemId && !!tab,
    staleTime: 10 * 60 * 1000,
  });
}

export function useGetAllMetrics() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<ComparisonMetric[]>({
    queryKey: queryKeys.metrics,
    queryFn: async () => {
      if (!actor) return COMPARISON_METRICS;
      try {
        const result = await actor.getAllMetrics();
        return result.length > 0 ? result : COMPARISON_METRICS;
      } catch {
        return COMPARISON_METRICS;
      }
    },
    enabled: !isFetching,
    staleTime: 5 * 60 * 1000,
    placeholderData: COMPARISON_METRICS,
  });
}

export function useGetPapers() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<ResearchPaper[]>({
    queryKey: queryKeys.papers,
    queryFn: async () => {
      if (!actor) return RESEARCH_PAPERS;
      try {
        const result = await actor.getPapers();
        return result.length > 0
          ? (result as ResearchPaper[])
          : RESEARCH_PAPERS;
      } catch {
        return RESEARCH_PAPERS;
      }
    },
    enabled: !isFetching,
    staleTime: 5 * 60 * 1000,
    placeholderData: RESEARCH_PAPERS,
  });
}

export function useGetPapersByCategory(category: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<ResearchPaper[]>({
    queryKey: queryKeys.papersByCategory(category),
    queryFn: async () => {
      if (!actor) {
        return RESEARCH_PAPERS.filter((p) => p.categories.includes(category));
      }
      try {
        const result = await actor.getPapersByCategory(category);
        return result.length > 0
          ? (result as ResearchPaper[])
          : RESEARCH_PAPERS.filter((p) => p.categories.includes(category));
      } catch {
        return RESEARCH_PAPERS.filter((p) => p.categories.includes(category));
      }
    },
    enabled: !isFetching && !!category,
    staleTime: 5 * 60 * 1000,
  });
}

// Re-export for convenience
export { useQueryClient, useMutation };

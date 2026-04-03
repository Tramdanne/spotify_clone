"use client";

import { useEffect, useState } from "react";

import { getHomePageData } from "@/lib/data/home";
import type { ArtistProfile, BrowseTrack } from "@/types/home";

type HomePageData = {
  trendingTracks: BrowseTrack[];
  popularArtists: ArtistProfile[];
};

type UseHomePageDataResult = {
  data: HomePageData | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
};

export function useHomePageData(): UseHomePageDataResult {
  const [data, setData] = useState<HomePageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshIndex, setRefreshIndex] = useState(0);

  useEffect(() => {
    let isActive = true;

    async function loadHomePageData() {
      try {
        setIsLoading(true);
        setError(null);

        const nextData = await getHomePageData();

        if (isActive) {
          setData(nextData);
        }
      } catch (cause) {
        if (isActive) {
          setError(
            cause instanceof Error ? cause.message : "Failed to load home data",
          );
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    }

    void loadHomePageData();

    return () => {
      isActive = false;
    };
  }, [refreshIndex]);

  return {
    data,
    isLoading,
    error,
    refetch: () => setRefreshIndex((value) => value + 1),
  };
}

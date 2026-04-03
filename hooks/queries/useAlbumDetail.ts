"use client";

import { useEffect, useState } from "react";

import { getAlbumDetailByRouteKey } from "@/lib/data/album-details";
import type { AlbumDetail } from "@/types/album";

type UseAlbumDetailResult = {
  data: AlbumDetail | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
};

export function useAlbumDetail(routeKey: string): UseAlbumDetailResult {
  const [data, setData] = useState<AlbumDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshIndex, setRefreshIndex] = useState(0);

  useEffect(() => {
    let isActive = true;

    async function loadAlbumDetail() {
      try {
        setIsLoading(true);
        setError(null);

        const nextData = await getAlbumDetailByRouteKey(routeKey);

        if (isActive) {
          if (!nextData) {
            setData(null);
            setError("Album not found");
            return;
          }

          setData(nextData);
        }
      } catch (cause) {
        if (isActive) {
          setError(
            cause instanceof Error
              ? cause.message
              : "Failed to load album detail",
          );
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    }

    void loadAlbumDetail();

    return () => {
      isActive = false;
    };
  }, [routeKey, refreshIndex]);

  return {
    data,
    isLoading,
    error,
    refetch: () => setRefreshIndex((value) => value + 1),
  };
}

import { useQuery } from "@tanstack/react-query";

import staticConfig from "@/config/wedding.json";
import { apiGet } from "@/lib/api";
import type { WeddingConfig } from "@/types/wedding";

// Uses the backend (/api/config) when it is running, and otherwise falls back to
// the bundled copy in src/config/wedding.json so the site also works on static
// hosts (GitHub Pages, Netlify, Vercel) with no server.
async function loadConfig(): Promise<WeddingConfig> {
  try {
    return await apiGet<WeddingConfig>("/api/config");
  } catch {
    return staticConfig as WeddingConfig;
  }
}

export function useWeddingConfig() {
  return useQuery({
    queryKey: ["wedding-config"],
    queryFn: loadConfig,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: false,
  });
}

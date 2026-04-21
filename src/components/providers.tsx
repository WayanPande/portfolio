import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

if (typeof window !== "undefined" && import.meta.env.MODE !== "development") {
  posthog.init((import.meta.env.VITE_POSTHOG_KEY as string) || "fallback", {
    api_host: (import.meta.env.VITE_POSTHOG_HOST as string) || "https://app.posthog.com",
    // Optional: Disable automatic pageview capture if you want to manually track page views
    // capture_pageview: false,
  });
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    if (location) {
      posthog.capture("$pageview", {
        $current_url: location.href,
      });
    }
  }, [location]);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}

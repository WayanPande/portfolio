"use client";

import { Button } from "./ui/button";
import posthog from "posthog-js";
import React from "react"; // Ensure React is imported

interface SocialLinkButtonProps {
  name: string;
  url: string;
  icon: React.ElementType; // Use React.ElementType for component types
}

export function SocialLinkButton({ name, url, icon: Icon }: SocialLinkButtonProps) {
  return (
    <Button
      key={name}
      className="size-8"
      variant="outline"
      size="icon"
      asChild
    >
      <a
        href={url}
        target="_blank"
        onClick={() => {
          posthog.capture("social_link_clicked", {
            social_platform: name,
          });
        }}
      >
        <Icon className="size-4" />
      </a>
    </Button>
  );
}
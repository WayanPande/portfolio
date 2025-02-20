import { cn } from "@/lib/utils";
import React from "react";

export interface BadgeProps extends React.ComponentProps<"section"> {}

export function Section({ className, ...props }: BadgeProps) {
  return (
    <section
      className={cn("flex min-h-0 flex-col gap-y-3", className)}
      {...props}
    />
  );
}

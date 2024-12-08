import Image from "next/image";
import React from "react";
import { Timeline, TimelineEntry } from "./timeline";

export const CarrierTimeline = () => {
  const data: TimelineEntry[] = [
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            My First ever job.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
};

export default CarrierTimeline;

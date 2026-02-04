"use client";

import Link from "next/link";
import { TypewriterEffectSmooth } from "./typewriter-effect";
import { Button } from "./ui/button";
import { HeroHighlight } from "./hero-highlight";
import posthog from "posthog-js";

export const ContactMeSection = () => {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "me.",
    },
  ];
  return (
    <section className="sm:pt-32 xl:pt-20">
      <HeroHighlight containerClassName="overflow-hidden rounded-3xl border hidden sm:flex">
        <div className="flex h-160 flex-col items-center justify-center">
          <p className="text-xs text-neutral-600 sm:text-base dark:text-neutral-200">
            Let&apos;s talk about your project ideas.
          </p>
          <TypewriterEffectSmooth words={words} />
          <div className="flex flex-col space-y-4 space-x-0 md:flex-row md:space-y-0 md:space-x-4">
            <Link
              href={"mailto:yande554@gmail.com"}
              target="_blank"
              onClick={() => {
                posthog.capture("contact_me_clicked", {
                  contact_method: "email",
                });
              }}
            >
              <Button className="h-10 w-40 rounded-xl border border-transparent bg-black text-sm text-white dark:border-white">
                Contact me
              </Button>
            </Link>
          </div>
        </div>
      </HeroHighlight>
      <div className="flex h-160 flex-col items-center justify-center sm:hidden">
        <p className="text-xs text-neutral-600 sm:text-base dark:text-neutral-200">
          Let&apos;s talk about your project ideas.
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col space-y-4 space-x-0 md:flex-row md:space-y-0 md:space-x-4">
          <Link
            href={"mailto:yande554@gmail.com"}
            target="_blank"
            onClick={() => {
              posthog.capture("contact_me_clicked", {
                contact_method: "email",
              });
            }}
          >
            <Button className="h-10 w-40 rounded-xl border border-transparent bg-black text-sm text-white dark:border-white">
              Contact me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactMeSection;

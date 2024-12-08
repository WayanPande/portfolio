import Link from "next/link";
import { TypewriterEffectSmooth } from "./typewriter-effect";
import { Button } from "./ui/button";

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
    <div className="flex h-[40rem] flex-col items-center justify-center  ">
      <p className="text-xs text-neutral-600 dark:text-neutral-200 sm:text-base  ">
        Let&apos;s talk about your project ideas.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <Link href={"mailto:yande554@gmail.com"} target="_blank">
          <Button className="h-10 w-40 rounded-xl border border-transparent bg-black text-sm text-white dark:border-white">
            Contact me
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ContactMeSection;

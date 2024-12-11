import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { BackgroundLines } from "@/components/background-lines";
import ContactMeSection from "@/components/ContactMeSection";
import CarrierTimeline from "@/components/CarrierTimeline";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container min-h-svh pb-20">
      <BackgroundLines className="flex h-svh w-full flex-col items-center justify-center bg-transparent px-4">
        <h3 className="text-2xl lg:text-5xl">
          👋{" "}
          <span className="bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text font-bold tracking-tight text-transparent dark:from-neutral-600 dark:to-white">
            Hello there! I&apos;m,
          </span>
        </h3>
        <h2 className="relative z-20 bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text py-2 text-center font-sans text-2xl font-bold tracking-tight text-transparent dark:from-neutral-600 dark:to-white md:py-10 md:text-4xl lg:text-7xl">
          I Wayan Pande Putra Yudha
        </h2>
        <p className="mx-auto max-w-xl text-center text-sm text-neutral-700 dark:text-neutral-400 md:text-lg">
          I am a dedicated Front-End Developer with a strong foundation in
          creating efficient and user-friendly solutions.
        </p>
      </BackgroundLines>

      <CarrierTimeline />
      <ContactMeSection />
    </main>
  );
}

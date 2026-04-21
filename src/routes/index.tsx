import { createFileRoute } from '@tanstack/react-router'
import { RESUME_DATA } from "@/data/resume-data";
import { BackgroundLines } from "@/components/background-lines";
import ContactMeSection from "@/components/ContactMeSection";
import CarrierTimeline from "@/components/CarrierTimeline";
import { useEffect } from 'react';

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  useEffect(() => {
    document.title = `${RESUME_DATA.name} | ${RESUME_DATA.about}`;
    
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateMeta('description', RESUME_DATA.summary);
    updateMeta('og:title', `${RESUME_DATA.name} | ${RESUME_DATA.about}`, true);
    updateMeta('og:description', RESUME_DATA.summary, true);
    updateMeta('og:url', 'https://wayanpande.github.io/portfolio/', true);
    updateMeta('twitter:title', `${RESUME_DATA.name} | ${RESUME_DATA.about}`, true);
    updateMeta('twitter:description', RESUME_DATA.summary, true);
    updateMeta('twitter:url', 'https://wayanpande.github.io/portfolio/', true);
  }, []);

  return (
    <main className="container min-h-svh pb-20">
      <BackgroundLines className="flex h-svh w-full flex-col items-center justify-center bg-transparent px-4">
        <h3 className="text-2xl lg:text-5xl">
          👋{" "}
          <span className="bg-linear-to-b from-neutral-900 to-neutral-700 bg-clip-text font-bold tracking-tight text-transparent dark:from-neutral-600 dark:to-white">
            Hello there! I&apos;m,
          </span>
        </h3>
        <h2 className="relative z-20 bg-linear-to-b from-neutral-900 to-neutral-700 bg-clip-text py-2 text-center font-sans text-2xl font-bold tracking-tight text-transparent md:py-10 md:text-4xl lg:text-7xl dark:from-neutral-600 dark:to-white">
          I Wayan Pande Putra Yudha
        </h2>
        <p className="mx-auto max-w-xl text-center text-sm text-neutral-700 md:text-lg dark:text-neutral-400">
          I am a dedicated Front-End Developer with a strong foundation in
          creating efficient and user-friendly solutions.
        </p>
      </BackgroundLines>
      <CarrierTimeline />
      <ContactMeSection />
    </main>
  )
}

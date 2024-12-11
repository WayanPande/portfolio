import React from "react";
import { Timeline, TimelineEntry } from "./timeline";
import { Card, LayoutGrid } from "./image-grid";
import Ipos from "@/images/ipos-admin.webp";
import GianyarTourism from "@/images/gianyartourism.webp";
import AlamTirta from "@/images/alamtirta.webp";
import NgurahRai from "@/images/ngurahrai.webp";
import Mambal from "@/images/mambal.webp";
import Pcfx from "@/images/pcfx.webp";
import Kai from "@/images/kai.webp";
import Gary from "@/images/gary.webp";
import JakartaMenyala from "@/images/jakartamenyala.webp";
import AtixLandingPage from "@/images/atixlandingpage.webp";
import { AnimatedCardsDeck } from "./animated-cards-deck";

const MambalContent = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">Desa Mambal</p>
      <p className="text-base font-normal text-white">Project</p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Admin dashboard with reporting, population management, and
        correspondence functionalities
      </p>
    </div>
  );
};

const GianyarContent = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
        Gianyar Tourism
      </p>
      <p className="text-base font-normal text-white">Booking Web</p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Booking tickets for Gianyar Regency, with around 10 of the most popular
        tourist attractions in Gianyar Bali
      </p>
    </div>
  );
};
const AlamTirtaContent = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">Alam Tirta</p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Activity destination booking web & landing page for Alam Tirta, one of
        the most popular outdoor activity destinations in Bali
      </p>
    </div>
  );
};
const NgurahRaiContent = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
        Ngurah Rai Taxi
      </p>
      <p className="text-base font-normal text-white">
        Bali International Airport
      </p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        A real-time taxi management system using WebSockets, enabling the
        tracking and updating of all taxis on shift for the day
      </p>
    </div>
  );
};
const KaiContent = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">KAI Wisata</p>
      <p className="text-base font-normal text-white">Booking Web</p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        A booking web for Lawang Sewu & Museum Ambarawa, a popular tourist
        attraction in Central Java, Indonesia
      </p>
    </div>
  );
};

const cards2023: Card[] = [
  {
    id: "5c43e252-5823-4313-af9b-56f0af1c11f3",
    content: <MambalContent />,
    className: "col-span-1",
    thumbnail: Mambal.src,
  },
  {
    id: "06839c62-68d7-42d2-8c81-3321562d97ea",
    content: <GianyarContent />,
    className: "col-span-1",
    thumbnail: GianyarTourism.src,
  },
  {
    id: "2efd4ce3-f809-4c56-969e-8e513946b68d",
    content: <AlamTirtaContent />,
    className: "col-span-1",
    thumbnail: AlamTirta.src,
  },
  {
    id: "859c43a7-d0eb-4795-849c-fbcdd08bd616",
    content: <NgurahRaiContent />,
    className: "col-span-1",
    thumbnail: NgurahRai.src,
  },
  {
    id: "12179c1a-b73d-4f0e-8a83-173ae26a33c7",
    content: <KaiContent />,
    className: "col-span-1",
    thumbnail: Kai.src,
  },
];

const testimonials = [
  {
    quote:
      "A admin dashboard for IPOS, a popular POS platform in Bali, Indonesia.",
    name: "IPOS Admin",
    designation: "",
    src: Ipos.src,
  },
  {
    quote:
      "A Landing Page for Global Forex Broker (PCX) based on Dubai, with a real time market data & multiple language support.",
    name: "Global Forex Broker (PCX)",
    designation: "Landing Page",
    src: Pcfx.src,
  },
  {
    quote: "A Property Management Landing Page for a startup in Indonesia.",
    name: "Gary",
    designation: "Landing Page",
    src: Gary.src,
  },
  {
    quote:
      " A Campaign Landing Page for one of Governor of Jakarta Candidate Election 2024 in Indonesia.",
    name: "Jakarta Menyala",
    designation: "Landing Page",
    src: JakartaMenyala.src,
  },
  {
    quote:
      "A Landing Page for Atix.id, a popular e-ticketing platform in Bali, Indonesia.",
    name: "Atix.id",
    designation: "Landing Page",
    src: AtixLandingPage.src,
  },
];

export const CarrierTimeline = () => {
  const data: TimelineEntry[] = [
    {
      title: "2023",
      content: (
        <div>
          <h1 className="mb-8 text-xl font-normal text-neutral-800 dark:text-neutral-200">
            My first year as a Front-End Developer at Avatar Solution was an
            exciting journey of learning, growth, and collaboration. 🌟 I worked
            on diverse projects, built user-friendly interfaces, and tackled
            real-world challenges with an amazing team. 💻✨ It was a year
            filled with creativity, fun, and rewarding experiences! 🎉
          </h1>
          <h2 className="mb-8">
            Here are some of my favorite projects I worked on:
          </h2>
          <div className="h-[40rem] w-full">
            <LayoutGrid cards={cards2023} />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h1 className="mb-8 text-xl font-normal text-neutral-800 dark:text-neutral-200">
            My second year at Avatar Solution was all about stepping up and
            taking on more challenging projects. 💪 I honed my skills in
            creating seamless user experiences, tackled complex technical
            problems, and contributed to innovative solutions that made a real
            impact. 🌍🚀 Working alongside a fantastic team, I embraced new
            responsibilities, pushed boundaries, and celebrated big wins! 🏆✨
          </h1>
          <div className="h-[40rem] w-full">
            <AnimatedCardsDeck datas={testimonials} autoplay />
          </div>
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

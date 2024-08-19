import { ClevertechLogo, JojoMobileLogo, ParabolLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "I Wayan Pande Putra Yudha",
  initials: "WP",
  location: "Bali, Indonesia",
  locationLink: "https://www.google.com/maps/place/bali",
  about:
    "Experienced front-end developer with a strong background in Typescript, React, Next.js, and other modern web technologies. Passionate about building responsive and user-friendly web applications.",
  summary:
    "As a versatile professional, I mentor at Bangkit Academy, freelance as a Web App Developer, and work full-time as a Front-End Developer. With a strong background in Android app development, I bring a unique perspective to my freelance projects, transforming ideas into intuitive mobile applications. My expertise in Kotlin, Flutter, and Android Studio ensures the creation of visually appealing apps tailored to clients' needs. In my role as a Front-End Developer, I excel in crafting captivating user experiences through clean and efficient code. Proficient in HTML, CSS, and JavaScript/TypeScript, along with hands-on experience in frameworks like React and Svelte, I deliver dynamic and responsive web solutions that leave a lasting impact. Open to new challenges, I am eager for opportunities that foster both my development and mentoring skills. Feel free to reach out for exciting projects or ideas. Let's collaborate to make a meaningful impact in the tech world!",
  avatarUrl:
    "https://dicoding-web-img.sgp1.digitaloceanspaces.com/original/jobs/dos:togami123_photo_290723100028.jpg",
  personalWebsiteUrl: "",
  contact: {
    email: "yande554@gmail.com",
    tel: "6282121097752",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/WayanPande",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/wayanpande/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Udayana University",
      degree: "Bachelor's Degree in Computer Science",
      start: "2019",
      end: "2023",
    },
    {
      school: "Bangkit Academy 2022 by Google, GoTo, Traveloka",
      degree: "Android Learning Path",
      start: "Feb 2022",
      end: "Jul 2022",
    },
    {
      school: "Apple Academy",
      degree: "Foundation Program",
      start: "April 2023",
      end: "",
    },
  ],
  work: [
    {
      company: "Avatar Solutions",
      link: "https://www.avatarsolution.com/",
      badges: ["On Site"],
      title: "Front End Developer",
      logo: ParabolLogo,
      start: "Feb 2023",
      end: "Present",
      description:
        "Completed comprehensive IT solutions, including admin dashboards and real-time management systems. Integrated multiple payment gateways and maintained internal reporting tools. Established seamless integration with existing systems and increased operational efficiency. Accelerated CI/CD processes by 40% for some old projects.",
    },
    {
      company: "Bangkit Academy 2023 by Google, GoTo, Traveloka",
      link: "https://grow.google/intl/id_id/bangkit/?tab=machine-learning",
      badges: ["Remote"],
      title: "Android Learning Path Mentor",
      logo: ClevertechLogo,
      start: "Feb 2023",
      end: "Jul 2023",
      description:
        "Lead and assist a cohort of 25 cohorts in a class from the android learning path, through a weekly session, one-on-one and group consultations to address individual learning needs and provide feedback on projects.",
    },
    {
      company: "Freelance Developer",
      link: "#",
      badges: ["Remote"],
      title: "Android & Web Developer",
      logo: JojoMobileLogo,
      start: "Aug 2022",
      end: "Present",
      description:
        "Collaborated with clients to understand project requirements, scope, and deliverables. Develop and Integrated RESTful APIs and backend services to fetch and display dynamic content in apps.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "SvelteKit",
    "SolidJS",
    "Docker",
    "WebSocket",
    "PHP",
    "Laravel",
    "Git",
  ],
  projects: [
    {
      title: "Heal & Go",
      techStack: ["Final Project", "Android", "Kotlin"],
      description:
        "An application that recommend people a tourist destination in order to help those people to heal based on their preferences.",
      link: {
        label: "Heal & Go",
        href: "https://github.com/C22-PS165-Heal-Go",
      },
    },
    {
      title: "KatuturangSatwa",
      techStack: ["Freelance", "Dart", "Flutter"],
      description:
        "Android apps that used for users to read a traditional story book from Bali",
      link: {
        label: "github.com/katuturangsatwa-apps",
        href: "https://github.com/WayanPande/katuturangsatwa-apps",
      },
    },
    {
      title: "Ngurah Rai Taxi (Airport)",
      techStack: [
        "Next.js",
        "WebSocket",
        "Typescript",
        "Shadcn UI",
        "TailwindCSS",
        "Tanstack Query",
      ],
      description:
        "Admin dashboard with reporting and CRUD functionalities for drivers and cashiers. Implemented a real-time taxi management system using WebSockets, enabling the tracking and updating of all taxis on shift for the day",
    },
    {
      title: "Desa Mambal Project",
      techStack: [
        "Next.js",
        "Typescript",
        "Chakra UI",
        "TailwindCSS",
        "Tanstack Query",
      ],
      description:
        "Admin dashboard with reporting, population management, and correspondence functionalities",
    },
    {
      title: "Atix Booking",
      techStack: [
        "Next.js",
        "Javascript",
        "Chakra UI",
        "Framer Motion",
        "Xendit",
        "BPD Bali Payment",
      ],
      description:
        "Activity destination booking web with around 50 of the most popular activity destinations in Bali",
      link: {
        label: "Atix Bali",
        href: "https://atixbali.com/",
      },
    },
    {
      title: "Alam Tirta Booking",
      techStack: [
        "Next.js",
        "Javascript",
        "Shadcn UI",
        "Xendit",
        "TailwindCSS",
        "Tanstack Query",
      ],
      description:
        "Activity destination booking web for Alam Tirta, one of the most popular outdoor activity destinations in Bali",
      link: {
        label: "Alam Tirta",
        href: "https://alamtirta.com/",
      },
    },
    {
      title: "Gianyar Tourism Tickets",
      techStack: [
        "Svelte",
        "SvelteKit",
        "Typescript",
        "daisyUI",
        "Xendit",
        "TailwindCSS",
        "BPD Bali Payment",
      ],
      description:
        "Booking tickets for Gianyar Regency, with around 10 of the most popular tourist attractions in Gianyar Bali and collaborated with the local goverment",
      link: {
        label: "Gianyar Tourism Tickets",
        href: "https://gianyartourismticket.com",
      },
    },
    {
      title: "DGnius (Go Clinic)",
      techStack: [
        "Next.js",
        "Typescript",
        "Chakra UI",
        "TailwindCSS",
        "Tanstack Query",
      ],
      description:
        "Admin dashboard for a clinic frenchise in Indonesia with reporting, CRUD, and employee management functionalities",
    },
  ],
} as const;

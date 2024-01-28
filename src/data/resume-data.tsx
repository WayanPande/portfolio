import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "I Wayan Pande Putra Yudha",
  initials: "WP",
  location: "Bali, Indonesia",
  locationLink: "https://www.google.com/maps/place/bali",
  about:
    "Front End Developer committed to creating polished products with a keen eye for precision",
  summary:
    "As a versatile professional, I mentor at Bangkit Academy, freelance as a Web App Developer, and work full-time as a Front-End Developer. With a strong background in Android app development, I bring a unique perspective to my freelance projects, transforming ideas into intuitive mobile applications. My expertise in Kotlin, Flutter, and Android Studio ensures the creation of visually appealing apps tailored to clients' needs. In my role as a Front-End Developer, I excel in crafting captivating user experiences through clean and efficient code. Proficient in HTML, CSS, and JavaScript/TypeScript, along with hands-on experience in frameworks like React and Svelte, I deliver dynamic and responsive web solutions that leave a lasting impact. Open to new challenges, I am eager for opportunities that foster both my development and mentoring skills. Feel free to reach out for exciting projects or ideas. Let's collaborate to make a meaningful impact in the tech world!",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "yande554@gmail.com",
    tel: "+6282121097752",
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
      link: "https://parabol.co",
      badges: [],
      title: "Front End Developer",
      logo: ParabolLogo,
      start: "Feb 2023",
      end: "Present",
      description:
        "Legacy code maintenance by working with older codebases to fix issues, update designs, and optimize performance. Collaborated with cross-functional teams to implement responsive designs and front-end solutions for various client projects. Developed and maintained internal reusable front-end components using React.js, resulting in a more efficient development process.",
    },
    {
      company: "Bangkit Academy 2023 by Google, GoTo, Traveloka",
      link: "https://clevertech.biz",
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
      link: "https://bsgroup.eu/",
      badges: [],
      title: "Android & Web Developer",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
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
    "Git",
  ],
  projects: [
    {
      title: "Heal & Go",
      techStack: ["Final Project", "Android", "Kotlin"],
      description:
        "An application that recommend people a tourist destination in order to help those people to heal based on their preferences.",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://github.com/C22-PS165-Heal-Go",
      },
    },
    {
      title: "KatuturangSatwa",
      techStack: ["Freelance", "Dart", "Flutter"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;

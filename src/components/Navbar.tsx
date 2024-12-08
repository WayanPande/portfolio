import { BookText, Home } from "lucide-react";
import { FloatingNav } from "./floating-navbar";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "My CV",
    link: "/cv",
    icon: <BookText className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

const Navbar = () => {
  return <FloatingNav navItems={navItems} />;
};

export default Navbar;

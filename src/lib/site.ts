import { Github, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";

export const site = {
  name: "Logesh S",
  role: "Data Scientist",
  tagline: "I turn raw data into clear, actionable decisions.",
  email: "logeshds247@gmail.com",
  phone: "+91 88709 89882",
  phoneHref: "tel:+918870989882",
  location: "Hosur, Tamil Nadu, India",
};

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Logesh0247",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: Twitter,
  },
  {
    label: "YouTube",
    href: "#",
    icon: Youtube,
  },
  {
    label: "Instagram",
    href: "#",
    icon: Instagram,
  },
];

export const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/resume", label: "Resume" },
  { path: "/articles", label: "Articles" },
  { path: "/profiles", label: "Profiles" },
  { path: "/contact", label: "Contact" },
];

export const stats = {
  projects: "10+",
  technologies: "15+",
  yearsLearning: "3+",
  problemsSolved: "500+",
  articles: "10+",
  platforms: "6",
};

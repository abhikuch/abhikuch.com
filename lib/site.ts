import { identity, profiles } from "@/lib/facts";

export const site = {
  name: identity.name,
  short: "AK",
  place: identity.place,
  company: identity.githubCompany,
  githubBio: identity.githubBio,
  email: identity.email,
  github: profiles.github,
  x: profiles.x,
  cal: profiles.cal,
} as const;

export const nav = [
  { href: "/", index: "00", label: "Home" },
  { href: "/about", index: "01", label: "About" },
  { href: "/work", index: "02", label: "Work" },
  { href: "/writing", index: "03", label: "Writing" },
  { href: "/contact", index: "04", label: "Contact" },
] as const;

export type NavHref = (typeof nav)[number]["href"];

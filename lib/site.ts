export const site = {
  name: "Abhimanyu Kucheria",
  short: "AK",
  place: "Dubai",
  company: "Futurebits Tech",
  githubBio: "Building cool things at @Futurebits-Tech.",
  email: "abhi141997@gmail.com",
  github: {
    handle: "abhikuch",
    href: "https://github.com/abhikuch",
  },
  x: {
    handle: "@abhi_kucheria",
    href: "https://x.com/abhi_kucheria",
  },
} as const;

export const nav = [
  { href: "/", index: "00", label: "Home" },
  { href: "/about", index: "01", label: "About" },
  { href: "/work", index: "02", label: "Work" },
  { href: "/writing", index: "03", label: "Writing" },
  { href: "/contact", index: "04", label: "Contact" },
] as const;

export type NavHref = (typeof nav)[number]["href"];

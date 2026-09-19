export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "TechAssist",
  description: "24/7 expert technical support from certified technicians.",
}

export const brandInitials = siteConfig.name.slice(0, 1).toUpperCase()

export const navItems = [
  ["Home", "/"],
  ["Repair & Tech Services", "/support"],
  ["Schedule Support", "/schedule-repair"],
  ["Remote Support", "/remote-support"],
  ["Contact & Help", "/contact"],
] as const

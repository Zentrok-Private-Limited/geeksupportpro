import {
  Laptop,
  Smartphone,
  Tablet,
  Tv,
  Refrigerator,
  Home,
  Wifi,
  Printer,
  Gamepad2,
  ShieldCheck,
  Database,
  Car,
  Watch,
  Headphones,
  Camera,
  Wrench,
  Monitor,
  MessageCircle,
  CircleHelp,
  Building2,
  Network,
  Settings,
  Cloud,
  Lock,
  Server,
  HardDrive,
  HelpCircle,
} from "lucide-react";

export const devices = [
  ["computers", "Computers & Laptops", "Windows • Mac • PC", Laptop],
  ["phones", "Cell Phones", "iPhone • Samsung • Pixel", Smartphone],
  ["tablets", "Tablets & iPads", "Screen • Battery • iPad", Tablet],
  ["tv-mounting", "TV & Home Theater", "Mounting • Soundbars", Tv],
  ["appliances", "Major Appliances", "Fridge • Washer • Dryer", Refrigerator],
  ["smart-home", "Smart Home", "Cameras • Ring • Alexa", Home],
  ["wifi", "Wi-Fi & Networks", "Mesh • Routers • Speed", Wifi],
  ["printers", "Printers & Setup", "Wireless • Drivers • Setup", Printer],
  ["gaming", "Gaming Consoles", "PS5 • Xbox • Switch", Gamepad2],
  ["data-recovery", "Data Recovery", "HDD • SSD • Backup", Database],
  ["car-audio", "Car Electronics", "Dash Cams • Sound • GPS", Car],
  ["wearables", "Smart Watches", "Apple Watch • Galaxy • Sync", Watch],
  ["audio", "Audio & Headphones", "AirPods • Bose • Sound", Headphones],
  ["cameras", "Cameras & Drones", "DSLR • GoPro • DJI Care", Camera],
] as const;

export const services = [
  {
    slug: "workplace-it",
    title: "Workplace IT",
    description: "Business workstation and workplace assistance.",
    icon: Building2,
  },
  {
    slug: "network-services",
    title: "Network Services",
    description: "Business network setup and administration.",
    icon: Network,
  },
  {
    slug: "software-configuration",
    title: "Software Configuration",
    description: "Business software setup and configuration.",
    icon: Settings,
  },
  {
    slug: "cloud-email",
    title: "Cloud & Email",
    description: "Business cloud and email environments.",
    icon: Cloud,
  },
  {
    slug: "security-guidance",
    title: "Security Guidance",
    description: "Security configuration and best practices.",
    icon: Lock,
  },
  {
    slug: "system-administration",
    title: "System Administration",
    description: "Routine business system administration.",
    icon: Server,
  },
  {
    slug: "data-backup",
    title: "Data & Backup",
    description: "Business backup and data workflows.",
    icon: HardDrive,
  },
  {
    slug: "remote-it-services",
    title: "Remote IT Services",
    description: "Remote assistance for business environments.",
    icon: Monitor,
  },
  {
    slug: "it-maintenance",
    title: "IT Maintenance",
    description: "Scheduled maintenance for business systems.",
    icon: Wrench,
  },
  {
    slug: "it-consultation",
    title: "IT Consultation",
    description: "Technology planning for organizations.",
    icon: HelpCircle,
  },
];

export const faqs = [
  [
    "Do I need to have purchased my device from a specific store to get support?",
    "No. Certified technicians can help with all major brands, regardless of where you bought your device.",
  ],
  [
    "How do I check the status of my active repair?",
    "Use the support link in your confirmation email or connect with a live agent and share your service details.",
  ],
  [
    "How does Remote Tech Support work?",
    "Start a secure screen-share session with a certified technician. They will guide you through the fix and explain every step.",
  ],
  [
    "Are your technicians certified for Apple and other major brands?",
    "Yes. Our support team is trained across Apple, Samsung, Windows, smart home, networking, and other leading platforms.",
  ],
] as const;

export const supportOptions = [
  [
    "Schedule a Repair",
    "Book an in-store reservation at our service center or request home service.",
    "/schedule-repair",
    Wrench,
  ],
  [
    "24/7 Remote Support",
    "Connect with an agent online to troubleshoot computer and software issues immediately.",
    "/remote-support",
    Monitor,
  ],
  [
    "24/7 Live Chat",
    "Connect immediately with a live technician online to get answers.",
    "/remote-support",
    MessageCircle,
  ],
  [
    "Help & Contact",
    "Direct support directory, email inquiry form, and service hours.",
    "/contact",
    CircleHelp,
  ],
] as const;
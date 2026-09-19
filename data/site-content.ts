import { Laptop, Smartphone, Tablet, Tv, Refrigerator, Home, Wifi, Printer, Gamepad2, ShieldCheck, Database, Car, Watch, Headphones, Camera, Wrench, Monitor, MessageCircle, CircleHelp } from "lucide-react"

export const devices = [
  ["computers", "Computers & Laptops", "Windows • Mac • PC", Laptop], ["phones", "Cell Phones", "iPhone • Samsung • Pixel", Smartphone], ["tablets", "Tablets & iPads", "Screen • Battery • iPad", Tablet], ["tv-mounting", "TV & Home Theater", "Mounting • Soundbars", Tv], ["appliances", "Major Appliances", "Fridge • Washer • Dryer", Refrigerator], ["smart-home", "Smart Home", "Cameras • Ring • Alexa", Home], ["wifi", "Wi-Fi & Networks", "Mesh • Routers • Speed", Wifi], ["printers", "Printers & Setup", "Wireless • Drivers • Setup", Printer], ["gaming", "Gaming Consoles", "PS5 • Xbox • Switch", Gamepad2], ["virus-removal", "Virus & Security", "Spyware • Deep Clean", ShieldCheck], ["data-recovery", "Data Recovery", "HDD • SSD • Backup", Database], ["car-audio", "Car Electronics", "Dash Cams • Sound • GPS", Car], ["wearables", "Smart Watches", "Apple Watch • Galaxy • Sync", Watch], ["audio", "Audio & Headphones", "AirPods • Bose • Sound", Headphones], ["cameras", "Cameras & Drones", "DSLR • GoPro • DJI Care", Camera],
] as const

export const services = [
  { slug: "computer-diagnostics", title: "PC Diagnostics & Tune-up", description: "Boost boot speed, fix freezes, blue screens, and everyday computer issues with a clear diagnostic and practical tune-up.", icon: Wrench },
  { slug: "virus-removal", title: "Virus, Spyware & Pop-up Removal", description: "Deep-clean your device, remove unwanted software, and help keep threats away with secure remote support.", icon: ShieldCheck },
  { slug: "printer-setup", title: "Wireless Printer & Driver Setup", description: "Connect printers, install updated drivers, and get every computer in your home printing reliably.", icon: Printer },
  { slug: "wifi-optimization", title: "Wi-Fi & Mesh Network Optimization", description: "Improve coverage, router pairing, security, and speed across your home network.", icon: Wifi },
  { slug: "device-repair", title: "Apple & Samsung Device Repairs", description: "Get expert guidance for screen, battery, setup, and genuine-parts diagnostics across leading devices.", icon: Smartphone },
]

export const faqs = [
  ["Do I need to have purchased my device from a specific store to get support?", "No. Certified technicians can help with all major brands, regardless of where you bought your device."],
  ["How do I check the status of my active repair?", "Use the support link in your confirmation email or connect with a live agent and share your service details."],
  ["How does Remote Tech Support work?", "Start a secure screen-share session with a certified technician. They will guide you through the fix and explain every step."],
  ["Are your technicians certified for Apple and other major brands?", "Yes. Our support team is trained across Apple, Samsung, Windows, smart home, networking, and other leading platforms."],
  ["What happens during a scheduled appointment?", "A technician reviews the issue, provides a transparent estimate, completes the work, and performs a quality check before wrapping up."],
  ["Can you help with more than one device?", "Yes. We support computers, phones, tablets, printers, TVs, networks, smart home technology, gaming, and more."],
] as const

export const supportOptions = [
  ["Schedule a Repair", "Book an in-store reservation at our service center or request home service.", "/schedule-repair", Wrench],
  ["24/7 Remote Support", "Connect with an agent online to troubleshoot computer and software issues immediately.", "/remote-support", Monitor],
  ["24/7 Live Chat", "Connect immediately with a live technician online to get answers.", "/remote-support", MessageCircle],
  ["Help & Contact", "Direct support directory, email inquiry form, and service hours.", "/contact", CircleHelp],
] as const

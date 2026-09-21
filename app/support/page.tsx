import Link from "next/link";
import { PageFrame, PageHero } from "@/components/site-shell";
import { 
  Monitor, 
  ShieldAlert, 
  Smartphone, 
  Wifi, 
  Printer, 
  HardDrive, 
  Tv, 
  Wrench, 
  Mail, 
  Calendar, 
  MonitorUp, 
  MessageSquare, 
  ArrowRight,
  Check
} from "lucide-react";

export const metadata = { title: "Repair & Tech Services | Support Center" };

const coreServices = [
  {
    tag: "Remote / In-Store",
    title: "Computer Diagnostics & Tune-up",
    description: "Full hardware diagnostics, operating system reinstallation (Windows & Mac), slow PC optimization, and crashing resolution.",
    bullets: [
      "Blue screen & freeze troubleshooting",
      "Fast startup speed optimization",
      "SSD & RAM upgrade diagnostics",
    ],
    ctaText: "Get Remote Support",
    ctaHref: "/remote-support",
    icon: Monitor,
  },
  {
    tag: "Instant Fix",
    title: "Virus & Malware Removal",
    description: "Complete eradication of Trojans, spyware, annoying pop-up ads, browser hijackers, and malicious background programs.",
    bullets: [
      "Deep spyware & ransomware scan",
      "Malicious extension & adware cleanup",
      "Antivirus & firewall security setup",
    ],
    ctaText: "Start Virus Removal",
    ctaHref: "/remote-support",
    icon: ShieldAlert,
  },
  {
    tag: "Apple Authorized",
    title: "Apple & Samsung Repair",
    description: "Certified Apple & Samsung device repair center. Genuine parts, hardware diagnostics, screen and battery fixes.",
    bullets: [
      "iPhone & iPad screen & battery replacement",
      "Samsung Galaxy screen repairs",
      "iCloud & device data backup transfer",
    ],
    ctaText: "Get Device Support",
    ctaHref: "/remote-support",
    icon: Smartphone,
  },
  {
    tag: "Remote / In-Home",
    title: "Wi-Fi, Mesh & Smart Home Setup",
    description: "Whole-home Wi-Fi optimization, mesh router setup (eero, Orbi, Nest), smart cameras, Ring doorbells, and network encryption.",
    bullets: [
      "Mesh network router configuration",
      "Smart security camera connection",
      "Slow Wi-Fi speed & latency troubleshooting",
    ],
    ctaText: "Setup Wi-Fi Remotely",
    ctaHref: "/remote-support",
    icon: Wifi,
  },
  {
    tag: "Remote Connect",
    title: "Wireless Printers & Driver Setup",
    description: "Fix offline printer errors, install updated manufacturer drivers (HP, Canon, Epson, Brother), and configure wireless scanning utilities.",
    bullets: [
      "Printer Wi-Fi network pairing",
      "Print queue offline error fix",
      "Scan-to-computer setup",
    ],
    ctaText: "Fix Printer Remotely",
    ctaHref: "/remote-support",
    icon: Printer,
  },
  {
    tag: "Lab & Remote",
    title: "Data Recovery & Cloud Backup",
    description: "Assistance with recovering lost files, configuring automated cloud backup (OneDrive, Google Drive, iCloud), and external hard drive setup.",
    bullets: [
      "Lost file & document recovery triage",
      "Automated daily backup schedule",
      "New PC data migration transfer",
    ],
    ctaText: "Start Data Support",
    ctaHref: "/remote-support",
    icon: HardDrive,
  },
  {
    tag: "In-Home & Remote",
    title: "TV Mounting & Audio Setup",
    description: "Expert consultation for TV mounting (up to 98\"+), soundbar audio calibration, streaming app installation, and HDMI routing.",
    bullets: [
      "Smart TV streaming apps setup",
      "Soundbar & home theater tuning",
      "In-home technician dispatch scheduling",
    ],
    ctaText: "Get TV/Audio Support",
    ctaHref: "/remote-support",
    icon: Tv,
  },
  {
    tag: "Appliance Help",
    title: "Major Appliance Repair",
    description: "Diagnostic support and technician scheduling for refrigerators, washing machines, dryers, dishwashers, and ovens across all major brands.",
    bullets: [
      "Appliance error code diagnosis",
      "Factory-authorized parts verification",
      "In-home technician appointment booking",
    ],
    ctaText: "Get Appliance Support",
    ctaHref: "/schedule-repair",
    icon: Wrench,
  },
  {
    tag: "24/7 Live",
    title: "Email & Microsoft 365 Support",
    description: "Resolve email password synchronization errors, set up Microsoft 365 Office apps, configure cloud storage, and fix account logins.",
    bullets: [
      "Outlook, Apple Mail & Gmail setup",
      "Office license & app activation",
      "Account login & password recovery",
    ],
    ctaText: "Start Software Support",
    ctaHref: "/remote-support",
    icon: Mail,
  },
];

export default function SupportPage() {
  return (
    <PageFrame>
      {/* Hero Section matching ss129 */}
      <section className="bg-[#0754c7] px-5 py-14 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded bg-yellow-300 px-3 py-1 text-xs font-extrabold text-blue-950">
              ★ CERTIFIED SERVICES
            </div>
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Tech Support &amp; Repair Services
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base">
              Diagnostics, repairs, and technical setup for computers, phones, TVs, home networks, and appliances with genuine parts and certified technicians.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/schedule-repair"
              className="inline-flex items-center gap-2 rounded bg-yellow-300 px-5 py-3 text-sm font-bold text-blue-950 transition-opacity hover:opacity-90"
            >
              <Calendar className="size-4" /> Schedule a Repair
            </Link>
            <Link
              href="/remote-support"
              className="inline-flex items-center gap-2 rounded border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              <MonitorUp className="size-4" /> 24/7 Remote Help
            </Link>
          </div>
        </div>
      </section>

      {/* Core Support Capabilities Section */}
      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Our Core Support Capabilities
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Select any technical category below to receive instant remote assistance or service center diagnostics.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="grid size-11 place-items-center rounded-xl bg-blue-50 text-[#0754c7]">
                        <Icon className="size-5" />
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>

                    <div className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-xs text-slate-700 sm:text-sm">
                      {service.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 size-4 shrink-0 text-[#0754c7]" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      href={service.ctaHref}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#062b7b] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-900"
                    >
                      {service.ctaText} <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Action / Connect Strip from ss131 */}
      <section className="bg-slate-50 px-5. py-16 lg:px-8 border-t border-gray-200">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
          {/* Left Box: Live Agent Online */}
          <div className="flex flex-col justify-between rounded-2xl bg-[#062b7b] p-8 text-white lg:col-span-7">
            <div>
              <span className="mb-3 inline-block rounded bg-yellow-300 px-3 py-1 text-xs font-extrabold uppercase text-blue-950">
                INSTANT ONLINE FIX
              </span>
              <h3 className="text-2xl font-extrabold sm:text-3xl">
                Connect with a Live Agent Online
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-blue-100 sm:text-base">
                Resolve computer freezes, remove malware, install printer drivers, and configure software directly from your home.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/remote-support"
                className="inline-flex items-center gap-2 rounded bg-yellow-300 px-6 py-3 text-sm font-bold text-blue-950 transition-opacity hover:opacity-90"
              >
                Start Remote Session
              </Link>
              <Link
                href="/remote-support"
                className="inline-flex items-center gap-2 rounded border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                <MessageSquare className="size-4" /> Start 24/7 Chat
              </Link>
            </div>
          </div>

          {/* Right Box: Schedule Repair Appointment */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 text-slate-900 lg:col-span-5">
            <div>
              <span className="mb-3 inline-block rounded bg-blue-50 px-3 py-1 text-xs font-extrabold uppercase text-[#0754c7]">
                SERVICE RESERVATION
              </span>
              <h3 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
                Schedule a Repair Appointment
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Book an in-person diagnostic at our service center or request certified in-home technicians for TVs and major appliances.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/schedule-repair"
                className="inline-flex items-center gap-2 rounded-xl bg-[#062b7b] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-900"
              >
                Book Repair Appointment <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
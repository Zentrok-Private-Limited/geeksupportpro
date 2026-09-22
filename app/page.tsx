"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  CircleCheck,
  Menu,
  Search,
  X,
  Shield,
  MessageSquare,
} from "lucide-react";
import { devices, faqs, services, supportOptions } from "@/data/site-content";
import { brandInitials, navItems, siteConfig } from "@/lib/site-config";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="grid size-10 place-items-center rounded-xl bg-yellow-300 text-sm font-black text-blue-950">
        {brandInitials}
      </span>
      <span className="text-lg font-bold text-white">
        {siteConfig.name}
        <span className="text-yellow-300">.</span>
      </span>
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="bg-[#062b7b] px-4 py-2 text-center text-xs font-semibold text-white">
        <span className="text-yellow-300">24/7 LIVE SUPPORT:</span>
        <span className="mx-2 hidden sm:inline">
          Certified Tech Support Agents Online
        </span>
        <span className="mx-3 hidden sm:inline">|</span>
        <Link href="/remote-support">Start Live Chat</Link>
        <span className="mx-2">|</span>
        <Link href="/remote-support">Enter Session PIN</Link>
        <span className="mx-2">|</span>
        <Link href="/services">Tech Services</Link>
      </div>
      <header className="border-b border-blue-700 bg-[#0645b5] text-white shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-5 py-4 lg:px-8">
          <Logo />
          <form
            onSubmit={(event) => event.preventDefault()}
            className="order-3 flex w-full flex-1 lg:order-2 lg:mx-8 lg:w-auto"
          >
            <label className="sr-only" htmlFor="support-search">
              Search support
            </label>
            <div className="flex w-full overflow-hidden rounded-md bg-white">
              <input
                id="support-search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search support: Virus clean, PC speed, Printer setup, Email, Mac, Wi-Fi..."
                className="min-w-0 flex-1 px-4 py-3 text-sm text-slate-900 outline-none"
              />
              <button
                type="submit"
                aria-label="Search support"
                className="grid w-12 place-items-center bg-slate-100 text-slate-700"
              >
                <Search className="size-4" />
              </button>
            </div>
          </form>
          <div className="ml-auto flex items-center gap-2">
            <Link
              href="/remote-support"
              className="rounded-md bg-yellow-300 px-4 py-3 text-sm font-bold text-slate-950"
            >
              Live Chat
            </Link>
            <Link
              href="/remote-support"
              className="hidden rounded-md border border-blue-200 px-4 py-3 text-sm font-semibold lg:inline-flex"
            >
              Remote Support
            </Link>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
              aria-expanded={open}
              className="grid size-11 place-items-center rounded-md border border-blue-200 lg:hidden"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <nav className="hidden border-t border-blue-700 lg:block">
          <div className="mx-auto flex max-w-7xl items-center gap-8 px-5 py-3 text-sm font-semibold lg:px-8">
            {navItems.map(([label, href]) => (
              <Link key={label} href={href} className="hover:text-yellow-300">
                {label}
              </Link>
            ))}
          </div>
        </nav>
        {open && (
          <nav className="border-t border-blue-700 px-5 py-3 lg:hidden">
            {navItems.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-sm font-semibold"
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

function FAQ() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="border-t border-gray-200 bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Quick answers to common questions about our support and repairs.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map(([question, answer], index) => (
            <div
              key={question}
              className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
            >
              <button
                type="button"
                onClick={() => setActive(active === index ? null : index)}
                aria-expanded={active === index}
                className="flex w-full items-center justify-between gap-4 text-left text-sm font-bold text-slate-950"
              >
                <span>{question}</span>
                <ChevronDown
                  className={`size-5 text-gray-400 transition-transform ${active === index ? "rotate-180" : ""}`}
                />
              </button>
              {active === index && (
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [query, setQuery] = useState("");
  const shown = services.filter((service) =>
    `${service.title} ${service.description}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  return (
    <div className="min-h-screen bg-white">
      <main>
        <section className="bg-gradient-to-r from-[#073b99] via-[#0754c7] to-[#00338d] px-6 pb-0 pt-6 text-white sm:pt-8">
          <div className="mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="py-4 text-center lg:col-span-7 lg:py-8 lg:text-left">
              <div className="mb-3 inline-flex items-center gap-2 rounded bg-yellow-300 px-3 py-1 text-xs font-extrabold uppercase text-black">
                <BadgeCheck className="size-4" /> Official Support Center
              </div>
              <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
                How can we help you today?
              </h1>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-blue-100 sm:text-lg lg:mx-0">
                Get expert diagnostics, repair appointments, remote assistance,
                and order support from certified support technicians.
              </p>
            </div>
            <div className="flex items-end justify-center lg:col-span-5 lg:justify-end">
              <Image
                src="/images/reference-support-agent.png"
                alt="Support Agent"
                width={990}
                height={1528}
                className="block h-auto max-h-[260px] w-auto object-contain object-bottom sm:max-h-[300px] md:max-h-[340px] lg:max-h-[360px]"
              />
            </div>
          </div>
        </section>
        
        <section className="border-y border-gray-200 bg-gray-100 px-4 py-12">
      <div className="mx-auto grid max-w-7xl items-center overflow-hidden rounded-2xl bg-[#062b7b] text-white shadow-xl lg:grid-cols-12">
        <div className="p-8 md:p-12 lg:col-span-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded bg-yellow-300 px-3 py-1 text-xs font-extrabold text-blue-950">
            ★ ENTERPRISE IT SUPPORT MEMBERSHIP
          </div>
          <h2 className="mb-3 text-2xl font-extrabold sm:text-4xl">
            Business IT Care &amp; SLA Membership
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-blue-100 sm:text-base">
            Get 24/7/365 priority technology support for your organization&apos;s workstations, networks, cloud environments, and security infrastructure.
          </p>
          <div className="mb-6 grid gap-3 text-sm sm:grid-cols-2">
            {[
              "24/7 Priority Enterprise Tech Support",
              "Workplace & Network Diagnostics Included",
              "20% Off On-Site & Specialized IT Projects",
              "Dedicated Account Manager & SLA",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CircleCheck className="size-4 shrink-0 text-yellow-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/support"
              className="rounded bg-yellow-300 px-6 py-3 text-sm font-bold text-blue-950 transition-opacity hover:opacity-90"
            >
              Get Enterprise Support
            </Link>
            <Link
              href="/support"
              className="rounded border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Chat with an IT Specialist
            </Link>
          </div>
        </div>

        {/* Right Panel matching layout */}
        <div className="flex flex-col items-center justify-between bg-[#041e54] p-8 text-center lg:col-span-4 lg:h-full lg:justify-center">
          <div className="my-auto py-6">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-blue-900/60 text-yellow-300">
              <Shield className="size-6 text-yellow-300" />
            </div>
            <h3 className="text-xl font-bold text-white">
              Certified IT Engineers
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-blue-100">
              Specialized technicians ready to resolve your business infrastructure challenges.
            </p>
          </div>
          <div className="w-full pt-4">
            <Link
              href="/support"
              className="flex w-full items-center justify-center gap-2 rounded bg-yellow-300 px-6 py-3 text-sm font-bold text-blue-950 transition-opacity hover:opacity-90"
            >
              <MessageSquare className="size-4" /> Start Online Chat
            </Link>
          </div>
        </div>
      </div>
    </section>
    
        <section className="mx-auto max-w-7xl px-4 py-8">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
            <div className="mb-6 text-center md:text-left">
              <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">
                Quick Support Options
              </h2>
              <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                Get immediate service booking, remote technician access, or
                track existing repairs.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {supportOptions.map(([title, description, href, Icon], index) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-[#0754c7] hover:shadow-xl"
                >
                  <div>
                    <div
                      className={`mb-3 flex size-12 items-center justify-center rounded-lg ${index === 1 || index === 2 ? "bg-yellow-50 text-[#b58100] group-hover:bg-yellow-300 group-hover:text-black" : "bg-blue-50 text-[#0754c7] group-hover:bg-[#0754c7] group-hover:text-white"}`}
                    >
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#0754c7]">
                      {title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-600">{description}</p>
                  </div>
                  <span className="mt-4 flex items-center gap-1 text-xs font-bold text-[#0754c7]">
                    {index === 0
                      ? "Book Appointment"
                      : index === 1
                        ? "Start Online Session"
                        : index === 2
                          ? "Chat with Agent"
                          : "Get Help Now"}
                    <ArrowRight className="size-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-gray-200 bg-gray-100 px-4 py-12">
          <div className="mx-auto grid max-w-7xl items-center overflow-hidden rounded-2xl bg-[#062b7b] text-white shadow-xl lg:grid-cols-12">
            <div className="p-8 md:p-12 lg:col-span-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded bg-yellow-300 px-3 py-1 text-xs font-extrabold text-black">
                ★ UNLIMITED TECH SUPPORT
              </div>
              <h2 className="mb-3 text-2xl font-extrabold sm:text-4xl">
                Total Tech Support Membership
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-blue-100 sm:text-base">
                Get 24/7/365 tech support on all tech and appliances in your
                home, no matter where you bought them. Includes product
                protection on eligible devices.
              </p>
              <div className="mb-6 grid gap-3 text-sm sm:grid-cols-2">
                {[
                  "24/7 Priority Tech Support",
                  "Device Diagnostics & Tune-up Included",
                  "20% Off Hardware Repairs & In-Home Services",
                  "Extended Technical Warranty Coverage",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CircleCheck className="size-4 shrink-0 text-yellow-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/membership"
                  className="rounded bg-yellow-300 px-6 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
                >
                  Learn More About Membership
                </Link>
                <Link
                  href="/remote-support"
                  className="rounded border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Chat with a Specialist
                </Link>
              </div>
            </div>

            {/* Updated Right Panel matching the screenshot layout (shield icon above text, yellow button at bottom) */}
            <div className="flex flex-col items-center justify-between bg-[#041e54] p-8 text-center lg:col-span-4 lg:h-full lg:justify-center">
              <div className="my-auto py-6">
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-blue-900/60 text-yellow-300">
                  <Shield className="size-6 text-yellow-300" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Certified Tech Experts
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100">
                  Over 20,000 certified technicians ready to assist you
                  nationwide.
                </p>
              </div>
              <div className="w-full pt-4">
                <Link
                  href="/remote-support"
                  className="flex w-full items-center justify-center gap-2 rounded bg-yellow-300 px-6 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
                >
                  <MessageSquare className="size-4" /> Start Online Chat
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
              How Our Tech Support Works
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Simple 3-step process to get your issues resolved swiftly.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              [
                "1",
                "Choose Service Mode",
                "Select between 24/7 instant Remote Support, scheduling a service appointment, or in-home technician dispatch.",
              ],
              [
                "2",
                "Diagnostic & Estimate",
                "Our certified technicians inspect your hardware and software, providing transparent estimates before starting any repair.",
              ],
              [
                "3",
                "Repair & Quality Check",
                "Your device is repaired with genuine parts, tested thoroughly, backed by service warranty, and returned ready to use.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-[#0754c7] text-lg font-black text-white">
                  {number}
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900">
                  {title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </section>
        <FAQ />
      </main>
    </div>
  );
}

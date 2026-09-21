"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BadgeCheck, ArrowRight, Search } from "lucide-react";
import { siteConfig, brandInitials } from "@/lib/site-config";
import { navItems } from "@/lib/site-config";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      aria-label={`${siteConfig.name} home`}
    >
      <span className="grid size-10 place-items-center rounded-xl bg-yellow-300 text-sm font-black text-blue-950">
        {brandInitials}
      </span>
      <span
        className={`text-lg font-bold tracking-tight ${dark ? "text-slate-950" : "text-white"}`}
      >
        {siteConfig.name}
        <span className="text-yellow-300">.</span>
      </span>
    </Link>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly (readonly [string, string])[];
}) {
  return (
    <div>
      <h3 className="text-sm font-bold text-white">{title}</h3>
      <div className="mt-4 flex flex-col gap-3">
        {links.map(([label, href]) => (
          <Link
            href={href}
            key={label}
            className="text-sm transition hover:text-blue-300"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main>{children}</main>
    </div>
  );
}
export function PageHero({
  eyebrow = "Official Support Center",
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-slate-50 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
          {eyebrow}
        </div>
        <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      </div>
    </section>
  );
}
export function Cta() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 rounded-[2rem] bg-blue-600 p-8 text-white sm:p-12 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold">Need help right now?</h2>
          <p className="mt-3 text-blue-100">
            Connect with a certified technician online.
          </p>
        </div>
        <Link
          href="/remote-support"
          className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700"
        >
          Start Live Chat <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Menu,
  X,
  MessageSquare,
  KeyRound,
  Wrench,
  Home,
  Calendar,
  Monitor,
  Mail,
  Headphones,
  ShieldCheck,
  Laptop,
  Printer,
  Wifi,
  Smartphone,
  Headset,
} from "lucide-react";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image
        src="/images/Geek_Support_logo.webp"
        alt="Geek Online"
        width={100}
        height={20}
        className="object-contain"
        priority
      />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const supportSuggestions = [
    {
      title: "Virus, Spyware & Pop-up Removal",
      description: "Instant remote cleaning & rootkit scan",
      type: "Remote Fix",
      href: "/remote-support",
      icon: ShieldCheck,
    },
    {
      title: "Slow Computer Diagnostic & Tune-up",
      description: "Boost boot speed, fix freezes & blue screens",
      type: "Service",
      href: "/support",
      icon: Laptop,
    },
    {
      title: "Wireless Printer & Driver Setup",
      description: "Fix offline printer, install updated drivers",
      type: "Remote Fix",
      href: "/remote-support",
      icon: Printer,
    },
    {
      title: "Wi-Fi & Mesh Network Optimization",
      description: "Router pairing, security & coverage tuning",
      type: "Support",
      href: "/support",
      icon: Wifi,
    },
    {
      title: "Apple & Samsung Device Repairs",
      description: "Screen, battery & genuine parts diagnostics",
      type: "Certified",
      href: "/support",
      icon: Smartphone,
    },
    {
      title: "24/7 Live Agent Chat Session",
      description: "Speak with a certified technician right now",
      type: "Instant Live",
      href: "#",
      icon: Headset,
      onClick: (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        if (typeof window !== "undefined" && window.jivo_api) {
          window.jivo_api.open();
        }
      },
    },
  ];

  const filteredSuggestions = useMemo(() => {
    if (!search.trim()) return supportSuggestions;

    const query = search.toLowerCase();

    return supportSuggestions.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query),
    );
  }, [search]);

  const links = [
    { label: "Home", href: "/", icon: Home },
    { label: "Repair & Tech Services", href: "/support", icon: Wrench },
    { label: "Schedule Support", href: "/schedule-repair", icon: Calendar },
    { label: "Remote Support", href: "/remote-support", icon: Monitor },
    { label: "Contact & Help", href: "/contact", icon: Mail },
  ] as const;

  return (
    <>
      {/* Topmost dark announcement bar */}
      <div className="bg-[#051c52] px-4 py-2 text-center text-xs font-semibold text-white border-b border-blue-900">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-end text-xs">
          <div className="flex items-center gap-1.5 mr-auto">
            <span className="relative flex size-2 items-center justify-center">
              <span className="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            </span>
            <span className="text-yellow-300 font-bold">
              24/7 LIVE SUPPORT:
            </span>
            <span className="hidden sm:inline text-blue-100">
              Certified Tech Support Agents Online
            </span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <Link
              href="/remote-support"
              className="hover:text-yellow-300 inline-flex items-center gap-1"
            >
              💬 Start Live Chat
            </Link>
            <span>|</span>
            <Link
              href="/remote-support"
              className="hover:text-yellow-300 inline-flex items-center gap-1"
            >
              🔑 Enter Session PIN
            </Link>
            <span>|</span>
            <Link
              href="/support"
              className="hover:text-yellow-300 inline-flex items-center gap-1"
            >
              ⚡ Geek Online LLC
            </Link>
          </div>
        </div>
      </div>

      {/* Main header bar */}
      <header className="sticky top-0 z-40 bg-[#0645b5] text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
          <Logo />

          {/* Search bar matching screenshot search input */}
          <div className="relative order-3 hidden w-full max-w-2xl flex-1 lg:order-2 lg:mx-6 lg:block">
            <form
              onSubmit={(event) => {
                event.preventDefault();

                if (filteredSuggestions.length > 0) {
                  window.location.href = filteredSuggestions[0].href;
                }
              }}
              className="relative z-30"
            >
              <label className="sr-only" htmlFor="shared-support-search">
                Search support
              </label>

              <div className="flex w-full overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-white/20">
                <input
                  id="shared-support-search"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    setSearchOpen(true);
                  }}
                  onFocus={() => setSearchOpen(true)}
                  placeholder="Search support: Virus clean, PC speed, Printer setup, Email, Mac, Wi-Fi..."
                  className="min-w-0 flex-1 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                />

                <button
                  type="submit"
                  aria-label="Search support"
                  className="grid w-12 place-items-center bg-white text-slate-600 hover:bg-slate-50"
                >
                  <Search className="size-5 text-blue-700" />
                </button>
              </div>
            </form>

            {/* SEARCH SUGGESTIONS */}
            {searchOpen && (
              <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-slate-200">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-3 py-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wide text-slate-500">
                    {search.trim()
                      ? "Search Results"
                      : "Suggested Services & Fixes"}
                  </span>

                  <button
                    type="button"
                    onClick={() => setSearchOpen(false)}
                    className="rounded-md p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-700"
                    aria-label="Close search suggestions"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                {/* Results */}
                <div className="max-h-[380px] overflow-y-auto">
                  {filteredSuggestions.length > 0 ? (
                    filteredSuggestions.map((item) => {
                      const Icon = item.icon;

                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={(event) => {
                            if (item.onClick) {
                              item.onClick(event);
                            }

                            setSearchOpen(false);
                            setSearch("");
                          }}
                          className="group flex items-center gap-3 border-b border-slate-100 px-3 py-3 transition-colors last:border-0 hover:bg-blue-50"
                        >
                          {/* Icon */}
                          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 group-hover:bg-blue-100">
                            <Icon className="size-4" />
                          </div>

                          {/* Text */}
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-bold text-slate-800">
                              {item.title}
                            </div>

                            <div className="mt-0.5 truncate text-xs text-slate-500">
                              {item.description}
                            </div>
                          </div>

                          {/* Type */}
                          <span
                            className={`hidden shrink-0 rounded-md px-2 py-1 text-[10px] font-bold sm:block ${
                              item.type === "Certified"
                                ? "bg-yellow-100 text-yellow-700"
                                : item.type === "Instant Live"
                                  ? "bg-emerald-100 text-emerald-700"
                                  : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {item.type}
                          </span>
                        </Link>
                      );
                    })
                  ) : (
                    <div className="px-4 py-8 text-center">
                      <Search className="mx-auto mb-2 size-6 text-slate-300" />

                      <p className="text-sm font-semibold text-slate-600">
                        No support service found
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Try searching for printer, Wi-Fi, virus, computer, etc.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right action buttons matching image: Live Chat & Remote Support */}
          <div className="order-2 flex items-center gap-2.5 lg:order-3 ml-auto lg:ml-0">
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined" && window.jivo_api) {
                  window.jivo_api.open();
                }
              }}
              className="inline-flex items-center gap-1.5 rounded-xl bg-yellow-300 px-4 py-2.5 text-xs font-extrabold text-blue-950 shadow-sm hover:opacity-90 sm:text-sm"
            >
              💬 Live Chat
            </button>
            <Link
              href="/remote-support"
              className="hidden rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-xs font-bold text-white hover:bg-white/20 sm:inline-flex sm:text-sm items-center gap-1.5"
            >
              💻 Remote Support
            </Link>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="grid size-11 place-items-center rounded-xl border border-white/20 bg-blue-700/50 text-white lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="px-5 pb-3 lg:hidden">
          <div className="relative px-5 pb-3 lg:hidden">
            <form
              onSubmit={(event) => {
                event.preventDefault();

                if (filteredSuggestions.length > 0) {
                  window.location.href = filteredSuggestions[0].href;
                }
              }}
              className="relative z-30"
            >
              <div className="flex w-full overflow-hidden rounded-xl bg-white shadow-sm">
                <input
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    setSearchOpen(true);
                  }}
                  onFocus={() => setSearchOpen(true)}
                  placeholder="Search support: Virus clean, PC speed, Printer setup..."
                  className="min-w-0 flex-1 px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 outline-none"
                />

                <button
                  type="submit"
                  aria-label="Search support"
                  className="grid w-11 place-items-center bg-white text-blue-700"
                >
                  <Search className="size-4" />
                </button>
              </div>
            </form>

            {searchOpen && (
              <div className="absolute left-5 right-5 top-[calc(100%-6px)] z-50 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-slate-200">
                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-3 py-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wide text-slate-500">
                    {search.trim()
                      ? "Search Results"
                      : "Suggested Services & Fixes"}
                  </span>

                  <button
                    type="button"
                    onClick={() => setSearchOpen(false)}
                    className="p-1 text-slate-400"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                <div className="max-h-[320px] overflow-y-auto">
                  {filteredSuggestions.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={(event) => {
                          if (item.onClick) {
                            item.onClick(event);
                          }

                          setSearchOpen(false);
                          setSearch("");
                        }}
                        className="flex items-center gap-2.5 border-b border-slate-100 px-3 py-3 hover:bg-blue-50"
                      >
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                          <Icon className="size-4" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-bold text-slate-800">
                            {item.title}
                          </div>

                          <div className="truncate text-[10px] text-slate-500">
                            {item.description}
                          </div>
                        </div>

                        <span className="hidden rounded-md bg-blue-100 px-1.5 py-1 text-[9px] font-bold text-blue-700 xs:block">
                          {item.type}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop navigation bar */}
        <nav className="hidden border-t border-blue-700/60 bg-[#05379b]/80 lg:block">
          <div className="mx-auto flex max-w-7xl items-center gap-8 px-5 py-2.5 text-xs font-bold tracking-wide uppercase lg:px-8">
            {links.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="inline-flex items-center gap-1.5 text-blue-100 hover:text-yellow-300 transition-colors"
              >
                <Icon className="size-3.5 text-yellow-300" />
                {label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        {open && (
          <nav className="border-t border-blue-700 bg-[#05379b] px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-1.5">
              {links.map(({ label, href, icon: Icon }) => (
                <Link
                  onClick={() => setOpen(false)}
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-2.5 rounded-xl px-3.5 py-3 text-sm font-bold text-white hover:bg-blue-700"
                >
                  <Icon className="size-4 text-yellow-300" />
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

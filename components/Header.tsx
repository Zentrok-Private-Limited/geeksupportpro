"use client";
import { useState } from "react";
import Link from "next/link";
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
  Headphones 
} from "lucide-react";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <div className="grid size-10 place-items-center rounded-xl bg-yellow-300 text-blue-950 shadow-sm">
        <Headphones className="size-5" />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-black tracking-tight leading-none text-white">
          GEEK ONLINE
        </span>
        <span className="text-[10px] font-extrabold tracking-widest text-yellow-300">
          24/7 EXPERT TECH HELP
        </span>
      </div>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  
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
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-yellow-300 font-bold">24/7 LIVE SUPPORT:</span>
            <span className="hidden sm:inline text-blue-100">
              Certified Tech Support Agents Online
            </span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <Link href="/remote-support" className="hover:text-yellow-300 inline-flex items-center gap-1">
              💬 Start Live Chat
            </Link>
            <span>|</span>
            <Link href="/remote-support" className="hover:text-yellow-300 inline-flex items-center gap-1">
              🔑 Enter Session PIN
            </Link>
            <span>|</span>
            <Link href="/support" className="hover:text-yellow-300 inline-flex items-center gap-1">
              ⚡ Tech Services
            </Link>
          </div>
        </div>
      </div>

      {/* Main header bar */}
      <header className="sticky top-0 z-40 bg-[#0645b5] text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
          <Logo />

          {/* Search bar matching screenshot search input */}
          <form
            onSubmit={(event) => event.preventDefault()}
            className="order-3 hidden flex-1 max-w-2xl lg:order-2 lg:block lg:mx-6"
          >
            <label className="sr-only" htmlFor="shared-support-search">
              Search support
            </label>
            <div className="flex w-full overflow-hidden rounded-xl bg-white shadow-sm">
              <input
                id="shared-support-search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search support: Virus clean, PC speed, Printer setup,Email, Mac, Wi-Fi..."
                className="min-w-0 flex-1 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none"
              />
              <button
                type="submit"
                aria-label="Search support"
                className="grid w-12 place-items-center bg-white text-slate-600 hover:bg-slate-50"
              >
                <Search className="size-4 text-blue-700" />
              </button>
            </div>
          </form>

          {/* Right action buttons matching image: Live Chat & Remote Support */}
          <div className="order-2 flex items-center gap-2.5 lg:order-3 ml-auto lg:ml-0">
            <Link
              href="/remote-support"
              className="inline-flex items-center gap-1.5 rounded-xl bg-yellow-300 px-4 py-2.5 text-xs font-extrabold text-blue-950 shadow-sm hover:opacity-90 sm:text-sm"
            >
              💬 Live Chat
            </Link>
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
          <form onSubmit={(event) => event.preventDefault()}>
            <div className="flex w-full overflow-hidden rounded-xl bg-white shadow-sm">
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
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
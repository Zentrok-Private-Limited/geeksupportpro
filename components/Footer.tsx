import Link from "next/link";
import { brandInitials, navItems, siteConfig } from "@/lib/site-config";
import { Shield, ArrowRight, MessageSquare, CircleDot } from "lucide-react";

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

function Footer() {
  return (
    <>
      {/* Top Banner / CTA Section from Screenshot */}
      <section className="bg-[#062b7b] px-4 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-yellow-300 text-blue-950">
              <MessageSquare className="size-6 fill-current" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold sm:text-2xl">
                We're here to help 24/7/365
              </h3>
              <p className="text-sm text-blue-100">
                Get expert online tech support from certified technicians.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/remote-support"
              className="inline-flex items-center gap-2 rounded bg-yellow-300 px-5 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-90"
            >
              <MessageSquare className="size-4 fill-current" /> Start Live Chat
            </Link>
            <Link
              href="/remote-support"
              className="inline-flex items-center gap-2 rounded border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Connect with PIN
            </Link>
          </div>
        </div>
      </section>

      {/* Main Footer Section */}
      <footer className="border-t border-gray-200 bg-[#f8fafc] px-5 py-16 text-slate-600 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
            {/* SUPPORT & SERVICES (3 cols) */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-extrabold tracking-wider text-slate-900 uppercase">
                SUPPORT &amp; SERVICES
              </h3>
              <div className="mt-4 flex flex-col gap-2.5 text-sm">
                <Link href="/services" className="hover:text-slate-900">Expert Tech Services</Link>
                <Link href="/remote-support" className="hover:text-slate-900">24/7 Remote Screen Share</Link>
                <Link href="/schedule-repair" className="hover:text-slate-900">Schedule Remote Session</Link>
                <Link href="/services" className="hover:text-slate-900">PC Diagnostics &amp; Tune-up</Link>
                <Link href="/services" className="hover:text-slate-900">Virus &amp; Malware Removal</Link>
                <Link href="/services" className="hover:text-slate-900">Wireless Printer Setup</Link>
              </div>
            </div>

            {/* ONLINE CHANNELS (3 cols) */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-extrabold tracking-wider text-slate-900 uppercase">
                ONLINE CHANNELS
              </h3>
              <div className="mt-4 flex flex-col gap-2.5 text-sm">
                <Link href="/remote-support" className="flex items-center gap-2 hover:text-slate-900">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  24/7 Live Agent Chat
                </Link>
                <Link href="/remote-support" className="hover:text-slate-900">Enter Agent Session Code</Link>
                <Link href="/contact" className="hover:text-slate-900">Send Technical Inquiry</Link>
                <Link href="/terms-and-conditions" className="hover:text-slate-900">Terms &amp; Support Policies</Link>
                <Link href="/privacy-policy" className="hover:text-slate-900">Privacy Policy</Link>
              </div>
            </div>

            {/* PROTECTION & TOTAL SUPPORT (3 cols) */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-extrabold tracking-wider text-slate-900 uppercase">
                PROTECTION &amp; TOTAL SUPPORT
              </h3>
              <div className="mt-4 flex flex-col gap-2.5 text-sm">
                <Link href="/membership" className="hover:text-slate-900">Total Tech Protection Plan</Link>
                <Link href="/membership" className="hover:text-slate-900">Unlimited Tech Coverage</Link>
                <Link href="/services" className="hover:text-slate-900">Apple &amp; Samsung Diagnostics</Link>
                <Link href="/remote-support" className="hover:text-slate-900">Chat with a Specialist</Link>
              </div>
            </div>

            {/* CERTIFIED SUPPORT CARD/COLUMN (3 cols) */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2">
                <Shield className="size-5 text-[#0754c7]" />
                <h3 className="text-xs font-extrabold tracking-wider text-slate-900 uppercase">
                  CERTIFIED SUPPORT
                </h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                Certified technicians providing fast, secure, 256-bit encrypted online troubleshooting across North America.
              </p>
              <Link
                href="/remote-support"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#0754c7] hover:underline"
              >
                Start Online Chat Now <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* Bottom Copyright & Footer Links */}
          <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-200 pt-8 text-xs text-slate-500 sm:flex-row">
            <p>© 2026 Geek Online. All rights reserved.</p>
            <div className="mt-4 flex items-center gap-6 sm:mt-0">
              <Link href="/terms-and-conditions" className="hover:text-slate-900">Terms &amp; Conditions</Link>
              <Link href="/privacy-policy" className="hover:text-slate-900">Privacy Policy</Link>
              <Link href="/contact" className="hover:text-slate-900">Online Support</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
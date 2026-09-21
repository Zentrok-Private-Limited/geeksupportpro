"use client";
import { useState } from "react";
import Link from "next/link";
import { PageFrame } from "@/components/site-shell";
import {
  MessageSquare,
  Check,
  KeyRound,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Lock,
  ArrowRight,
  Sparkles,
  Headphones,
} from "lucide-react";

const faqData = [
  {
    q: "What devices are compatible with Remote Support?",
    a: "We can remotely connect to Windows PCs (Windows 10 & 11), macOS computers (MacBook, iMac, Mac mini), and troubleshoot connected peripherals like wireless printers, routers, and external hard drives.",
  },
  {
    q: "Can the Agent access my computer after the session ends?",
    a: "No. The connection requires your explicit permission and a unique one-time session PIN. Once you close the session, the connection is permanently terminated.",
  },
  {
    q: "How do I get connected to a live agent?",
    a: 'Simply click the "Chat Now" button to start an instant live chat with an agent, or call our 24/7 helpline at 1-800-433-5778.',
  },
];

export default function RemoteSupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <PageFrame>
      {/* Top Banner / Hero Matching Screenshot 136 */}
      <section className="bg-white px-5. py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Get help with your tech problems.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Support plans may include protection, troubleshooting and
              technical assistance. By continuing, you agree to our{" "}
              <span className="underline cursor-pointer">Terms</span>,{" "}
              <span className="underline cursor-pointer">Privacy</span> and
              applicable policies.
            </p>
            <h2 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
              We Care To Serve Best As We Can
            </h2>
            <div className="pt-2">
              <Link
                href="/remote-support"
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-300 px-8 py-4 text-base font-extrabold text-blue-950 shadow-sm transition-opacity hover:opacity-90"
              >
                Chat Now
              </Link>
            </div>
            {/* 3 Step Indicator Strip */}
            <div className="pt-6">
              <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-slate-900 sm:gap-6">
                <div className="flex items-center gap-1.5">
                  <span className="grid size-5 place-items-center rounded-full bg-emerald-500 text-white">
                    <Check className="size-3" />
                  </span>
                  <span>Start Chat</span>
                </div>
                <div className="h-[2px] w-6 bg-yellow-400 sm:w-10" />
                <div className="flex items-center gap-1.5">
                  <span className="grid size-5 place-items-center rounded-full bg-emerald-500 text-white">
                    <Check className="size-3" />
                  </span>
                  <span>Schedule Appointment</span>
                </div>
                <div className="h-[2px] w-6 bg-yellow-400 sm:w-10" />
                <div className="flex items-center gap-1.5">
                  <span className="grid size-5 place-items-center rounded-full bg-emerald-500 text-white">
                    <Check className="size-3" />
                  </span>
                  <span>Get Device Repaired</span>
                </div>
              </div>
              <p className="mt-5 text-xs text-slate-500">
                Our platform is an independent third-party IT service provider
                for software-related problems. Unless stated otherwise, we are
                not affiliated with any manufacturer, ISP, email provider or
                device brand. Services may also be available directly from the
                brand owner.
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-6xl overflow-hidden rounded-3xl bg-slate-100">
            <img
              src="/chat-support.png"
              alt="Support Agent"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* How Our Remote Support Works Section (Screenshot 137) */}
      <section className="bg-slate-50 px-5. py-20 lg:px-8 border-t border-slate-200">
        <div className="mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#0754c7]">
            <Sparkles className="size-3.5" /> SEAMLESS 3-STEP PROCESS
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-950 sm:text-4xl">
            How Our Remote Support Works
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Start a conversation, choose a convenient time when needed, and
            continue with the right troubleshooting or service option for your
            device.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Step 01 */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-xl bg-blue-50 text-base font-extrabold text-[#0754c7]">
                    01
                  </span>
                  <MessageSquare className="size-5 text-[#0754c7]" />
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                  Start a Conversation
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Connect with our certified support agents via live chat or
                  phone. Explain what issue your device is experiencing to
                  receive instant guidance.
                </p>
              </div>
              <div className="mt-8 border-t border-slate-100 pt-5">
                <Link
                  href="/remote-support"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0754c7] hover:underline"
                >
                  Instant agent triage <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Step 02 */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-xl bg-blue-50 text-base font-extrabold text-[#0754c7]">
                    02
                  </span>
                  <KeyRound className="size-5 text-[#0754c7]" />
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                  Secure Connection
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Use a private 6-digit session code to grant temporary
                  screen-share access. You retain 100% control and can pause or
                  cancel at any second.
                </p>
              </div>
              <div className="mt-8 border-t border-slate-100 pt-5">
                <Link
                  href="/remote-support"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0754c7] hover:underline"
                >
                  256-bit encrypted link <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Step 03 */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-xl bg-blue-50 text-base font-extrabold text-[#0754c7]">
                    03
                  </span>
                  <Check className="size-5 text-emerald-600" />
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                  Resolution &amp; Optimization
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Our technicians diagnose root causes, remove threats, update
                  software, and verify complete device stability before closing
                  the session.
                </p>
              </div>
              <div className="mt-8 border-t border-slate-100 pt-5">
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600">
                  Verified problem resolution ✓
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Privacy & Security is Always Protected Section (Screenshot 138) */}
      <section className="bg-white px-5. py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-[#062b7b] p-8 text-white lg:p-12">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <span className="mb-3 inline-block rounded bg-yellow-300 px-3 py-1 text-xs font-extrabold uppercase text-blue-950">
                  🔒 100% SAFE &amp; SECURE
                </span>
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  Your Privacy &amp; Security is Always Protected
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-blue-100 sm:text-base">
                  Our remote connections utilize military-grade 256-bit AES
                  encryption. You always retain visual oversight of everything
                  the agent does on your screen, and no unauthorized software is
                  left behind once the session closes.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2 text-sm font-medium text-white">
                  <div className="flex items-center gap-2">
                    <Check className="size-4 shrink-0 text-yellow-300" /> You
                    can pause or disconnect at any second
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 shrink-0 text-yellow-300" /> No
                    ongoing access once closed
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 shrink-0 text-yellow-300" />{" "}
                    Background-checked certified agents
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="size-4 shrink-0 text-yellow-300" /> Full
                    transparency &amp; real-time chat
                  </div>
                </div>
              </div>

              {/* Service Guarantee Card Box inside dark container */}
              <div className="lg:col-span-4">
                <div className="rounded-2xl border border-white/20 bg-blue-950/40 p-6 text-center">
                  <div className="mx-auto grid size-12 place-items-center rounded-xl bg-yellow-300 text-blue-950">
                    <ShieldCheck className="size-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold text-white">
                    Service Guarantee
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-blue-100">
                    If we can&apos;t resolve your problem remotely, we will
                    guide you through in-person service options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remote Support FAQs Section (Screenshot 138/139) */}
      <section className="bg-slate-50 px-5. py-20 lg:px-8 border-t border-slate-200">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Remote Support FAQs
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Answers to common questions regarding online tech support sessions.
          </p>

          <div className="mt-10 space-y-4 text-left">
            {faqData.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left text-base font-bold text-slate-900"
                  >
                    <span>{item.q}</span>
                    {isOpen ? (
                      <ChevronUp className="size-5 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="size-5 text-slate-500 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-100 px-6 pb-6 pt-4 text-sm leading-relaxed text-slate-600">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

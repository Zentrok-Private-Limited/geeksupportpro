"use client";
import { useState } from "react";
import Link from "next/link";
import { PageFrame } from "@/components/site-shell";
import { 
  MessageSquare, 
  Monitor, 
  Calendar, 
  ShieldCheck, 
  Send, 
  KeyRound, 
  CheckCircle2 
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("Computer & Laptop Diagnostics");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageFrame>
      {/* Blue Hero Banner Matching Screenshot 140 */}
      <section className="bg-[#0754c7] px-5. py-16 text-center text-white lg:px-8">
        <div className="mx-auto max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-yellow-300 px-3.5 py-1 text-xs font-extrabold uppercase text-blue-950">
            🎧 SUPPORT HELPDESK
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Contact Support Helpdesk
          </h1>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-blue-100 sm:text-base">
            Choose the fastest online channel to get immediate technical troubleshooting and support.
          </p>
        </div>
      </section>

      {/* 3 Channel Cards Section Matching Screenshot 140 */}
      <section className="bg-slate-50 px-5. py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1: 24/7 Live Agent Chat */}
            <div className="relative flex flex-col justify-between rounded-3xl border-2 border-[#0754c7] bg-white p-8 shadow-sm">
              <span className="absolute -top-3.5 right-6 rounded-full bg-yellow-300 px-3 py-0.5 text-[11px] font-extrabold uppercase text-blue-950 shadow-sm">
                FASTEST
              </span>
              <div>
                <div className="grid size-12 place-items-center rounded-2xl bg-blue-50 text-[#0754c7]">
                  <MessageSquare className="size-6" />
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                  24/7 Live Agent Chat
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Chat in real-time with certified technicians for instant diagnostics, software fixes, and questions.
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs font-bold text-emerald-600">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  Technicians Online Now
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/remote-support"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0754c7] px-5 py-3.5 text-sm font-extrabold text-white transition-opacity hover:opacity-90"
                >
                  <MessageSquare className="size-4" /> Start Live Chat
                </Link>
              </div>
            </div>

            {/* Card 2: Remote Screen Share */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div>
                <div className="grid size-12 place-items-center rounded-2xl bg-blue-50 text-[#0754c7]">
                  <Monitor className="size-6" />
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                  Remote Screen Share
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Have an agent session code? Enter your 6-digit PIN to start a secure 256-bit remote screen sharing fix.
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-[#0754c7]">
                  <ShieldCheck className="size-4" /> 100% Encrypted &amp; Safe
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/remote-support"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-300 px-5 py-3.5 text-sm font-extrabold text-blue-950 transition-opacity hover:opacity-90"
                >
                  <KeyRound className="size-4" /> Enter Session PIN
                </Link>
              </div>
            </div>

            {/* Card 3: Schedule a Time Slot */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div>
                <div className="grid size-12 place-items-center rounded-2xl bg-blue-50 text-[#0754c7]">
                  <Calendar className="size-6" />
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                  Schedule a Time Slot
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Book a convenient appointment window for guided support, system tune-up, and peripheral setup.
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-slate-500">
                  <Calendar className="size-4 text-[#0754c7]" /> Flexible morning &amp; evening slots
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/schedule-repair"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-extrabold text-white transition-opacity hover:opacity-90"
                >
                  <Calendar className="size-4" /> Reserve Time Slot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Send Us a Message Section Matching Screenshot 140/141 */}
      <section className="bg-slate-50 px-5. pb-20 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
              Send Us a Message
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Our technical support team reviews inquiries promptly.
            </p>
          </div>

          {submitted ? (
            <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center text-emerald-900">
              <CheckCircle2 className="mx-auto size-10 text-emerald-600" />
              <h3 className="mt-3 text-lg font-bold">Message Submitted Successfully</h3>
              <p className="mt-1 text-sm text-emerald-700">
                Thank you, {fullName}. Our technical support team has received your inquiry and will reach out to {email} shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-5 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-500"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Smith"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0754c7]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0754c7]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9876543210"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0754c7]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Topic / Category *
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0754c7]"
                >
                  <option value="Computer & Laptop Diagnostics">
                    Computer &amp; Laptop Diagnostics
                  </option>
                  <option value="Printer & Peripheral Setup">
                    Printer &amp; Peripheral Setup
                  </option>
                  <option value="Software & Email Support">
                    Software &amp; Email Support
                  </option>
                  <option value="Security & Malware Removal">
                    Security &amp; Malware Removal
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Message Details *
                </label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please describe how we can assist you..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0754c7]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0754c7] px-7 py-3.5 text-sm font-extrabold text-white transition-opacity hover:opacity-90"
              >
                <Send className="size-4" /> Submit Message
              </button>
            </form>
          )}
        </div>
      </section>
    </PageFrame>
  );
}
"use client";
import { useState } from "react";
import Link from "next/link";
import { PageFrame } from "@/components/site-shell";
import { 
  Laptop, 
  Phone, 
  Calendar as CalendarIcon, 
  Lock, 
  Check, 
  ListOrdered, 
  ShieldCheck, 
  MessageSquare, 
  KeyRound, 
  ArrowRight,
  ChevronDown
} from "lucide-react";

export default function SchedulePage() {
  const [deviceCategory, setDeviceCategory] = useState("Select Device Type");
  const [brand, setBrand] = useState("");
  const [sessionType, setSessionType] = useState<"screen-share" | "phone">("screen-share");
  const [selectDate, setSelectDate] = useState("21-09-2026");
  const [timeSlot, setTimeSlot] = useState("Immediate (Next Available Agent - < 5 mins)");
  const [issue, setIssue] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <PageFrame>
      {/* Blue Hero Banner matching ss132 */}
      <section className="bg-[#0754c7] px-5 py-12 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded bg-yellow-300 px-3 py-1 text-xs font-extrabold uppercase text-blue-950">
              ⚡ 24/7 REMOTE SUPPORT RESERVATION
            </div>
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Schedule a Remote Support Session
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base">
              Book a reserved time slot with a certified technician for fast online diagnostics, virus removal, printer setup, and system tune-up.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/remote-support"
              className="inline-flex items-center gap-2 rounded bg-yellow-300 px-5 py-3 text-sm font-bold text-blue-950 transition-opacity hover:opacity-90"
            >
              ⚡ Instant Connect Now
            </Link>
            <Link
              href="/remote-support"
              className="inline-flex items-center gap-2 rounded border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              💬 24/7 Live Chat
            </Link>
          </div>
        </div>
      </section>

      {/* Main Layout Area */}
      <section className="bg-white px-5. py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Form Column (7 cols) */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10 lg:col-span-7">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
                Reserve Remote Technician
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Enter your device information and convenient time to receive dedicated online support.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-8">
              {/* Step 1: Device & Brand */}
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="grid size-6 place-items-center rounded-full bg-[#0754c7] text-xs font-bold text-white">
                    1
                  </span>
                  <h3 className="text-base font-extrabold text-slate-950">
                    DEVICE &amp; BRAND
                  </h3>
                </div>

                <div className="mt-4 grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-bold text-slate-900">
                    Device Category *
                    <div className="relative mt-2">
                      <select
                        value={deviceCategory}
                        onChange={(e) => setDeviceCategory(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-normal text-slate-800 focus:border-[#0754c7] focus:outline-none"
                      >
                        <option value="Select Device Type">Select Device Type</option>
                        <option value="Windows Laptop / Desktop PC">Windows Laptop / Desktop PC</option>
                        <option value="Apple MacBook / iMac / Mac mini">Apple MacBook / iMac / Mac mini</option>
                        <option value="Wireless Printer / Scanner (HP, Epson, Canon, Brother)">
                          Wireless Printer / Scanner (HP, Epson, Canon, Brother)
                        </option>
                        <option value="Wi-Fi Router & Home Network (eero, Netgear, ASUS)">
                          Wi-Fi Router &amp; Home Network (eero, Netgear, ASUS)
                        </option>
                        <option value="Email (Outlook/Gmail) & Microsoft 365 Software">
                          Email (Outlook/Gmail) &amp; Microsoft 365 Software
                        </option>
                        <option value="External Hard Drive & Cloud Storage">
                          External Hard Drive &amp; Cloud Storage
                        </option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
                    </div>
                  </label>

                  <label className="text-sm font-bold text-slate-900">
                    Brand / Manufacturer *
                    <input
                      type="text"
                      placeholder="e.g. Apple, Dell, HP, Lenovo, ASUS, Acer, Canon"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-normal text-slate-800 placeholder:text-slate-400 focus:border-[#0754c7] focus:outline-none"
                    />
                  </label>
                </div>
              </div>

              {/* Step 2: Support Session Type */}
              <div className="border-t border-slate-100 pt-7">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-6 place-items-center rounded-full bg-[#0754c7] text-xs font-bold text-white">
                    2
                  </span>
                  <h3 className="text-base font-extrabold text-slate-950">
                    SUPPORT SESSION TYPE
                  </h3>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div
                    onClick={() => setSessionType("screen-share")}
                    className={`cursor-pointer rounded-2xl border p-4 transition-all ${
                      sessionType === "screen-share"
                        ? "border-[#0754c7] bg-blue-50/40 ring-1 ring-[#0754c7]"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="grid size-9 place-items-center rounded-xl bg-blue-100 text-[#0754c7]">
                        <Laptop className="size-5" />
                      </div>
                      <input
                        type="radio"
                        checked={sessionType === "screen-share"}
                        onChange={() => setSessionType("screen-share")}
                        className="size-4 accent-[#0754c7]"
                      />
                    </div>
                    <div className="mt-3">
                      <div className="text-sm font-bold text-slate-900">
                        24/7 Remote Screen Share
                      </div>
                      <div className="mt-1 text-xs text-slate-600">
                        Agent fixes issue directly via secure PIN
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => setSessionType("phone")}
                    className={`cursor-pointer rounded-2xl border p-4 transition-all ${
                      sessionType === "phone"
                        ? "border-[#0754c7] bg-blue-50/40 ring-1 ring-[#0754c7]"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="grid size-9 place-items-center rounded-xl bg-blue-100 text-[#0754c7]">
                        <Phone className="size-5" />
                      </div>
                      <input
                        type="radio"
                        checked={sessionType === "phone"}
                        onChange={() => setSessionType("phone")}
                        className="size-4 accent-[#0754c7]"
                      />
                    </div>
                    <div className="mt-3">
                      <div className="text-sm font-bold text-slate-900">
                        Phone &amp; Guided Setup
                      </div>
                      <div className="mt-1 text-xs text-slate-600">
                        Agent calls you for guided walkthrough
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Preferred Time Window */}
              <div className="border-t border-slate-100 pt-7">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-6 place-items-center rounded-full bg-[#0754c7] text-xs font-bold text-white">
                    3
                  </span>
                  <h3 className="text-base font-extrabold text-slate-950">
                    PREFERRED TIME WINDOW
                  </h3>
                </div>

                <div className="mt-4 grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-bold text-slate-900">
                    Select Date *
                    <div className="relative mt-2">
                      <input
                        type="text"
                        value={selectDate}
                        onChange={(e) => setSelectDate(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 px-4 py-3.5 pr-10 text-sm font-normal text-slate-800 focus:border-[#0754c7] focus:outline-none"
                      />
                      <CalendarIcon className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
                    </div>
                  </label>

                  <label className="text-sm font-bold text-slate-900">
                    Time Slot *
                    <div className="relative mt-2">
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-normal text-slate-800 focus:border-[#0754c7] focus:outline-none"
                      >
                        <option value="Immediate (Next Available Agent - < 5 mins)">
                          Immediate (Next Available Agent - &lt; 5 mins)
                        </option>
                        <option value="Morning (09:00 AM - 11:00 AM)">Morning (09:00 AM - 11:00 AM)</option>
                        <option value="Mid-Day (11:00 AM - 01:00 PM)">Mid-Day (11:00 AM - 01:00 PM)</option>
                        <option value="Afternoon (01:00 PM - 03:00 PM)">Afternoon (01:00 PM - 03:00 PM)</option>
                        <option value="Late Afternoon (03:00 PM - 05:00 PM)">Late Afternoon (03:00 PM - 05:00 PM)</option>
                        <option value="Evening (05:00 PM - 08:00 PM)">Evening (05:00 PM - 08:00 PM)</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
                    </div>
                  </label>
                </div>
              </div>

              {/* Step 4: Issue Description & Contact */}
              <div className="border-t border-slate-100 pt-7">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-6 place-items-center rounded-full bg-[#0754c7] text-xs font-bold text-white">
                    4
                  </span>
                  <h3 className="text-base font-extrabold text-slate-950">
                    ISSUE DESCRIPTION &amp; CONTACT
                  </h3>
                </div>

                <div className="mt-4 space-y-5">
                  <label className="block text-sm font-bold text-slate-900">
                    What issue are you facing? *
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe the technical issue (e.g. computer infected with pop-up virus, wireless printer offline, slow boot time, Outlook password sync error)..."
                      value={issue}
                      onChange={(e) => setIssue(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-normal text-slate-800 placeholder:text-slate-400 focus:border-[#0754c7] focus:outline-none"
                    />
                  </label>

                  <div className="grid gap-5 sm:grid-cols-3">
                    <label className="text-sm font-bold text-slate-900">
                      Full Name *
                      <input
                        required
                        type="text"
                        placeholder="John Smith"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-normal text-slate-800 placeholder:text-slate-400 focus:border-[#0754c7] focus:outline-none"
                      />
                    </label>

                    <label className="text-sm font-bold text-slate-900">
                      Email Address *
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-normal text-slate-800 placeholder:text-slate-400 focus:border-[#0754c7] focus:outline-none"
                      />
                    </label>

                    <label className="text-sm font-bold text-slate-900">
                      Phone Number *
                      <input
                        required
                        type="tel"
                        placeholder="9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-normal text-slate-800 placeholder:text-slate-400 focus:border-[#0754c7] focus:outline-none"
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Bottom security strip & button matching ss133 */}
              <div className="flex flex-col items-start justify-between gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                  <Lock className="size-4 text-slate-500" />
                  <span>100% Secure 256-Bit Encrypted Session.</span>
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-300 px-8 py-4 text-sm font-extrabold text-blue-950 transition-opacity hover:opacity-90 sm:w-auto"
                >
                  {confirmed ? "Reservation Confirmed!" : "Confirm Remote Reservation"} <ArrowRight className="size-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Sidebar Column (5 cols) */}
          <div className="space-y-6 lg:col-span-5">
            {/* Box 1: Remote Session Checklist */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-2.5">
                <ListOrdered className="size-5 text-[#0754c7]" />
                <h3 className="text-lg font-extrabold text-slate-950">
                  REMOTE SESSION CHECKLIST
                </h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#0754c7]" />
                  <div>
                    <span className="font-bold text-slate-950">Working Internet:</span> Make sure your device has active Wi-Fi or Ethernet.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#0754c7]" />
                  <div>
                    <span className="font-bold text-slate-950">Device Powered On:</span> Keep your laptop connected to charger.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#0754c7]" />
                  <div>
                    <span className="font-bold text-slate-950">Administrator Access:</span> Be ready to grant temporary screen share permission.
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2: Security Guarantee */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="size-5 text-[#0754c7]" />
                <h3 className="text-lg font-extrabold text-slate-950">
                  SECURITY GUARANTEE
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Our certified agents connect via encrypted temporary session PIN. You can pause or terminate the connection at any second with a single click.
              </p>
            </div>

            {/* Box 3: Need Immediate Help? Dark Box matching ss132/133 */}
            <div className="rounded-3xl bg-[#062b7b] p-7 text-center text-white shadow-sm">
              <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-blue-900/60 text-yellow-300">
                <MessageSquare className="size-6" />
              </div>
              <h3 className="mt-4 text-xl font-extrabold">
                NEED IMMEDIATE HELP?
              </h3>
              <p className="mt-2 text-sm text-blue-100">
                Chat directly with a certified Support Agent right now.
              </p>
              <div className="mt-6">
                <Link
                  href="/remote-support"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-300 px-6 py-3.5 text-sm font-extrabold text-blue-950 transition-opacity hover:opacity-90"
                >
                  Start Live Chat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
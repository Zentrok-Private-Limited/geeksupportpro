import Image from "next/image";
import Link from "next/link";
import { PageFrame, PageHero } from "@/components/site-shell";
import { services } from "@/data/site-content";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="Business IT Services"
        title="Technology support for your business"
        description="Browse our complete enterprise service directory and connect with certified IT technicians."
      />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto mb-12 max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
          <Image
            src="/images/tech-service.png"
            alt="Technician providing computer and network support"
            width={1200}
            height={800}
            className="h-72 w-full object-cover"
          />
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
              All Business IT Solutions
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Click any service area below to connect directly with our support desk.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ slug, title, description, icon: Icon }) => (
              <Link
                key={slug}
                href="/support"
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0754c7] hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-[#0754c7] transition-colors group-hover:bg-[#0754c7] group-hover:text-white">
                      {Icon ? <Icon className="size-6" /> : <CheckCircle2 className="size-6" />}
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-400 group-hover:text-[#0754c7]">
                      Connect <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-950 group-hover:text-[#0754c7]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {description}
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-4 text-xs font-semibold text-[#0754c7]">
                  Get instant support →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
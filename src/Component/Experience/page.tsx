import { SectionIndex } from "@/components/ui/section-index";
import ExperienceItem from "./SingleExperience";

const JOBS = [
  {
    title: "Outbox Labs",
    duration: "FEB 2026 — PRESENT",
    position: "Software Developer Intern · Bengaluru",
    bullets: [
      "Built a dedicated Elasticsearch thread index to replace query-time field collapsing, cutting inbox API latency and eliminating O(N) scans across 95+ rollover indices.",
      "Designed Lead-Finder: a cost-optimized waterfall across multiple email-finding providers with idempotent webhook verification, cutting cost per verified lead 30–40%.",
      "Shipped a real-time visitor identity pipeline (tracking script, Kafka, BullMQ) turning 50K+ daily events into enriched B2B profiles with live intent scoring.",
      "Led full product revamps of ReachInbox and Zapmail — UI, core workflows and platform architecture.",
    ],
  },
  {
    title: "AntWorks Financial Buddy",
    duration: "MAR 2025 — FEB 2026",
    position: "Software Developer Intern · Gurugram",
    bullets: [
      "Built Ant-Affiliate, a full-stack platform where users sell financial services and earn commissions.",
      "Wrote the commission ledger APIs — admin credit/debit flows on Laravel 12 with JWT authentication.",
      "REST services with strict validation, error handling and full transaction history.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-12">
        <div className="md:col-span-3">
          <SectionIndex label="Experience" number="01" />
        </div>
        <div className="md:col-span-9">
          {JOBS.map((job) => (
            <ExperienceItem key={job.title} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}

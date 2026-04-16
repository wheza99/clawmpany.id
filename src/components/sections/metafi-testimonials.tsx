"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "“Clawmpany mengubah cara kami bekerja. AI agents kami berjalan 24/7 tanpa gangguan, dan dashboard-nya sangat intuitif.”",
    name: "Andi Pratama",
    role: "CEO, TechSuara",
    avatar: "/images/homepage/testimonials/1.webp",
  },
  {
    quote:
      "“Dari setup sampai running cuma 5 menit. AI agents kami langsung produktif. Ini benar-benar game changer.”",
    name: "Sari Dewi",
    role: "CTO, DataNusa",
    avatar: "/images/homepage/testimonials/2.webp",
  },
  {
    quote:
      "“Kami tidak perlu hire DevOps lagi. Clawmpany urus semuanya — server, konfigurasi, monitoring. Tinggal fokus ke bisnis.”",
    name: "Budi Santoso",
    role: "Founder, KreatifLabs",
    avatar: "/images/homepage/testimonials/3.webp",
  },
  {
    quote:
      "“Keamanan data kami meningkat drastis. Setiap kantor virtual terisolasi, jadi kami tenang soal privasi klien.”",
    name: "Rina Kartika",
    role: "VP Engineering, FinTrack",
    avatar: "/images/homepage/testimonials/4.webp",
  },
  {
    quote:
      "“Scaling dari 3 ke 20 AI agents? Seamless. Tidak ada downtime, tidak ada ribet. Bayar sesuai pertumbuhan.”",
    name: "Dimas Aditya",
    role: "COO, ScaleUp.id",
    avatar: "/images/homepage/testimonials/5.webp",
  },
  {
    quote:
      "“OpenClaw dashboard + Tencent Cloud infrastruktur = kombinasi sempurna. AI workforce kami jadi reliable banget.”",
    name: "Maya Indah",
    role: "Head of AI, InovasiTech",
    avatar: "/images/homepage/testimonials/6.webp",
  },
  {
    quote:
      "“Support team-nya super responsif. Setiap kali ada pertanyaan, dijawab dalam hitungan menit.”",
    name: "Fajar Nugroho",
    role: "Product Manager, CloudFirst",
    avatar: "/images/homepage/testimonials/1.webp",
  },
  {
    quote:
      "“Kami hemat 60% dibanding self-host. Plus, waktu setup dari seminggu jadi 5 menit.”",
    name: "Lina Hartono",
    role: "CFO, StartupHub",
    avatar: "/images/homepage/testimonials/2.webp",
  },
  {
    quote:
      "“Clawmpany bikin AI agent deployment semudah install app di HP. No coding, no ribet.”",
    name: "Reza Mahendra",
    role: "Founder, AgentFlow",
    avatar: "/images/homepage/testimonials/3.webp",
  },
  {
    quote:
      "“Monitoring real-time dari dashboard sangat membantu. Kami bisa lihat performa semua agents dalam satu layar.”",
    name: "Putri Amelia",
    role: "Ops Lead, DigitalKu",
    avatar: "/images/homepage/testimonials/4.webp",
  },
  {
    quote: "“Integrasinya lengkap. Slack, Google, Zapier — semua bisa. AI agents kami terhubung ke seluruh workflow.”",
    name: "Hendra Wijaya",
    role: "Director, Synrgy Digital",
    avatar: "/images/homepage/testimonials/5.webp",
  },
  {
    quote:
      "“Dari VPS kosong sampai AI agents berjalan — semua dalam satu platform. Ini yang kami cari selama ini.”",
    name: "Dewi Lestari",
    role: "CTO, NexaWorks",
    avatar: "/images/homepage/testimonials/6.webp",
  },
];

function Card({ t }: { t: Testimonial }) {
  return (
    <li className="bg-card flex flex-col justify-between rounded-[16px] p-6">
      <p className="text-foreground text-base font-normal leading-relaxed md:text-base">
        {t.quote}
      </p>
      <div className="mt-6 flex items-center gap-3">
        <img
          src={t.avatar}
          alt={t.name}
          width={36}
          height={36}
          className="rounded-full"
        />
        <div>
          <div className="text-foreground mb-0.5 text-base font-medium leading-tight">
            {t.name}
          </div>
          <div className="text-muted-foreground text-sm font-normal">
            {t.role}
          </div>
        </div>
      </div>
    </li>
  );
}

export default function MetafiTestimonials() {
  const [expanded, setExpanded] = useState(false);

  const VISIBLE = expanded ? TESTIMONIALS.length : 6;

  return (
    <section id="metafi-testimonials" className="bg-accent px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-28">
        <p className="text-tagline mb-4 text-center text-sm font-normal leading-tight sm:text-base">
          Pelanggan Kami
        </p>

        <h2 className="text-foreground mx-auto max-w-4xl text-balance text-center text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Apa Kata<br className="hidden sm:block" />
          Pelanggan Kami
        </h2>

        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center text-base font-normal sm:text-lg">
          Cerita nyata dari pengguna Clawmpany yang sudah membangun AI workforce mereka.
        </p>

        <div className="relative mt-10 md:mt-14">
          {!expanded && (
            <div className="from-accent to-accent/0 pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t" />
          )}

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, VISIBLE).map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </ul>
        </div>

        <div
          className={`relative z-20 flex justify-center transition-all duration-300 ${
            expanded ? "mt-8" : "-mt-6"
          }`}
        >
          <Button onClick={() => setExpanded((s) => !s)}>
            {expanded ? "Tutup" : "Lihat Semua Cerita"}
          </Button>
        </div>
      </div>
    </section>
  );
}

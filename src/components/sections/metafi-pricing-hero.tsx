"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  monthlyPrice?: string;
  annualPrice?: string;
  perUnitMonthly?: string;
  perUnitAnnual?: string;
  features: string[];
  ctaLabel: string;
  ctaHref?: string;
  highlight?: boolean;
  badge?: string;
  blurb?: string;
};

const PLANS: Plan[] = [
  {
    name: "Cozy Studio",
    monthlyPrice: "Rp 300rb",
    annualPrice: "Rp 250rb",
    perUnitMonthly: "Per 30 hari",
    perUnitAnnual: "Per 30 hari (yearly)",
    blurb: "Cocok untuk freelancer & solopreneur.",
    features: [
      "Server VPS Tencent Cloud (2 vCPU, 2GB RAM)",
      "Akses OpenClaw dashboard",
      "Hingga 5 AI agents",
      "Chat langsung dengan agents",
      "Email support",
    ],
    ctaLabel: "Sewa Sekarang",
    ctaHref: "https://app.clawmpany.id",
    highlight: true,
    badge: "🔥 Best Value",
  },
  {
    name: "Business Suite",
    blurb: "Cocok untuk startup & small business.",
    features: [
      "Server VPS Tencent Cloud (2 vCPU, 4GB RAM)",
      "Akses OpenClaw dashboard",
      "Hingga 10 AI agents",
      "Chat langsung dengan agents",
      "Priority support",
    ],
    ctaLabel: "Hubungi Kami",
    ctaHref: "/contact",
  },
];

export default function MetafiPricingHero() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="metafi-pricing-hero" className="bg-background px-6 lg:px-0">
      <div className="container px-0 md:px-6">
        <div className="bg-features-hero relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-6 py-12 text-center sm:px-8 sm:py-16 md:py-20">
            <p className="text-tagline text-sm sm:text-base">Harga</p>
            <h1 className="text-foreground mt-4 text-balance text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-[68px]">
              Harga Sederhana,<br className="hidden sm:block" /> Transparan
            </h1>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg">
              Paket harga untuk setiap tahap pertumbuhan bisnis Anda.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <span
                className={cn(
                  "text-muted-foreground text-sm sm:text-base",
                  !yearly && "text-muted-foreground",
                )}
              >
                Bulanan
              </span>
              <Switch
                checked={yearly}
                onCheckedChange={setYearly}
                aria-label="Toggle yearly billing"
              />
              <span
                className={cn(
                  "text-sm sm:text-base",
                  yearly && "text-foreground",
                )}
              >
                Tahunan
              </span>
            </div>
            {yearly && (
              <div className="text-success mt-4 text-sm font-medium">
                Hemat 30% OFF
              </div>
            )}
          </div>

          {/* Cards */}
          <div className="mx-auto grid max-w-6xl gap-6 px-6 pb-12 sm:px-8 md:grid-cols-2 md:gap-8 md:pb-16">
            {PLANS.map((plan) => {
              const price = yearly ? plan.annualPrice : plan.monthlyPrice;
              const perUnit = yearly ? plan.perUnitAnnual : plan.perUnitMonthly;

              return (
                <article
                  key={plan.name}
                  className={cn(
                    "shadow-card rounded-[20px] border",
                    plan.highlight
                      ? "bg-tagline text-primary-foreground border-transparent"
                      : "bg-card border-border-light",
                  )}
                >
                  {/* two-column interior */}
                  <div className="grid gap-6 p-5 sm:p-6 md:p-7 lg:grid-cols-2">
                    {/* Left column: title/price/blurb */}
                    <div>
                      <div className="flex items-center gap-2">
                        <h3
                          className={cn(
                            "text-lg font-semibold",
                            plan.highlight
                              ? "text-primary-foreground"
                              : "text-foreground",
                          )}
                        >
                          {plan.name}
                        </h3>
                        {yearly && plan.badge && plan.highlight && (
                          <span className="bg-primary-foreground/95 text-tagline rounded-md px-2 py-0.5 text-xs">
                            {plan.badge}
                          </span>
                        )}
                        {yearly && plan.badge && !plan.highlight && (
                          <span className="bg-accent text-foreground rounded-md px-2 py-0.5 text-xs">
                            {plan.badge}
                          </span>
                        )}
                      </div>

                      {!!plan.blurb && (
                        <p
                          className={cn(
                            "mt-2 text-sm",
                            plan.highlight
                              ? "text-primary-foreground/85"
                              : "text-muted-foreground",
                          )}
                        >
                          {plan.blurb}
                        </p>
                      )}

                      {/* Price or Let’s Talk */}
                      {price ? (
                        <>
                          <div
                            className={cn(
                              "mt-6 text-[40px] font-semibold leading-none sm:text-[44px]",
                            )}
                          >
                            {price}
                          </div>
                          {!!perUnit && (
                            <div
                              className={cn(
                                "mt-2 text-sm",
                                plan.highlight
                                  ? "text-primary-foreground/80"
                                  : "text-muted-foreground",
                              )}
                            >
                              {perUnit}
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          <div
                            className={cn(
                              "mt-6 text-[44px] font-medium",
                              plan.highlight
                                ? "text-primary-foreground"
                                : "text-foreground",
                            )}
                          >
                            Let’s Talk
                          </div>
                          <div
                            className={cn(
                              "mt-1 text-sm",
                              plan.highlight
                                ? "text-primary-foreground/80"
                                : "text-muted-foreground",
                            )}
                          >
                            Hubungi kami untuk detail
                          </div>
                        </>
                      )}
                    </div>

                    {/* Right column: features with checkmarks */}
                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <Check
                            className={cn(
                              "mt-0.5 size-4 shrink-0",
                              plan.highlight
                                ? "text-primary-foreground"
                                : "text-tagline",
                            )}
                            strokeWidth={2.5}
                          />
                          <span
                            className={cn(
                              "text-sm sm:text-base",
                              plan.highlight
                                ? "text-primary-foreground/95"
                                : "text-muted-foreground",
                            )}
                          >
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA spans both columns */}
                    <div className="lg:col-span-2">
                      <Button
                        asChild
                        className={cn(
                          "h-12 w-full rounded-[12px]",
                          plan.highlight &&
                            "bg-primary-foreground text-tagline hover:bg-primary-foreground/90",
                        )}
                        variant={plan.highlight ? "default" : "default"}
                      >
                        <a href={plan.ctaHref ?? "#"}>{plan.ctaLabel}</a>
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* spacer */}
        <div className="h-6 sm:h-8" />
      </div>
    </section>
  );
}

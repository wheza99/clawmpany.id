"use client";

type MetafiFeaturePricingProps = {
  overline?: string;
  title?: string;
  description?: string;
  description2?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function MetafiFeaturePricing({
  overline = "Untuk Tim Bisnis",
  title = "Platform AI Workforce End-to-end",
  description = `Mulai deploy AI agents dalam hitungan menit. Gunakan dashboard untuk manage tasks, review hasil, dan chat langsung dengan agents — tanpa coding.`,
  description2 = `Setelah setup, Anda bisa manage semua agents dan melihat report detail langsung dari dashboard.`,
  imageSrc = "/images/features/pricing.webp",
  imageAlt = "Billing form UI preview",
}: MetafiFeaturePricingProps) {
  return (
    <section id="metafi-feature-pricing" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-24">
        <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,500px)]">
          <div className="max-w-xl">
            <p className="text-tagline mb-4 text-sm sm:text-base">{overline}</p>

            <h2 className="text-foreground text-3xl font-medium leading-tight tracking-tight sm:text-5xl md:text-[56px]">
              {title}
            </h2>

            <p className="text-muted-foreground mt-4 text-base sm:text-lg">
              {description}
            </p>
            <p className="text-muted-foreground mt-4 text-base sm:text-lg">
              {description2}
            </p>
          </div>

          <div className="w-full">
            <img
              src={imageSrc}
              alt={imageAlt}
              width={1200}
              height={800}
              className="h-auto w-full object-contain object-left"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

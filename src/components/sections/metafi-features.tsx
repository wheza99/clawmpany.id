import AnimationCheckout from "../ui/animation-checkout";
import AnimationInvoicing from "../ui/animation-invoicing";
import AnimationPaymentLink from "../ui/animation-payment-link";
import AnimationRecurringBilling from "../ui/animation-recurring-bill";

type Feature = {
  title: string;
  description: string;
  image: string;
  href?: string;
};

const FEATURES: Feature[] = [
  {
    title: "Virtual Office",
    description:
      "Bukan sekadar server kosong. Setiap “kantor” sudah dikonfigurasi dan siap dihuni AI agents Anda. Tinggal pindah masuk.",
    image: "/images/homepage/features/animation1.svg",
  },
  {
    title: "AI Agent Management",
    description:
      "Tambah, atur, dan monitor AI agents dari satu dashboard. Seperti HR system untuk workforce digital Anda.",
    image: "/images/homepage/features/recurring-billing.webp",
  },
  {
    title: "Performa 24/7",
    description:
      "Didukung infrastruktur cloud terbaik. AI agents Anda bekerja tanpa henti, tanpa downtime, dengan monitoring real-time.",
    image: "/images/homepage/features/invoicing.webp",
  },
  {
    title: "Keamanan Enterprise",
    description:
      "Data dan komunikasi agents terenkripsi end-to-end. Setiap kantor virtual terisolasi, privasi bisnis Anda terjaga.",
    image: "/images/homepage/features/payment-link.webp",
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  const isCheckout = feature.title === "Checkout";
  const isRecurring = feature.title === "Recurring Billing";
  const isInvoicing = feature.title === "Invoicing";
  const isPayment = feature.title === "Payment Link";

  return (
    <div className="bg-card border-border-light relative flex flex-col rounded-[16px] border p-6 text-left shadow-[0_2px_8px_-1px_rgba(13,13,18,0.04)]">
      <h3 className="text-foreground text-lg font-medium sm:text-xl">
        {feature.title}
      </h3>
      <p className="text-muted-foreground mt-2 text-sm sm:text-base">
        {feature.description}
      </p>

      <div className="relative mt-6 w-full overflow-hidden rounded-[12px]">
        <div className="bg-accent relative h-[220px] w-full sm:h-[260px] md:h-[300px]">
          {isRecurring ? (
            <AnimationRecurringBilling className="absolute inset-0" />
          ) : isCheckout ? (
            <AnimationCheckout className="absolute inset-0" />
          ) : isInvoicing ? (
            <AnimationInvoicing className="absolute inset-0" />
          ) : isPayment ? (
            <AnimationPaymentLink className="absolute inset-0" />
          ) : (
            <img
              src={feature.image}
              alt={feature.title}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
      </div>
    </div>
  );
}

const MetafiFeatures = () => {
  const [f1, f2, f3, f4] = FEATURES;

  return (
    <section id="metafi-features" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-28">
        <p className="text-tagline mb-4 text-center text-sm sm:text-base">
          Fitur
        </p>

        <h2 className="text-foreground mx-auto max-w-3xl text-balance text-center text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Semua yang Anda Butuhkan<br className="hidden sm:block" />
          untuk AI Workforce
        </h2>

        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center text-base sm:text-lg">
          Kelola, monitor, dan scale AI agents Anda dari satu platform. Tanpa ribet server, langsung produktif.
        </p>

        <div className="mt-12 flex flex-col gap-6 md:mt-14 md:gap-8 lg:flex-row">
          <div className="lg:flex-1">
            <FeatureCard feature={f1} />
          </div>
          <div className="lg:w-[500px]">
            <FeatureCard feature={f2} />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-6 md:mt-8 md:gap-8 lg:flex-row">
          <div className="lg:w-[500px]">
            <FeatureCard feature={f3} />
          </div>
          <div className="lg:flex-1">
            <FeatureCard feature={f4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetafiFeatures;

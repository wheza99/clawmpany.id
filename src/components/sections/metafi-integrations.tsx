import { Button } from "@/components/ui/button";

type Integration = {
  name: string;
  description: string;
  icon: string;
  href?: string;
};

const INTEGRATIONS: Integration[] = [
  {
    name: "Tencent Cloud",
    description:
      "Infrastruktur cloud enterprise-grade untuk menjalankan AI agents Anda",
    icon: "/images/homepage/integrations/shopify.svg",
    href: "#",
  },
  {
    name: "Slack integration",
    description:
      "Terima notifikasi dan kontrol AI agents langsung dari channel Slack tim Anda",
    icon: "/images/homepage/integrations/slack.svg",
    href: "#",
  },
  {
    name: "Zapier integration",
    description:
      "Automate workflow AI agents dengan ribuan app lainnya — tanpa coding.",
    icon: "/images/homepage/integrations/zapier.svg",
    href: "#",
  },
  {
    name: "Google integration",
    description:
      "Hubungkan AI agents dengan Google Workspace, Calendar, Drive, dan lainnya.",
    icon: "/images/homepage/integrations/google.svg",
    href: "#",
  },
  {
    name: "Okta integration",
    description:
      "Kelola akses dan autentikasi tim dengan SSO enterprise-ready",
    icon: "/images/homepage/integrations/okta.svg",
    href: "#",
  },
  {
    name: "Stripe integration",
    description:
      "Pembayaran otomatis dan billing terintegrasi untuk subscription kantor virtual.",
    icon: "/images/homepage/integrations/stripe.svg",
    href: "#",
  },
];

function IntegrationCard({ item }: { item: Integration }) {
  return (
    <li className="bg-accent relative rounded-[16px] p-6 pb-8">
      <div className="pointer-events-none absolute -top-8 left-1/2 flex -translate-x-1/2 items-center justify-center">
        <div className="flex items-center justify-center rounded-full">
          <img
            src={item.icon}
            alt={`${item.name} logo`}
            width={60}
            height={60}
          />
        </div>
      </div>

      <div className="pt-6">
        <h3 className="text-foreground text-[20px] font-medium leading-tight">
          {item.name}
        </h3>
        <p className="text-muted-foreground mt-2 text-base font-normal">
          {item.description}
        </p>
      </div>
    </li>
  );
}

const MetafiIntegrations = () => {
  return (
    <section id="metafi-integrations" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 text-center sm:py-20 md:px-6 md:py-28">
        <p className="text-tagline mb-4 text-sm leading-tight sm:text-base">
          Integrasi
        </p>

        <h2 className="text-foreground mx-auto max-w-3xl text-balance text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Satu Platform, Banyak<br className="hidden sm:block" />
          Integrasi Powerful
        </h2>

        <ul className="mt-10 grid gap-12 sm:grid-cols-2 sm:gap-6 md:mt-20 md:gap-8 lg:grid-cols-3 [@media(min-width:1024px)]:[&>li:nth-child(n+4)]:mt-8">
          {INTEGRATIONS.map((item) => (
            <IntegrationCard key={item.name} item={item} />
          ))}
        </ul>

        <p className="text-muted-foreground text-base mx-auto mt-10 max-w-3xl font-normal md:mt-20">
          Hubungkan AI workforce Anda dengan tools yang sudah dipakai. Slack, Google Workspace, Zapier, Stripe, dan banyak lagi.
        </p>

        <div className="mt-6 flex justify-center">
          <Button className="w-full sm:w-auto" asChild>
            <a href="/contact">Hubungi Kami</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MetafiIntegrations;

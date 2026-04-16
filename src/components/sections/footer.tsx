import { Facebook, Linkedin, Twitter } from "lucide-react";

const columns = [
  {
    title: "Produk",
    links: [
      { name: "Fitur", href: "/features" },
      { name: "Harga", href: "/pricing" },
      { name: "Integrasi", href: "/integrations" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { name: "Karir", href: "/careers" },
      { name: "Kontak", href: "/contact" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Kebijakan Privasi", href: "/privacy" },
      { name: "Ketentuan Layanan", href: "/terms" },
      { name: "Kebijakan Cookie", href: "/cookie-policy" },
      { name: "Daftar", href: "/signup" },
      { name: "Login", href: "/login" },
    ],
  },
];

const socials = [
  { Icon: Linkedin, href: "https://linkedin.com" },
  { Icon: Twitter, href: "https://twitter.com" },
  { Icon: Facebook, href: "https://facebook.com" },
];

export const Footer = () => {
  return (
    <footer className="force-light-vars bg-foreground text-primary-foreground px-2.5 lg:px-0">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="md:min-w-[140px]">
            <a href="/" aria-label="Clawmpany">
              <div className="flex items-center gap-2">
                <img
                  src="/images/layout/logo.png"
                  alt="Clawmpany"
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-md"
                  loading="lazy"
                  decoding="async"
                />
                <span className="text-primary-foreground text-lg font-bold">Clawmpany</span>
              </div>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 md:flex md:w-[525px] md:items-start md:justify-between md:gap-0">
            {columns.map((col) => (
              <div key={col.title} className="min-w-0">
                <h3 className="text-muted-foreground mb-4 text-sm font-medium leading-tight">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.name}>
                      <a
                        href={l.href}
                        className="text-primary-foreground/90 hover:text-primary-foreground text-sm font-normal transition-colors"
                      >
                        {l.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-border/40 mt-12 border-t" />

        <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-muted-foreground text-sm font-normal">
            © {new Date().getFullYear()} Clawmpany. All rights reserved
          </p>

          <div className="flex items-center gap-4">
            {socials.map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                aria-label={href}
                className="text-muted-foreground hover:text-primary-foreground transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

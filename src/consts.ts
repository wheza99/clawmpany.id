export const SITE_TITLE = "Clawmpany — Virtual Office untuk AI Agents";
export const SITE_DESCRIPTION =
  "Sewa kantor virtual (VPS) yang dioptimalkan untuk menjalankan AI agents. Powered by OpenClaw — tanpa ribet, tanpa oprek server.";

export const SITE_METADATA = {
  title: {
    default: SITE_TITLE,
    template: "%s | Clawmpany",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Clawmpany",
    "Virtual Office",
    "AI Agents",
    "VPS",
    "Tencent Cloud",
    "OpenClaw",
    "AI Workforce",
  ],
  authors: [{ name: "Clawmpany Team" }],
  creator: "Clawmpany Team",
  publisher: "Clawmpany",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Clawmpany",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clawmpany — Virtual Office untuk AI Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
    creator: "@clawmpany",
  },
};

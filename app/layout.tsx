import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import { Providers } from "./providers";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  applicationName: siteConfig.name,
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: siteConfig.colors.primary,
    },
    { media: "(prefers-color-scheme: dark)", color: siteConfig.colors.primary },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx("h-svh font-sans antialiased", fontSans.variable)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div>
            <Navbar />
          </div>
          <main>{children}</main>
          <footer>
            <p>Footer here</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}

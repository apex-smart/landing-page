import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { ReactNode, useEffect } from "react";
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
      <body
        className={clsx(
          "h-svh font-sans antialiased bg-background",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="px-4 md:px-10 lg:px-16">
            <Navbar />
            <main>{children}</main>
          </div>
          <footer>
            <p className="">Footer here</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}

import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { cookies } from "next/headers";

import { ThemeProvider } from "@/components/Providers";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Toaster as DefaultToaster } from "@/registry/default/ui/Toaster";
import { Toaster as NewYorkToaster } from "@/registry/new-york/ui/Toaster";

import { ExamplesNav } from "@/components/ExamplesNav";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/PageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Analytics } from "@/components/Analytics";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "ZeberMVP",
      url: "https://ruben-zafra.vercel.app",
    },
  ],
  creator: "ZeberMVP",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@zebermvp",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const cookieStore = await cookies();
  const currentTheme = cookieStore.get("currentTheme")?.value || "default";

  return (
    <>
      <html lang="en" suppressHydrationWarning className={currentTheme}>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">
                <div className="container relative">
                  <PageHeader className="page-header pb-8">
                    <PageHeaderHeading className="hidden md:block">
                      Check out some examples.
                    </PageHeaderHeading>
                    <PageHeaderHeading className="md:hidden">
                      Examples
                    </PageHeaderHeading>
                    <PageHeaderDescription>
                      Dashboard, cards, authentication. Some examples built
                      using the components. Use this as a reference when
                      selecting a theme.
                    </PageHeaderDescription>
                  </PageHeader>
                  <section>
                    <ExamplesNav />
                    <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
                      {children}
                    </div>
                  </section>
                </div>
              </div>
              <SiteFooter />
            </div>
            <TailwindIndicator />
            <ThemeSwitcher />
            <Analytics />
            <NewYorkToaster />
            <DefaultToaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}

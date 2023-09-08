"use client";

import "@/styles/globals.css";

import { CustomThemeProvider } from "@/components/CustomThemeProvider";
import { ExamplesNav } from "@/components/ExamplesNav";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/PageHeader";
import { ThemeProvider } from "@/components/Providers";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Toaster as DefaultToaster } from "@/registry/default/ui/Toaster";
import { Toaster as NewYorkToaster } from "@/registry/new-york/ui/Toaster";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  let storedTheme = "default";

  if (typeof window !== "undefined") {
    storedTheme = window.localStorage.getItem("currentTheme") || "default";
  }

  return (
    <>
      <html
        lang="en"
        suppressHydrationWarning
        className={storedTheme || "default"}
      >
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content={siteConfig.description} />
          <title>{siteConfig.name}</title>
        </head>

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
            <CustomThemeProvider>
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
            </CustomThemeProvider>
          </ThemeProvider>
          <ThemeSwitcher />
          <NewYorkToaster />
          <DefaultToaster />
        </body>
      </html>
    </>
  );
}

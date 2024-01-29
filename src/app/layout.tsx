import type { Metadata } from "next";
import { ThemeProvider } from "./providers/ThemeProvider";
import "./globals.css";
import { NavBar } from "@/components/Nav/NavBar";
import Script from "next/script";

export const metadata: Metadata = {
  title: "MetzyS - Portfolio",
  description: "Portfolio",
  icons: {
    icon: "/images/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },
  manifest: "/images/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth sr" suppressHydrationWarning>
      <body className="dark:bg-slate-800">
        <div className="cursor absolute w-[10px] h-[10px] rounded-full z-0">
          <div className="cursor-glow absolute pointer-events-none w-[100px] h-[100px] bg-blue-400 rounded-full z-0 opacity-0 scale-100 translate-x-[-50%] translate-y-[-50%] origin-top-left blur-3xl" />
        </div>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          <main className="flex flex-col pt-12 xs:pt-0 md:max-w-[768px] md:m-auto xl:grid-cols-6 xl:max-w-[1024px] xl:m-auto lg:m-auto">
            {children}
          </main>
        </ThemeProvider>
        <Script src="/script/cursorGlow.js" strategy={"lazyOnload"} />
      </body>
    </html>
  );
}

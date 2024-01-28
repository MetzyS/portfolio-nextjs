import type { Metadata } from "next";
import { ThemeProvider } from "./providers/ThemeProvider";
// import { switchThemeDuration } from "./constants";
import "./globals.css";
import { NavBar } from "@/components/Nav/NavBar";

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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          <main className="flex flex-col pt-12 xs:pt-0 md:max-w-[768px] md:m-auto xl:grid-cols-6 xl:max-w-[1024px] xl:m-auto lg:m-auto">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

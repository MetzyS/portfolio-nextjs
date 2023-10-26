import type { Metadata } from "next";
import { ThemeProvider } from "./providers/ThemeProvider";
// import { switchThemeDuration } from "./constants";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

export const metadata: Metadata = {
  title: "MetzyS - Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-slate-800">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          <main className="pt-12 md:grid md:grid-cols-6 md:max-w-[768px] md:m-auto xl:grid-cols-6 xl:max-w-[1024px] xl:m-auto lg:m-auto">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

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
    <html lang="en">
      <body className="dark:bg-slate-800">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          <main className="pt-14 grid grid-cols-6 xl:grid-cols-12 xl:max-w-[1380px] lg:m-auto">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

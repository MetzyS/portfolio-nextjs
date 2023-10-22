import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        <div className="absolute top-0 h-full w-full z-0"></div>
        {children}
      </body>
    </html>
  );
}

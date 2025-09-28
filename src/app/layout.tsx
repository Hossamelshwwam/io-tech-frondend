import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

type Props = {
  children: React.ReactNode;
};

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IO Tech",
};

export default async function RootLayout({ children }: Props) {
  return (
    <html>
      <body className={`${sans.variable} antialiased`}>{children}</body>
    </html>
  );
}

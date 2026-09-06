import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "แบบประเมินและวินิจฉัยศักยภาพองค์กรผู้ใช้น้ำ",
  description: "ตามพระราชบัญญัติทรัพยากรน้ำ พ.ศ. 2561",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${prompt.variable} antialiased`}>
      <body className="font-prompt bg-slate-50 min-h-screen flex flex-col">{children}</body>
    </html>
  );
}

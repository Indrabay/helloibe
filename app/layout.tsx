import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HelloIbe.me",
  description: "helloibe.me personal project and portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

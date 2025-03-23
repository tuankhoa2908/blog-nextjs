import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

require("dotenv").config({ path: "./src/env" });

export const metadata: Metadata = {
  title: "My Blog Website",
  description: "My blog page using NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

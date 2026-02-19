import type { Metadata } from "next";
import Providers from "../app/providers";
import Header from "../components/Header";
import BottomCartBar from "@/components/BottomCartBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gojiswa Graha Udyog",
  description: "Homemade snacks ordering website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Providers>
          <Header />
          {children}
          <BottomCartBar />
        </Providers>
      </body>
    </html>
  );
}

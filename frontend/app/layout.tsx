import type { Metadata } from "next";
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
        <header className="border-b p-4 font-semibold">
          Gojiswa Graha Udyog
        </header>
        {children}
      </body>
    </html>
  );
}

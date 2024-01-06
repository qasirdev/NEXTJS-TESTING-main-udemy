import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AppWrapper } from "@/context";

const roboto = Roboto({ weight: "400", subsets: ["greek"] });

// openGraph is used by social media
export const metadata: Metadata = {
  title: "My page title",
  description: "This is description",
  openGraph: {
    title: "My website title",
    description: "This is a description",
    siteName: "qasir.co.uk",
    images: [
      {
        url: "/me.jpeg",
        width: 1260,
        height: 800,
      },
      {
        url: "/envelope.svg",
        width: 1260,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}

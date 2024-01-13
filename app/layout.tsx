import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  // metadataBase: new URL("https://optimist.vercel.app"),
  title: {
    default: "Optimist | Complete Programming Challenges",
    template: "%s | Optimist | Complete Programming Challenges",
  },
  description:
    "Optimist - Complete Programming challenges with whatever language or framework you are most comfortable with, and scale up to help build your confidence as a software engineer.",
  // twitter: {
  //   card: "summary_large_image",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

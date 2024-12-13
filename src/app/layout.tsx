import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";
import Footer from "@/components/Footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Flex Coder",
  description: "Code and Share with fellow mates ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
         className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen
         bg-gradient-to-b from-[#07131f] via-[#061a35] to-[#172f4e] text-[#6e93b9] flex flex-col`}

        >
          <ConvexClientProvider>{children}</ConvexClientProvider>


          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { be_Vietnam_Pro } from "@/app/ui/fonts";
import Logo from "@/app/ui/logo";
import { GlobalProvider } from "./provider/AppProvider";

export const metadata: Metadata = {
  title: "Country page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalProvider>
        <body
          className={`${be_Vietnam_Pro.className} bg-1B1D1F relative h-full flex flex-col selection:text-D2D5DA selection:bg-4E80EE/50`}
        >
          <Logo />
          {children}
        </body>
      </GlobalProvider>
    </html>
  );
}

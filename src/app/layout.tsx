import Header from "@/app/_lib/components/Header";
import "@/styles/globals.css";

import { Roboto_Slab } from "next/font/google";
import type { ReactNode, ReactElement } from "react";
import { Toaster } from "sonner";

const Roboto = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "PopChoice",
  description: "A top-notch movie suggestion you won't want to miss",
  icons: [{ rel: "icon", url: "/popChoice.svg" }],
};

export default function RootLayout({ children }: { children: ReactNode }): ReactElement {
  return (
    <html lang="en">
      <body className={`font-sans ${Roboto.variable} bg-[#000C36]`}>
        <Toaster closeButton position="top-center" richColors theme="dark" />
        <Header />
        {children}
      </body>
    </html>
  );
}

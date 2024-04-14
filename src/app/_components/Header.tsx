import { Carter_One } from "next/font/google";
import Image from "next/image";
import { type ReactElement } from "react";

const carter = Carter_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Header(): ReactElement {
  return (
    <header className="mx-auto size-fit max-w-5xl space-y-3 py-12">
      <div className="relative mx-auto aspect-video h-28 w-24">
        <Image src={"/popChoice.svg"} alt="popcorn logo" fill />
      </div>
      <h1 className={`font-sans ${carter.variable} text-5xl text-white`}>PopChoice</h1>
    </header>
  );
}

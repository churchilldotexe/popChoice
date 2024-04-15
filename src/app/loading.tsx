"use client";

import Main from "@/component/Main";
import { type ReactElement } from "react";

export default function HomePage(): ReactElement {
  return (
    <Main className="text-white">
      <div className="flex flex-col items-center gap-y-8">
        <div className="flex w-full flex-col space-y-3">
          <div className="lg:text-xl">What&apos;s your favorite movie and why?</div>
          <div className="animate-pulse resize-none rounded-lg bg-[#3B4877] p-3 text-sm font-light lg:text-base" />
        </div>
        <div className="flex w-full flex-col space-y-3">
          <div className="lg:text-xl">Are you in the mood for something new or a classic? </div>
          <div className="animate-pulse resize-none rounded-lg bg-[#3B4877] p-3 text-sm font-light lg:text-base" />
        </div>
        <div className="flex w-full flex-col space-y-3">
          <div className="lg:text-xl">Do you wanna have fun or do you want something serious?</div>
          <div className="animate-pulse resize-none rounded-lg bg-[#0a0b0e] p-3 text-sm font-light lg:text-base" />
        </div>
        <div className="mt-5">Let&apos;s Go</div>
      </div>
    </Main>
  );
}

"use client";

import Main from "@/component/Main";
import { type ReactElement } from "react";

export default function HomePage(): ReactElement {
  return (
    <Main className="text-white">
      <div className="flex flex-col items-center gap-y-8">
        <div className="flex w-full flex-col space-y-3">
          <p className="lg:text-xl">What&apos;s your favorite movie and why?</p>
          <div className="h-20 w-full  animate-pulse resize-none rounded-lg bg-[#3B4877] p-3 text-sm font-light lg:h-24 lg:text-base" />
        </div>

        <div className="flex w-full flex-col space-y-3">
          <p className="lg:text-xl">Are you in the mood for something new or a classic? </p>
          <div className="h-20 w-full animate-pulse resize-none rounded-lg bg-[#3B4877] p-3 text-sm font-light lg:h-24 lg:text-base" />
        </div>

        <div className="flex w-full flex-col space-y-3">
          <p className="lg:text-xl">Do you wanna have fun or do you want something serious?</p>
          <div className="h-20 w-full animate-pulse resize-none rounded-lg bg-[#3B4877] p-3 text-sm font-light lg:h-24 lg:text-base" />
        </div>

        <button
          type="button"
          className="mt-5 w-full rounded-lg bg-green-400 px-6 py-4 text-3xl font-bold text-slate-950 transition-all hover:scale-105 focus-visible:scale-105 active:scale-95"
          disabled
        >
          Let&apos;s Go
        </button>
      </div>
    </Main>
  );
}

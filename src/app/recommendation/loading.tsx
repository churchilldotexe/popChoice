import Main from "@/component/Main";
import type { ReactElement } from "react";

export default function loading(): ReactElement {
  return (
    <Main className=" max-w-prose text-white">
      <div className="flex flex-col items-center">
        <div className="flex w-80 flex-col  space-y-6 lg:w-[545px]">
          <div className="h-16 animate-pulse rounded-xl bg-[#3B4877] text-center font-bold" />
          <div className="h-60 animate-pulse rounded-xl bg-[#3B4877] " />
        </div>
      </div>
      <button
        type="button"
        className="mt-10 w-full cursor-wait rounded-lg bg-green-400 px-6 py-4 text-3xl font-bold text-slate-950 transition-all hover:scale-105 focus-visible:scale-105 active:scale-95 lg:text-4xl"
        disabled
      >
        Go Again
      </button>
    </Main>
  );
}

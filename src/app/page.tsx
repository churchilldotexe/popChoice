import Button from "@/component/Button";
import Main from "@/component/Main";
import { type ReactElement } from "react";

export default function HomePage(): ReactElement {
  return (
    <Main className=" text-white">
      <form action="" className="flex flex-col items-center gap-y-8">
        <div className="flex w-full flex-col space-y-3">
          <label htmlFor="favorite">What’s your favorite movie and why?</label>
          <textarea
            id="favorite"
            className="  resize-none rounded-lg bg-[#3B4877] p-3 text-sm font-light"
            placeholder="The Shawshank Redemption
Because it taught me to never give up hope no matter how hard life gets"
            rows={3}
          />
        </div>
        <div className="flex w-full flex-col space-y-3">
          <label htmlFor="timeline">Are you in the mood for something new or a classic? </label>
          <textarea
            id="timeline"
            className="  resize-none rounded-lg bg-[#3B4877] p-3 text-sm font-light"
            placeholder="I want to watch movies that were released after 1990"
            rows={3}
          />
        </div>
        <div className="flex w-full flex-col space-y-3">
          <label htmlFor="mood">Do you wanna have fun or do you want something serious?</label>
          <textarea
            id="mood"
            className="  resize-none rounded-lg bg-[#3B4877] p-3 text-sm font-light"
            placeholder="I want to watch something stupid and fun"
            rows={3}
          />
        </div>
        <Button type="submit" className="mt-5 ">
          Let&apos;s Go
        </Button>
      </form>
    </Main>
  );
}

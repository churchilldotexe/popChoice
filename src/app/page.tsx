"use client";

import { createMovieRecom } from "@/app/_lib/action";
import Button from "@/component/Button";
import Main from "@/component/Main";
import { type ReactElement } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";

export default function HomePage(): ReactElement {
  const [state, formAction] = useFormState(createMovieRecom, { message: "" });
  if (state.error !== undefined) {
    toast.error(state.error);
  }

  return (
    <Main className="text-white">
      <form action={formAction} className="flex flex-col items-center gap-y-8">
        <div className="flex w-full flex-col space-y-3">
          <label htmlFor="favorite" className="lg:text-xl">
            What&apos;s your favorite movie and why?
          </label>
          <textarea
            id="favorite"
            name="favorite"
            className="  resize-none rounded-lg bg-[#3B4877] p-3 text-sm font-light lg:text-base"
            placeholder="The Shawshank Redemption
Because it taught me to never give up hope no matter how hard life gets"
            rows={3}
            required
          />
        </div>
        <div className="flex w-full flex-col space-y-3">
          <label htmlFor="timeline" className="lg:text-xl">
            Are you in the mood for something new or a classic?{" "}
          </label>
          <textarea
            id="timeline"
            name="timeline"
            className="  resize-none rounded-lg bg-[#3B4877] p-3 text-sm font-light lg:text-base"
            placeholder="I want to watch movies that were released after 1990"
            rows={3}
            required
          />
        </div>
        <div className="flex w-full flex-col space-y-3">
          <label htmlFor="mood" className="lg:text-xl">
            Do you wanna have fun or do you want something serious?
          </label>
          <textarea
            id="mood"
            name="mood"
            className="  resize-none rounded-lg bg-[#3B4877] p-3 text-sm font-light lg:text-base"
            placeholder="I want to watch something stupid and fun"
            rows={3}
            required
          />
        </div>
        <Button type="submit" className="mt-5">
          Let&apos;s Go
        </Button>
      </form>
    </Main>
  );
}

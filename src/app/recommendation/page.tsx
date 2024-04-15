import Button from "@/component/Button";
import Main from "@/component/Main";
import Link from "next/link";
import { type ReactElement } from "react";

export default function RecommendationPage({
  searchParams: { t: title, s: summary },
}: {
  searchParams: { t: string; s: string };
}): ReactElement {
  return (
    <Main className=" max-w-prose text-white">
      <div className="flex flex-col items-center">
        <div className="flex flex-col space-y-6">
          <h1 className="text-center text-3xl font-bold lg:text-5xl">{title}</h1>
          <p className="mx-auto w-full  text-lg lg:text-xl">{summary}</p>
        </div>
      </div>
      <Button type="button" className="mt-10 lg:text-4xl">
        <Link href="../">Go Again</Link>
      </Button>
    </Main>
  );
}

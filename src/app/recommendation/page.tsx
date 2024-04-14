import Button from "@/component/Button";
import Main from "@/component/Main";
import Link from "next/link";
import { type ReactElement } from "react";

export default function RecommendationPage(): ReactElement {
  return (
    <Main className=" text-white">
      <div className="flex flex-col items-center gap-y-8">
        <div className="flex flex-col space-y-6">
          <h1 className="text-center text-3xl font-bold">School of Rock</h1>
          <p className="w-[40ch] text-lg">
            A fun and stupid movie about a wannabe rocker turned fraud substitute teacher forming a rock band with his
            students to win the Battle of the Bands
          </p>
        </div>
      </div>
      <Button type="button" className="mt-10">
        <Link href="/">Go Again</Link>
      </Button>
    </Main>
  );
}

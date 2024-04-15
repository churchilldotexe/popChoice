"use client";

import { cn } from "@/utils/cn";
import { Loader2 } from "lucide-react";
import type { ReactElement, ReactNode } from "react";
import { useFormStatus } from "react-dom";

type ButtonProps = {
  children: ReactNode;
  type: "submit" | "reset" | "button" | undefined;
  className?: string;
};

function ButtonLoading(): ReactElement {
  return (
    <div className="flex justify-center">
      <Loader2 className="animate-spin text-slate-950" />
      <span className="sr-only" />
    </div>
  );
}

export default function Button({ children, className, type, ...props }: ButtonProps): ReactElement {
  const { pending } = useFormStatus();
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...props}
      className={cn(
        "w-full rounded-lg bg-green-400 px-6 py-4 text-3xl font-bold text-slate-950 transition-all hover:scale-105 focus-visible:scale-105 active:scale-95",
        className
      )}
      disabled={pending}
    >
      {pending ? <ButtonLoading /> : children}
    </button>
  );
}

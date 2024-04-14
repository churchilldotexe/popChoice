import { cn } from "@/utils/cn";
import type { ReactElement, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type: "submit" | "reset" | "button" | undefined;
  className?: string;
};

export default function Button({ children, className, type, ...props }: ButtonProps): ReactElement {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...props}
      className={cn(
        "w-full rounded-lg bg-green-400 px-6 py-4 text-3xl font-bold text-slate-950 transition-all hover:scale-105 focus-visible:scale-105 active:scale-95",
        className
      )}
    >
      {children}
    </button>
  );
}

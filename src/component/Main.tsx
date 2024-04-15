import { cn } from "@/utils/cn";
import type { ReactElement, ReactNode } from "react";

type MainProps = {
  children: ReactNode;
  className?: string;
};
export default function Main({ children, className, ...props }: MainProps): ReactElement {
  return (
    <main {...props} className={cn("mx-auto size-fit max-w-5xl px-6 pb-6", className)}>
      {children}
    </main>
  );
}

// className={`mx-auto size-fit max-w-5xl ${className}`}

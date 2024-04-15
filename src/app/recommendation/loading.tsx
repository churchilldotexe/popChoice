import { Loader2 } from "lucide-react";
import type { ReactElement } from "react";

export default function loading(): ReactElement {
  return (
    <div className="fixed m-auto size-fit">
      <Loader2 className="animate-spin" />
    </div>
  );
}

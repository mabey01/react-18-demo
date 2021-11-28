import { ComponentProps } from "react";

export function Shortcut({ children }: ComponentProps<"div">) {
  return (
    <div className="inline-block bg-gray-50 py-3 px-4 rounded-full text-sm font-semibold">
      {children}
    </div>
  );
}

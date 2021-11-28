import { ComponentProps } from "react";

export function NavigationItem({ children }: ComponentProps<"div">) {
  return (
    <li className="flex items-center space-x-4 px-2 py-4 hover:bg-black hover:text-white cursor-pointer rounded-xl text-sm font-semibold">
      {children}
    </li>
  );
}

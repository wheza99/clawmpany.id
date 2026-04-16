import { type ComponentProps } from "react";

import { cn } from "@/lib/utils";

type HeaderLinkProps = ComponentProps<"a">;

export default function HeaderLink({
  className,
  children,
  ...props
}: HeaderLinkProps) {
  return (
    <a
      {...props}
      className={cn(
        "inline-block text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-200",
        className,
      )}
    >
      {children}
    </a>
  );
}

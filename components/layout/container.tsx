import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("w-full max-w-[var(--hx-max-width)] mx-auto px-6 md:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={cn("py-[var(--hx-section-padding-mobile)] md:py-[var(--hx-section-padding)]", className)}>
      {children}
    </section>
  );
}

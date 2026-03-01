"use client";

import Link from "next/link";
import { siteContent } from "@/content/site";
import { Container } from "./container";
import { Hexagon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-obsidian/80 backdrop-blur-md border-b border-steel">
      <Container className="flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 text-white hover:text-forge-gold transition-colors">
          <Hexagon className="w-6 h-6 text-forge-gold" />
          <span className="font-bold tracking-widest uppercase text-lg">Hephex</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {siteContent.nav.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-forge-gold",
                pathname === item.href ? "text-forge-gold" : "text-ash"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}

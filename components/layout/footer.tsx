import { siteContent } from "@/content/site";
import { Container } from "./container";
import Link from "next/link";
import { Hexagon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-steel bg-obsidian py-12 mt-auto">
      <Container className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 text-white">
            <Hexagon className="w-5 h-5 text-forge-gold" />
            <span className="font-bold tracking-widest uppercase">Hephex</span>
          </Link>
          <p className="text-ash text-sm max-w-xs">
            Premium custom software & AI consulting for mid-market companies.
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-4">
          <nav className="flex flex-wrap gap-6">
            {siteContent.nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-ash hover:text-forge-gold transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
          <a href={`mailto:${siteContent.global.email}`} className="text-sm text-white hover:text-forge-gold transition-colors">
            {siteContent.global.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}

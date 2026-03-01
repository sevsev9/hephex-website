"use client";

import { Container, Section } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteContent } from "@/content/site";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export default function Home() {
  return (
    <>
      <Section className="min-h-[80vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl lg:text-[var(--hx-text-h1)] font-bold mb-6"
            >
              {siteContent.home.hero.headline}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-ash mb-10 max-w-2xl"
            >
              {siteContent.home.hero.problemStat}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild variant="primary">
                <Link href="/contact">Book a Discovery Call</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/how-we-work" className="group">
                  How we work <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section className="bg-graphite/30 border-y border-steel">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteContent.home.proofPoints.map((point, index) => (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-obsidian hover:border-forge-gold/50 transition-colors group">
                  <CardContent className="p-8 flex items-start gap-4">
                    <Terminal className="w-6 h-6 text-forge-gold shrink-0 mt-1" />
                    <p className="text-lg font-medium group-hover:text-white text-ash transition-colors">
                      {point.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

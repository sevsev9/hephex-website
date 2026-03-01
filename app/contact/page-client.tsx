"use client";

import { Container, Section } from "@/components/layout/container";
import { siteContent } from "@/content/site";
import { motion } from "motion/react";
import { Mail } from "lucide-react";

export default function ContactClient() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-6">Let's Build.</h1>
            <p className="text-xl text-ash mb-12 max-w-md">
              Schedule a 30-minute discovery call to discuss your operational bottlenecks and how bespoke software can solve them.
            </p>
            
            <div className="p-8 bg-graphite border border-steel rounded-[var(--hx-radius-card)] inline-flex flex-col gap-4">
              <h3 className="text-lg font-medium text-ash">Direct Inquiry</h3>
              <a 
                href={`mailto:${siteContent.global.email}`}
                className="flex items-center gap-3 text-xl hover:text-forge-gold transition-colors"
              >
                <Mail className="w-6 h-6" />
                {siteContent.global.email}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-graphite border border-steel rounded-[var(--hx-radius-card)] p-2 min-h-[600px] flex items-center justify-center relative overflow-hidden"
          >
            {/* Calendly Embed Placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
              <p className="text-ash mb-4">Calendly Widget Embed</p>
              <a 
                href={siteContent.global.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-forge-gold hover:text-ember underline underline-offset-4"
              >
                Open Booking Page
              </a>
            </div>
            
            {/* Simulated iframe background */}
            <div className="absolute inset-4 border border-dashed border-steel/50 rounded-lg bg-obsidian/50" />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

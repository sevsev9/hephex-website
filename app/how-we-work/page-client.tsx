"use client";

import { Container, Section } from "@/components/layout/container";
import { siteContent } from "@/content/site";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function HowWeWorkClient() {
  return (
    <>
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-6">How We Work</h1>
            <p className="text-xl text-forge-gold font-medium mb-16 max-w-3xl">
              {siteContent.howWeWork.requiredLine}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-steel z-0" />
            {siteContent.howWeWork.phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10"
              >
                <div className="w-12 h-12 rounded-full bg-obsidian border-2 border-forge-gold flex items-center justify-center text-forge-gold font-bold mb-6">
                  0{index + 1}
                </div>
                <h3 className="mb-3">{phase.title}</h3>
                <p className="text-ash text-sm">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <div className="forged-separator" />

      <Section>
        <Container>
          <h2 className="mb-12">The Hephex Difference</h2>
          <div className="mt-12">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Feature</TableHead>
                  <TableHead>Traditional Consulting</TableHead>
                  <TableHead className="text-forge-gold">Hephex</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {siteContent.howWeWork.tableData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.feature}</TableCell>
                    <TableCell className="text-ash">{row.traditional}</TableCell>
                    <TableCell className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-forge-gold" />
                      {row.hephex}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Container>
      </Section>
    </>
  );
}

"use client";

import { Container, Section } from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteContent } from "@/content/site";
import { motion } from "motion/react";
import { Activity, Building2, TrendingUp } from "lucide-react";

export default function WorkClient() {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="mb-6">Selected Work</h1>
          <p className="text-xl text-ash max-w-2xl">
            Anonymized case studies demonstrating concrete ROI through bespoke software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {siteContent.work.caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader className="border-b border-steel/50 pb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-5 h-5 text-forge-gold" />
                    <span className="text-sm font-medium text-ash uppercase tracking-wider">{study.industry}</span>
                  </div>
                  <CardTitle className="text-2xl">{study.scale}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 flex-grow">
                  <ul className="space-y-4 mb-8">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-forge-gold shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Internal note style */}
                  <div className="mt-auto p-4 bg-obsidian border border-steel/50 rounded-md flex items-start gap-3">
                    <Activity className="w-4 h-4 text-ash shrink-0 mt-0.5" />
                    <p className="text-xs text-ash font-mono">{study.note}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

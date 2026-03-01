"use client";

import { Container, Section } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { siteContent } from "@/content/site";
import { motion } from "motion/react";

export default function TeamClient() {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="mb-6">The Team</h1>
          <p className="text-xl text-ash max-w-2xl">
            {siteContent.team.requiredLine}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteContent.team.members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col sm:flex-row">
                <div className="w-full sm:w-48 h-64 sm:h-auto bg-steel relative shrink-0">
                  {/* Placeholder for real photo - B&W with warm tone */}
                  <div className="absolute inset-0 bg-[#1a1814] mix-blend-multiply" />
                  <div className="absolute inset-0 flex items-center justify-center text-ash text-sm">
                    [Photo: {member.name}]
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="mb-1">{member.name}</h3>
                  <p className="text-forge-gold text-sm font-medium mb-4">{member.role}</p>
                  <p className="text-ash">{member.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

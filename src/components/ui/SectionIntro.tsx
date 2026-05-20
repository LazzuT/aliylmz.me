"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionIntroProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionIntro({ title, subtitle, className }: SectionIntroProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("max-w-3xl mb-12 md:mb-16", className)}
    >
      <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl text-zinc-50 tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

"use client"
import * as React from "react"
import { motion } from "framer-motion"

interface TimelineItemProps {
  year: string
  title: string
  description: string
  isLast?: boolean
}

export function TimelineItem({ year, title, description, isLast }: TimelineItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5 }}
      className="flex gap-6 md:gap-8 relative"
    >
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-violet-500/20 border-2 border-violet-500 mt-1" />
        {!isLast && <div className="w-0.5 h-full bg-zinc-800 mt-2 mb-2" />}
      </div>
      <div className={`pb-12 ${isLast ? 'pb-0' : ''}`}>
        <span className="text-violet-400 font-mono text-sm mb-2 block">{year}</span>
        <h4 className="font-medium text-xl text-zinc-50 mb-2">{title}</h4>
        <p className="text-zinc-400 text-base leading-relaxed md:max-w-xl">{description}</p>
      </div>
    </motion.div>
  )
}

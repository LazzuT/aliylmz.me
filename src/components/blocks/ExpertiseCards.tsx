"use client"
import * as React from "react"
import { motion } from "framer-motion"

interface Expertise {
  id: string
  label: string
  description: string
}

interface ExpertiseCardsProps {
  items: Expertise[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export function ExpertiseCards({ items }: ExpertiseCardsProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/50">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
      >
        {items.map((item) => (
          <motion.div 
            key={item.id}
            variants={itemVariants}
            className="group block p-8 rounded-xl bg-zinc-900/30 border border-zinc-800/60 hover:bg-zinc-900/80 hover:border-zinc-700 transition-colors duration-300"
          >
            <h3 className="font-medium text-xl text-zinc-100 mb-3">{item.label}</h3>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

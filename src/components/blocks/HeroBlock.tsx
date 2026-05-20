"use client"
import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface HeroBlockProps {
  title: string
  subtitle: string
  description?: string
}

export function HeroBlock({ title, subtitle, description }: HeroBlockProps) {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center bg-zinc-950 overflow-hidden pt-20 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-zinc-50 tracking-tight leading-snug mb-4">
          {title}
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-zinc-400 text-lg max-w-lg mx-auto mb-3 leading-relaxed"
        >
          {subtitle}
        </motion.p>
        {description && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-zinc-500 text-base max-w-lg mx-auto mb-8 leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4, duration: 0.5 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/projeler" className="inline-flex items-center justify-center h-11 px-6 text-sm rounded-lg font-medium bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors w-full sm:w-auto">
            Çalışmalarım
          </Link>
          <Link href="/iletisim" className="inline-flex items-center justify-center h-11 px-6 text-sm rounded-lg font-medium bg-transparent border border-zinc-700 text-zinc-100 hover:bg-zinc-900 transition-colors w-full sm:w-auto">
            İletişim
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

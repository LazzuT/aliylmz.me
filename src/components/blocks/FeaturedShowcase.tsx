"use client"
import * as React from "react"
import type { Project } from "@/data/projects"
import { motion } from "framer-motion"
import Link from "next/link"
import { Badge } from "@/components/ui/Badge"

interface FeaturedShowcaseProps {
  project: Project
}

export function FeaturedShowcase({ project }: FeaturedShowcaseProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="font-medium text-2xl md:text-3xl text-zinc-50">Öne Çıkan Çalışma</h2>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6 }}
        className="group block rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 relative"
      >
        <Link href={project.link || "/projeler"} className="block" aria-label={`${project.title} projesine git`}>
          <div className="aspect-video relative overflow-hidden bg-zinc-800">
            {/* Using standard img for placeholder. In prod, use next/image */}
            <img 
              src={project.image} 
              alt={project.title}
              className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />
          </div>
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
            <div className="flex gap-2 mb-4 flex-wrap">
              {project.tags.map(tag => (
                <Badge key={tag} className="bg-zinc-950/80 backdrop-blur-sm border-zinc-700">{tag}</Badge>
              ))}
            </div>
            <h3 className="font-medium text-2xl md:text-4xl text-zinc-50 mb-3 group-hover:text-zinc-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-zinc-300 text-base md:text-lg max-w-2xl bg-zinc-950/40 p-1 md:p-2 rounded-md backdrop-blur-md inline-block">
              {project.description}
            </p>
          </div>
        </Link>
      </motion.div>
    </section>
  )
}

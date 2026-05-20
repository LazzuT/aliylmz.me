"use client"
import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import type { Project } from "@/data/projects"
import { Badge } from "@/components/ui/Badge"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5 }}
      className="group block"
    >
      <Link href={project.link || "#"} className="block group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-violet-500 rounded-2xl">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 mb-6 border border-zinc-800/80 group-hover:border-zinc-700 transition-colors">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
        </div>
        <div>
          <div className="flex gap-2 mb-3 flex-wrap">
            {project.tags.map(tag => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <h3 className="font-medium text-xl md:text-2xl text-zinc-50 mb-2 group-hover:text-zinc-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-zinc-400 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Play, Pause } from "lucide-react"
import type { AudioDemo } from "@/data/performances"

export function AudioPlayerRow({ demo, index }: { demo: AudioDemo; index: number }) {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const [duration, setDuration] = React.useState(demo.duration)
  const audioRef = React.useRef<HTMLAudioElement | null>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime
      const total = audioRef.current.duration
      if (total > 0) {
        setProgress((current / total) * 100)
      }
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      const totalSeconds = Math.floor(audioRef.current.duration)
      const minutes = Math.floor(totalSeconds / 60)
      const seconds = totalSeconds % 60
      setDuration(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setProgress(0)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-800/80 hover:border-violet-500/30 transition-all cursor-pointer"
    >
      <button 
        onClick={togglePlay}
        className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-50 group-hover:bg-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
        aria-label={`${demo.title} oynat`}
      >
        {isPlaying ? <Pause size={20} className="ml-0" /> : <Play size={20} className="ml-1" />}
      </button>
      
      <div className="flex-grow">
        <h4 className="font-medium text-lg md:text-xl text-zinc-50 mb-1 group-hover:text-zinc-300 transition-colors">{demo.title}</h4>
        <p className="text-sm text-zinc-400">{demo.client}</p>
      </div>

      <div className="w-full md:w-1/3 flex items-center gap-4 mt-2 md:mt-0">
        <div className="flex-grow h-1.5 rounded-full bg-zinc-800 overflow-hidden relative">
          <div 
            className="absolute top-0 left-0 h-full bg-zinc-400 transition-all duration-100 ease-linear" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-xs font-mono text-zinc-500">{duration}</span>
      </div>
      
      <audio 
        ref={audioRef} 
        src={demo.src} 
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded} 
        className="hidden"
      />
    </motion.div>
  )
}

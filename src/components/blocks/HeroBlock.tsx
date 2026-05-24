"use client"
import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const scriptLines = [
  "ALİ YILMAZ",
  "Oyuncu & Seslendirme Sanatçısı & AI destekli dijital projeler.",
  "Bu sitede çalışmalarımı, projelerimi ve iletişim bilgilerimi bulabilirsiniz."
]

const terminalLines = [
  "guest@aliylmz:~$ cd /root/hidden_system/",
  "guest@aliylmz:~/hidden_system$ ls -la",
  "total 16",
  "drwxr-xr-x 2 root root 4096 May 24 05:42 .",
  "drwxr-xr-x 4 root root 4096 May 24 05:42 ..",
  "-rw-r--r-- 1 root root 8192 May 24 05:42 easteregg.dat",
  "-rw-r--r-- 1 root root  342 May 24 05:42 readme.txt",
  "guest@aliylmz:~/hidden_system$ cat readme.txt",
  "-------- readme.txt --------",
  " ",
  "    \"Ölümcül kanserin tedavisi nedir? Ölümün tedavisi yani..",
  "    Yanıt, ölümsüzlüktür. Arkanda bırakacağın bir miras yaratırsın.",
  "    Hatırlanacak bir hayat yaşarsın ölümsüz olursun.\"",
  "    - John Kramer (Jigsaw)",
  " ",
  " ",
  "    BENİ BURADA BIRAK",
  " ",
  "----------------------------",
  "guest@aliylmz:~/hidden_system$ "
]

function TerminalEasterEgg({ onClose }: { onClose: () => void }) {
  const [visibleLines, setVisibleLines] = React.useState<number>(1);

  React.useEffect(() => {
    // Prevent body scrolling when terminal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  React.useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const currentLine = terminalLines[visibleLines - 1];
      // Slow down on commands, speed up on outputs
      const delay = currentLine?.startsWith("guest@") ? 800 : 100;

      const timeout = setTimeout(() => {
        setVisibleLines(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [visibleLines]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-black text-cyan-500 font-mono text-sm md:text-base p-4 md:p-8 overflow-y-auto selection:bg-cyan-900 selection:text-cyan-100 flex flex-col"
    >
      <div className="flex justify-end mb-4 max-w-4xl w-full mx-auto">
        <button
          onClick={onClose}
          className="text-red-500 hover:text-red-400 font-bold tracking-widest text-xl cursor-pointer hover:scale-110 active:scale-95 transition-transform"
        >
          [ X ] ÇIKIŞ
        </button>
      </div>
      <div className="max-w-4xl w-full mx-auto flex-1 whitespace-pre-wrap">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="mb-1">{line}</div>
        ))}
        {visibleLines === terminalLines.length && (
          <span className="inline-block w-2 h-4 bg-cyan-500 animate-pulse ml-1 align-middle" />
        )}
      </div>
    </motion.div>
  )
}

function TypewriterScript({ onOpenTerminal }: { onOpenTerminal: () => void }) {
  const [displayedLines, setDisplayedLines] = React.useState<string[]>(["", "", ""])
  const [currentLineIndex, setCurrentLineIndex] = React.useState(0)
  const [currentCharIndex, setCurrentCharIndex] = React.useState(0)

  React.useEffect(() => {
    if (currentLineIndex >= scriptLines.length) return

    const currentLine = scriptLines[currentLineIndex]

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev]
          newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1)
          return newLines
        })
        setCurrentCharIndex(prev => prev + 1)
      }, 40)

      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1)
        setCurrentCharIndex(0)
      }, 600)
      return () => clearTimeout(timeout)
    }
  }, [currentLineIndex, currentCharIndex])

  return (
    <div className="text-left max-w-2xl mx-auto w-full font-mono bg-zinc-900/40 rounded-xl border border-zinc-800/80 shadow-2xl relative mb-12 overflow-hidden">
      <div className="w-full h-10 bg-zinc-900/80 flex items-center px-4 border-b border-zinc-800/80">
        <div className="flex gap-2">
          {/* Mac window controls */}
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <motion.div
            className="w-3 h-3 rounded-full bg-green-500 cursor-pointer hover:bg-green-400 shadow-[0_0_8px_rgba(34,197,94,0.5)]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            onClick={onOpenTerminal}
            title="Sistemi Genişlet"
          ></motion.div>
        </div>
        <span className="ml-4 text-xs text-zinc-500 font-sans tracking-widest uppercase">YLMZ</span>
      </div>

      <div className="p-6 md:p-8 flex flex-col gap-4 min-h-[160px]">
        {displayedLines.map((line, index) => {
          if (index > currentLineIndex) return null;

          let formattedLine = <span className="text-zinc-300">{line}</span>;

          if (index === 0) {
            formattedLine = <span className="text-zinc-100 font-semibold tracking-[0.2em] drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{line}</span>;
          } else if (index === 1 && line.startsWith("KARAKTER:")) {
            const parts = line.split("KARAKTER:");
            formattedLine = (
              <>
                <span className="text-violet-400 font-semibold">KARAKTER:</span>
                <span className="text-zinc-50">{parts[1]}</span>
              </>
            );
          } else if (index === 2 && line.startsWith("ROL:")) {
            const parts = line.split("ROL:");
            formattedLine = (
              <>
                <span className="text-violet-400 font-semibold">ROL:</span>
                <span className="text-zinc-300">{parts[1]}</span>
              </>
            );
          }

          return (
            <div key={index} className="text-sm md:text-base leading-relaxed flex items-start">
              <span className="text-zinc-700 w-6 shrink-0 select-none">{index + 1}</span>
              <div className="flex-1">
                {formattedLine}
                {index === currentLineIndex && (
                  <span className="inline-block w-2 h-4 ml-1 bg-violet-400 animate-pulse align-middle" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

interface HeroBlockProps {
  title: string
  subtitle: string
  description?: string
}

export function HeroBlock({ title, subtitle, description }: HeroBlockProps) {
  const [showTerminal, setShowTerminal] = React.useState(false);

  return (
    <section className="relative min-h-[75vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center bg-zinc-950 overflow-hidden pt-24 pb-12">
      <AnimatePresence>
        {showTerminal && <TerminalEasterEgg onClose={() => setShowTerminal(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl mx-auto"
      >
        <TypewriterScript onOpenTerminal={() => setShowTerminal(true)} />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/projeler" className="inline-flex items-center justify-center h-11 px-8 text-sm rounded-lg font-medium bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto">
            Çalışmalarım
          </Link>
          <Link href="/iletisim" className="inline-flex items-center justify-center h-11 px-8 text-sm rounded-lg font-medium bg-transparent border border-zinc-700 text-zinc-100 hover:bg-zinc-900 hover:border-zinc-500 transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto">
            İletişim
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

import { audioDemos, galleryImages } from "@/data/performances"
import { SectionIntro } from "@/components/ui/SectionIntro"
import { AudioPlayerRow } from "@/components/ui/AudioPlayerRow"

export default function PortfolioPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionIntro 
        title="Oyunculuk & Seslendirme" 
        subtitle="Sahnede, kamera önünde ve mikrofon başında gerçekleştirdiğim profesyonel performanslar." 
        className="max-w-4xl"
      />
      
      <section className="mb-16 mt-12">
        <h3 className="font-medium text-xl md:text-2xl text-zinc-50 mb-6">Seslendirme</h3>
        <div className="space-y-4 max-w-4xl">
          {audioDemos.map((demo, idx) => (
            <AudioPlayerRow key={demo.id} demo={demo} index={idx} />
          ))}
        </div>
      </section>

      <section>
        <h3 className="font-medium text-xl md:text-2xl text-zinc-50 mb-6">Oyunculuk</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800/50 group aspect-[4/5] sm:aspect-square"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

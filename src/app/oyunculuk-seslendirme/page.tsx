import { audioDemos, videoPerformances } from "@/data/performances"
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
        
        <div className="mb-8 max-w-4xl">
          {videoPerformances.map((video) => (
            <div key={video.id} className="mb-8">
              <div className="aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 relative">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${video.youtubeId}`} 
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
              <p className="mt-3 text-zinc-400 text-sm md:text-base font-medium pl-1">{video.title}</p>
            </div>
          ))}
        </div>


      </section>
    </div>
  )
}

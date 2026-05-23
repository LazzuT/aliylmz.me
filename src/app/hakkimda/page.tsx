import { siteData } from "@/data/site"
import { SectionIntro } from "@/components/ui/SectionIntro"
import { TimelineItem } from "@/components/ui/TimelineItem"
import { Badge } from "@/components/ui/Badge"

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionIntro
        title="Kimim Ben?"
        className="max-w-4xl mb-8"
      />
      
      <section className="mb-16">
        <div className="max-w-4xl">
          <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-10 whitespace-pre-line">
            {siteData.about.biography.intro}
          </p>

          <h3 className="font-medium text-xl md:text-2xl text-zinc-50 mb-4">Oyunculuk ve Seslendirme</h3>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10">
            {siteData.about.biography.acting}
          </p>

          <h3 className="font-medium text-xl md:text-2xl text-zinc-50 mb-4">Yazılım ve Dijital Projeler</h3>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
            {siteData.about.biography.software}
          </p>
        </div>
      </section>
      <section className="mb-16">
        <h3 className="font-medium text-2xl text-zinc-50 mb-8">Kariyer Özeti</h3>
        <div className="max-w-3xl">
          {siteData.about.timeline.map((item, index) => (
            <TimelineItem
              key={item.year}
              year={item.year}
              title={item.title}
              description={item.description}
              isLast={index === siteData.about.timeline.length - 1}
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="font-medium text-2xl text-zinc-50 mb-6">Uzmanlık Alanlarım</h3>
        <div className="flex flex-wrap gap-3">
          {siteData.about.expertise.map(exp => (
            <Badge key={exp.id} className="text-sm px-4 py-2 border-zinc-700 bg-zinc-900">
              {exp.label}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  )
}

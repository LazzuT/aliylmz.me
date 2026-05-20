import { siteData } from "@/data/site"
import { projectsData } from "@/data/projects"
import { HeroBlock } from "@/components/blocks/HeroBlock"
import { ExpertiseCards } from "@/components/blocks/ExpertiseCards"
import { FeaturedShowcase } from "@/components/blocks/FeaturedShowcase"

export default function Home() {
  const featuredProject = projectsData[0]

  return (
    <>
      <HeroBlock 
        title={siteData.hero.title} 
        subtitle={siteData.hero.subtitle} 
        description={siteData.hero.description}
      />
      <ExpertiseCards items={siteData.about.expertise} />
      <FeaturedShowcase project={featuredProject} />
    </>
  )
}

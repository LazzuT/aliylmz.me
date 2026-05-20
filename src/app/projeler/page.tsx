import { projectsData } from "@/data/projects"
import { SectionIntro } from "@/components/ui/SectionIntro"
import { ProjectCard } from "@/components/ui/ProjectCard"

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionIntro 
        title="Dijital Projeler" 
        subtitle="Yapay zeka araçları ve modern web teknolojileri kullanarak geliştirdiğim yazılım ve tasarım odaklı çalışmalar." 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-12">
        {projectsData.filter(p => !p.isConcept).map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

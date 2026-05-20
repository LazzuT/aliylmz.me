import { contactData } from "@/data/contact"
import { SectionIntro } from "@/components/ui/SectionIntro"
import { ContactCard } from "@/components/ui/ContactCard"

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionIntro 
        title="İletişime Geç" 
        subtitle={contactData.subtitle} 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {contactData.channels.map((channel) => (
          <ContactCard 
            key={channel.id}
            title={channel.title}
            description={channel.description}
            email={channel.email}
            buttonLabel={channel.buttonLabel}
            mailtoSubject={channel.mailtoSubject}
          />
        ))}
      </div>
    </div>
  )
}

import { Mail } from "lucide-react"

interface ContactCardProps {
  title: string;
  description: string;
  email: string;
  buttonLabel: string;
  mailtoSubject: string;
}

export function ContactCard({ title, description, email, buttonLabel, mailtoSubject }: ContactCardProps) {
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(mailtoSubject)}`;
  
  return (
    <div className="flex flex-col bg-zinc-900/30 p-6 md:p-8 rounded-2xl border border-zinc-800 h-full">
      <div className="mb-4">
        <h3 className="text-xl font-medium text-zinc-50 mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
      </div>
      
      <div className="mt-auto pt-6 flex flex-col gap-4">
        <div className="flex items-center gap-2 text-zinc-300">
          <Mail size={16} className="text-zinc-500" />
          <span className="text-sm font-medium">{email}</span>
        </div>
        
        <a 
          href={mailtoLink}
          className="inline-flex items-center justify-center h-11 px-6 text-sm rounded-lg font-medium bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors w-full sm:w-auto"
        >
          {buttonLabel}
        </a>
      </div>
    </div>
  )
}

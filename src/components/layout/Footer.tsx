
import { contactData } from "@/data/contact"

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/50 bg-zinc-950 pt-12 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-12">
          {contactData.channels.map((channel) => (
            <div key={channel.id} className="flex flex-col items-center">
              <span className="text-sm text-zinc-500 mb-1">{channel.title}</span>
              <a 
                href={`mailto:${channel.email}?subject=${encodeURIComponent(channel.mailtoSubject)}`}
                className="text-violet-400 hover:text-violet-300 text-base font-medium transition-colors focus-visible:outline-none focus-visible:underline decoration-violet-400 underline-offset-4"
              >
                {channel.email}
              </a>
            </div>
          ))}
        </div>
        
        <div className="flex gap-6 mb-8">
          {contactData.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-50 transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded px-2"
            >
              {social.platform}
            </a>
          ))}
        </div>
        
        <p className="text-zinc-600 text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Ali Yılmaz. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  )
}

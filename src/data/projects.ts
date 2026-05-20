export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  githubUrl?: string;
  tags: string[];
  isConcept?: boolean;
};

export const projectsData: Project[] = [
  {
    id: "pengui",
    title: "Pengui",
    category: "Web Platformu / Açık Kaynak",
    description: "Linux öğrenmek isteyen kullanıcılar için geliştirdiğim Türkçe komut kütüphanesi ve öğrenim platformu.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80",
    link: "https://pengui.org",
    githubUrl: "https://github.com/LazzuT/pengui",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Linux", "Open Source", "SSG"],
  },
  {
    id: "1",
    title: "Lara YZ Asistan",
    category: "AI Produto",
    description: "Doğal dilde Türkçe konuşabilen, duygusal zekaya sahip özelleştirilmiş yapay zeka asistanı deneyimi.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    tags: ["AI", "Vibe Coding", "Next.js"],
    isConcept: true,
  },
  {
    id: "2",
    title: "Dijital Sahne Portalı",
    category: "Web Uygulaması",
    description: "Bağımsız tiyatro ekipleri için geliştirilmiş, biletleme ve oyun takibi yapılabilen modern platform.",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80",
    tags: ["React", "TailwindCSS", "UI/UX"],
    isConcept: true,
  },
  {
    id: "3",
    title: "Kişisel Marka Mimarisi",
    category: "Frontend",
    description: "Sinematik ve teknolojik konseptlerin birleştiği, tamamen modüler portfolyo altyapısı.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80",
    tags: ["Design System", "Framer Motion"],
    isConcept: true,
  }
];


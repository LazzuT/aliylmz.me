export type AudioDemo = {
  id: string;
  title: string;
  client: string;
  duration: string;
  src: string;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  aspectRatio: "square" | "video" | "portrait";
};

export const audioDemos: AudioDemo[] = [
  { id: "a1", title: "Head & Shoulders", client: "Reklam Seslendirmesi", duration: "0:30", src: "/audio/headshouldershreklam.wav" },
  { id: "a2", title: "Fanatik", client: "Reklam Seslendirmesi", duration: "1:15", src: "/audio/fanatikreklami.wav" },
  { id: "a3", title: "Off Sinekkovar", client: "Reklam Seslendirmesi", duration: "0:45", src: "/audio/sivrisinekreklami.wav" },
];

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80", alt: "Sahnede performans", aspectRatio: "video" },
  { id: "g2", src: "https://images.unsplash.com/photo-1528645602411-bf35a4d6f830?auto=format&fit=crop&q=80", alt: "Stüdyo ses kaydı", aspectRatio: "portrait" },
  { id: "g3", src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80", alt: "Sinematik çekim", aspectRatio: "video" },
  { id: "g4", src: "https://images.unsplash.com/photo-1516280440502-861f185dcbdf?auto=format&fit=crop&q=80", alt: "Kamera önü", aspectRatio: "square" },
];

export type VideoPerformance = {
  id: string;
  title: string;
  youtubeId: string;
};

export const videoPerformances: VideoPerformance[] = [
  { id: "v1", title: "Ali Efe Yılmaz Monolog Videosu", youtubeId: "POmXkQ-KK3s" }
];

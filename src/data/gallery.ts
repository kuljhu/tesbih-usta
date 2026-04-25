export type GalleryItem = {
  id: string;
  src: string | null;       // null → placeholder
  alt: string;
  material: string;
  cut: string;
  aspect: "tall" | "wide" | "square"; // masonry yükseklik tonu
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: null,
    alt: "Damla kehribar miskevi kesim tesbih",
    material: "Damla Kehribar",
    cut: "Şalgamî",
    aspect: "tall",
  },
  {
    id: "g2",
    src: null,
    alt: "Abanoz kütük kesim tesbih",
    material: "Abanoz",
    cut: "Kütük",
    aspect: "square",
  },
  {
    id: "g3",
    src: null,
    alt: "Kırmızı mercan kürevî tesbih detay",
    material: "Kırmızı Mercan",
    cut: "Kürevî",
    aspect: "tall",
  },
  {
    id: "g4",
    src: null,
    alt: "Öd ağacı beyzi kesim tesbih",
    material: "Öd Ağacı",
    cut: "Beyzi",
    aspect: "wide",
  },
  {
    id: "g5",
    src: null,
    alt: "Kehribar damla kesim habbe detay",
    material: "Kehribar",
    cut: "Damla",
    aspect: "square",
  },
  {
    id: "g6",
    src: null,
    alt: "Pelesenk arpa kesim tesbih",
    material: "Pelesenk",
    cut: "Arpa",
    aspect: "tall",
  },
  {
    id: "g7",
    src: null,
    alt: "Firuze faseteli tesbih",
    material: "Firuze",
    cut: "Faseteli",
    aspect: "square",
  },
  {
    id: "g8",
    src: null,
    alt: "Gül odunu sığırcık kesim tesbih",
    material: "Gül Odunu",
    cut: "Sığırcık",
    aspect: "tall",
  },
  {
    id: "g9",
    src: null,
    alt: "Katalin şalgamî eski Osmanlı tesbih",
    material: "Katalin",
    cut: "Şalgamî",
    aspect: "wide",
  },
  {
    id: "g10",
    src: null,
    alt: "Lapis lazuli küre tesbih",
    material: "Lapis Lazuli",
    cut: "Kürevî",
    aspect: "square",
  },
  {
    id: "g11",
    src: null,
    alt: "Mamut dişi beyzi kesim tesbih",
    material: "Mamut Dişi",
    cut: "Beyzi",
    aspect: "tall",
  },
  {
    id: "g12",
    src: null,
    alt: "Oltu taşı fıçı kesim tesbih",
    material: "Oltu Taşı",
    cut: "Fıçı",
    aspect: "square",
  },
];

// Gerçek fotoğraf gelince: src: "/images/gallery/g1.jpg" yap

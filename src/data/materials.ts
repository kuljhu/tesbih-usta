export type Material = {
  id: string;
  name: string;
  origin: string;
  hardness: string; // Mohs veya tanımlayıcı
  scent: string | null;
  color: string;
  rarity: "yaygın" | "nadir" | "çok nadir";
  note: string;
  accent: string; // Tailwind arbitrary renk (bg için)
};

export const materials: Material[] = [
  {
    id: "kehribar",
    name: "Kehribar",
    origin: "Baltık Denizi, Polonya & Letonya",
    hardness: "2–2.5 Mohs",
    scent: "Hafif reçineli, ısıyla belirginleşir",
    color: "Bal sarısı — koyu kiraz arası",
    rarity: "nadir",
    note:
      "Milyon yıllık çam reçinesinden oluşan organik bir taş. Işığa tutulduğunda içinden parlayan tonlar tespih için eşsiz bir derinlik sunar.",
    accent: "#c9822a",
  },
  {
    id: "sedef",
    name: "Sedef",
    origin: "Avustralya, Filipinler",
    hardness: "3.5 Mohs",
    scent: null,
    color: "Krem beyaz — pembe iridyum",
    rarity: "yaygın",
    note:
      "İnci istiridyesinin iç tabakasından elde edilir. Işıkla birlikte canlanan gökkuşağı yansımaları her açıdan farklı bir görünüm yaratır.",
    accent: "#d4c5b0",
  },
  {
    id: "gul-odunu",
    name: "Gül Odunu",
    origin: "Hindistan, Brezilya",
    hardness: "Orta-sert",
    scent: "Tatlı, hafif çiçeksi — kalıcı",
    color: "Açık pembe — koyu kızıl kahve",
    rarity: "nadir",
    note:
      "CITES koruma listesinde yer alan bu nadir odun, her zikir seansında hafif kokusuyla zihinsel dinginlik sağlar. Habbeler kullandıkça parlar.",
    accent: "#8b4254",
  },
  {
    id: "oud",
    name: "Oud (Agarwood)",
    origin: "Vietnam, Kamboçya, Hindistan",
    hardness: "Yumuşak-orta",
    scent: "Derin, dumanlı, odunsu — dünyaca en değerli koku",
    color: "Koyu kahve — neredeyse siyah",
    rarity: "çok nadir",
    note:
      "Phialophora fungi enfeksiyonuna yanıt olarak reçineyle dolan ağaç özünden elde edilir. Gram başına altından pahalı olabilen bir hammadde.",
    accent: "#3d1f0d",
  },
  {
    id: "mercan",
    name: "Kırmızı Mercan",
    origin: "Akdeniz, Japonya",
    hardness: "3–4 Mohs",
    scent: null,
    color: "Kan kırmızısı — açık pembe mercan",
    rarity: "çok nadir",
    note:
      "Corallium rubrum türü, el ile toplanır ve her habbesi ayrı ayrı şekillendirilir. Derinliğine göre rengi değişen organik bir deniz hazinesi.",
    accent: "#c0392b",
  },
  {
    id: "firuze",
    name: "Firuze",
    origin: "İran (Nişapur), ABD (Arizona)",
    hardness: "5–6 Mohs",
    scent: null,
    color: "Gökyüzü mavisi — yeşilimsi mavi",
    rarity: "nadir",
    note:
      "Bakır minerallerinin oluşturduğu opak bir taş. İran firuzeleri dünyada en aranan ve en değerli sayılır; matriks desenleri her taşı benzersiz kılar.",
    accent: "#2980b9",
  },
  {
    id: "abanoz",
    name: "Abanoz",
    origin: "Afrika (Gabon, Kamerun)",
    hardness: "Çok sert",
    scent: "Nötr — hafif toprak kokusu",
    color: "Jet siyah",
    rarity: "nadir",
    note:
      "Dünyanın en ağır ve en sert odunlarından biri. Polisajla elde edilen ayna parlaklığı ve soğuk dokusu, premium tespihte zarafeti simgeler.",
    accent: "#1a1208",
  },
  {
    id: "damla-kehribar",
    name: "Damla Kehribar",
    origin: "Yemen, Doğu Afrika",
    hardness: "2–2.5 Mohs",
    scent: "Güçlü reçineli, tütsü benzeri",
    color: "Şeffaf limon — koyu bal",
    rarity: "çok nadir",
    note:
      "Yemen damla kehribarı, Baltık kehribarından farklı bir kimyasal yapıya sahiptir ve daha güçlü bir koku içerir. Koleksiyoncular arasında en çok aranan çeşit.",
    accent: "#d4a017",
  },
];

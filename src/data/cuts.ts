export type CutEra = "klasik-osmanlı" | "istanbul-atölye" | "evrensel";

export type Cut = {
  id: string;
  name: string;
  ottoman: string;      // Osmanlıca/teknik adı
  era: CutEra;
  form: string;         // Geometrik tanım
  note: string;
  materials: string[];  // Hangi malzemelerle örtüşür
  // CSS border-radius değerleri — soyut habbe formu için
  shape: string;
};

export const eraLabel: Record<CutEra, string> = {
  "klasik-osmanlı": "Klasik Osmanlı",
  "istanbul-atölye": "İstanbul Atölyesi",
  "evrensel": "Evrensel",
};

export const cuts: Cut[] = [
  {
    id: "miskevi",
    name: "Miskevi",
    ottoman: "مسکوی",
    era: "klasik-osmanlı",
    form: "Ortası şişkin, uçları hafif sivri — misk tohumuna öykünür",
    note: "İmparatorluk atölyelerinin imzası sayılır. Adı misk kokusundan gelir; saray tesbihlerinde kehribar ve öd ağacıyla birlikte kullanılmıştır.",
    materials: ["Kehribar", "Öd Ağacı", "Gül Odunu"],
    shape: "50% 50% 50% 50% / 40% 40% 60% 60%",
  },
  {
    id: "salgami",
    name: "Şalgamî",
    ottoman: "شلغمی",
    era: "klasik-osmanlı",
    form: "Gövdesi şişkin, iki ucu belirgin biçimde sivrilen — şalgam formu",
    note: "Klasik Osmanlı dönemi tesbihlerinde yaygın bir kesim. Sığırcıktan daha geniş gövdesiyle ayırt edilir. Kahvehane kültüründe tercih edilen formlar arasında yer alır.",
    materials: ["Abanoz", "Oltu Taşı", "Şimşir", "Bakelit"],
    shape: "50% 50% 50% 50% / 35% 35% 65% 65%",
  },
  {
    id: "sigaracik",
    name: "Sığırcık (İstanbul Kesim)",
    ottoman: "سیغیرجق",
    era: "istanbul-atölye",
    form: "Uçları huni gibi daralan ince bir bel — iki yönlü konik",
    note: "İstanbul atölyelerinin zor ve prestijli kesimi. Usta işçiliği gerektirir; denge ve simetri küçük bir sapmayla kaybolur. Koleksiyoncular bu kesimi eline geçirebilmek için yıllarca bekler.",
    materials: ["Kehribar", "Şimşir", "Mamut Dişi", "Galalith"],
    shape: "50% 50% 50% 50% / 50% 50% 50% 50%",
  },
  {
    id: "beyzi",
    name: "Beyzi",
    ottoman: "بيضی",
    era: "evrensel",
    form: "Zeytin çekirdeği — simetrik oval, kenarlara doğru incelir",
    note: "Tutuş konforu en yüksek kesim olarak bilinir. Osmanlı döneminden bu yana kullanımda; hem günlük hem de koleksiyonluk tesbihlerde tercih edilir.",
    materials: ["Tüm ahşaplar", "Kemik grubu", "Taş grubu"],
    shape: "50%",
  },
  {
    id: "kurevi",
    name: "Kürevî",
    ottoman: "کرويی",
    era: "evrensel",
    form: "Tam küre — açı ve yön fark etmez",
    note: "En kadim form. Veysel Karanî'nin hurma çekirdeğinden bu yana değişmeyen geometri. Malzemenin dokusunu ve rengini en saf haliyle öne çıkarır.",
    materials: ["Tüm malzemeler"],
    shape: "50%",
  },
  {
    id: "arpa",
    name: "Arpa",
    ottoman: "ارپا",
    era: "klasik-osmanlı",
    form: "İnce, uzun, hafif bombeli — arpa tanesinin formu",
    note: "Bileklik ve minyatür tesbihlerde tercih edilen küçük ölçekli kesim. Osmanlı döneminde ince işçilik gerektiren parçalarda kullanılmıştır; ustanın sabır sınavı sayılır.",
    materials: ["Sedef", "Firuze", "Akik", "Kehribar"],
    shape: "50% 50% 50% 50% / 30% 30% 70% 70%",
  },
  {
    id: "armudi",
    name: "Armudî",
    ottoman: "ارمودی",
    era: "istanbul-atölye",
    form: "Armut damlası — alt yarısı şişkin, üst yarısı sivrilen",
    note: "Osmanlı sonrası İstanbul atölyelerinde geliştirilmiş form. Elin tuttuğu yerin şişkin tarafı olması ergonomik açıdan bilinçli bir tercihti; zikir seanslarında yorgunluğu azaltır.",
    materials: ["Damla Kehribar", "Gül Odunu", "Mercan"],
    shape: "50% 50% 50% 50% / 60% 60% 40% 40%",
  },
  {
    id: "damla",
    name: "Damla (Gözyaşı)",
    ottoman: "داملا",
    era: "evrensel",
    form: "Gözyaşı — üst sivri, alt geniş ve yuvarlak",
    note: "Kehribar için özellikle uygun bir kesim; malzemenin içindeki ışığı alt yarıda toplar. Sıkma ve ateş kehribarda sıkça kullanılır.",
    materials: ["Kehribar", "Damla Kehribar", "Oltu Taşı"],
    shape: "50% 50% 50% 50% / 40% 40% 60% 60%",
  },
  {
    id: "faseteli",
    name: "Faseteli (Kesme)",
    ottoman: "فاسيتلی",
    era: "istanbul-atölye",
    form: "Çok yüzlü — 8, 16, 32 veya 64 yüzey; ışığı kırar ve dağıtır",
    note: "Kristal, firuze ve akik gibi sert taşlara özgü kesim. Yüzey sayısı arttıkça işçilik ve fiyat yükselir. 64 yüzlü kesim saray siparişlerine mahsustur.",
    materials: ["Firuze", "Akik", "Lapis Lazuli", "Ametist", "Katalin"],
    shape: "50%",
  },
  {
    id: "kutuk",
    name: "Kütük",
    ottoman: "کوتوک",
    era: "evrensel",
    form: "Düz silindir — iki ucu flat, gövde sabit çaplı",
    note: "Yalın ve geometrik formu bazı esnaf tesbihlerin karakteri olmuştur. Modern tasarımda minimal estetiğe uyan tek geleneksel kesim.",
    materials: ["Abanoz", "Şimşir", "Katalin", "Bakelit"],
    shape: "8px",
  },
  {
    id: "fici",
    name: "Fıçı",
    ottoman: "فيچی",
    era: "evrensel",
    form: "Kısa silindir, ortası hafif şişkin — fıçı formu",
    note: "Kütükle akraba ancak ortası bombeli. Ele oturan yapısı günlük kullanımda pratik; özellikle ağır taş tesbihlerde tercih edilir.",
    materials: ["Oltu Taşı", "Oniks", "Abanoz", "Deve Kemiği"],
    shape: "40% 40% 40% 40% / 30% 30% 30% 30%",
  },
];

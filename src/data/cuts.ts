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
    note: "Adı misk kokusundan gelir. Saray tesbihlerinde kehribar ve öd ağacıyla buluşturulmuş — imparatorluk atölyelerinin tercihiydi. Usta işi mi değil mi, imamesine bakın.",
    materials: ["Kehribar", "Öd Ağacı", "Gül Odunu"],
    shape: "50% 50% 50% 50% / 40% 40% 60% 60%",
  },
  {
    id: "salgami",
    name: "Şalgamî",
    ottoman: "شلغمی",
    era: "klasik-osmanlı",
    form: "Gövdesi şişkin, iki ucu belirgin biçimde sivrilen — şalgam formu",
    note: "Klasik Osmanlı. İnce ve uzun — parmaklar arasında kendi ritmine girer, fark edilmeden. Kahvehane kültüründe bu kadar yaygınlaşmasının sebebi bu olabilir.",
    materials: ["Abanoz", "Oltu Taşı", "Şimşir", "Bakelit"],
    shape: "50% 50% 50% 50% / 35% 35% 65% 65%",
  },
  {
    id: "sigaracik",
    name: "Sığırcık (İstanbul Kesim)",
    ottoman: "سیغیرجق",
    era: "istanbul-atölye",
    form: "Uçları huni gibi daralan ince bir bel — iki yönlü konik",
    note: "İstanbul atölyelerinin en zor kesimi. Başparmak yerini bilir — düşünmeden. Denge ve simetri küçük bir sapmayla kaybolur; usta işçiliği gerektirir. Koleksiyoncular yıllarca bekler, haklılar.",
    materials: ["Kehribar", "Şimşir", "Mamut Dişi", "Galalith"],
    shape: "50% 50% 50% 50% / 50% 50% 50% 50%",
  },
  {
    id: "beyzi",
    name: "Beyzi",
    ottoman: "بيضی",
    era: "evrensel",
    form: "Zeytin çekirdeği — simetrik oval, kenarlara doğru incelir",
    note: "Avuçta nasıl oturduğunu ilk tuttuğunuzda anlarsınız. Tutuş konforu en yüksek kesim — Osmanlı'dan bu yana günlük kullanımda kalmasının sebebi bu.",
    materials: ["Tüm ahşaplar", "Kemik grubu", "Taş grubu"],
    shape: "50%",
  },
  {
    id: "kurevi",
    name: "Kürevî",
    ottoman: "کرويی",
    era: "evrensel",
    form: "Tam küre — açı ve yön fark etmez",
    note: "En eski form, en değişmez geometri. El nereye gideceğini kendiliğinden bulur — düşünmek gerekmez. Malzemenin dokusunu ve rengini olduğu gibi gösterir, saklamaz.",
    materials: ["Tüm malzemeler"],
    shape: "50%",
  },
  {
    id: "arpa",
    name: "Arpa",
    ottoman: "ارپا",
    era: "klasik-osmanlı",
    form: "İnce, uzun, hafif bombeli — arpa tanesinin formu",
    note: "En ince, en küçük. Bir milimetrelik sapma bütün dengeyi bitirir — ustanın sabır sınavıdır. Bu yüzden doğru yapılmış bir arpa kesim tesbihi elde tutmak başka hissettiriyor.",
    materials: ["Sedef", "Firuze", "Akik", "Kehribar"],
    shape: "50% 50% 50% 50% / 30% 30% 70% 70%",
  },
  {
    id: "armudi",
    name: "Armudî",
    ottoman: "ارمودی",
    era: "istanbul-atölye",
    form: "Armut damlası — alt yarısı şişkin, üst yarısı sivrilen",
    note: "Şişkin tarafı avuca, ince tarafı yukarı — elin tuttuğu yer bilinçli düşünülmüş. Uzun zikir seanslarında bu fark hissedilir. İstanbul atölyelerinde geliştirilmiş; sebebi ergonomik.",
    materials: ["Damla Kehribar", "Gül Odunu", "Mercan"],
    shape: "50% 50% 50% 50% / 60% 60% 40% 40%",
  },
  {
    id: "damla",
    name: "Damla (Gözyaşı)",
    ottoman: "داملا",
    era: "evrensel",
    form: "Gözyaşı — üst sivri, alt geniş ve yuvarlak",
    note: "Kehribarın kendi istediği form gibi — içindeki ışığı alt yarıda toplar. Bakınca koyamazsınız. Sıkma ve ateş kehribarda sıkça tercih edilmesinin sebebi bu.",
    materials: ["Kehribar", "Damla Kehribar", "Oltu Taşı"],
    shape: "50% 50% 50% 50% / 40% 40% 60% 60%",
  },
  {
    id: "faseteli",
    name: "Faseteli (Kesme)",
    ottoman: "فاسيتلی",
    era: "istanbul-atölye",
    form: "Çok yüzlü — 8, 16, 32 veya 64 yüzey; ışığı kırar ve dağıtır",
    note: "Her yüzey ışığı farklı kırıyor — her tuttuğunuzda başka bir tesbih. Kristal, firuze, akik gibi sert taşlar için biçilmiş kaftan. 64 yüzlü kesim saray siparişlerine mahsustur; bunu elde tutunca anlarsınız.",
    materials: ["Firuze", "Akik", "Lapis Lazuli", "Ametist", "Katalin"],
    shape: "50%",
  },
  {
    id: "kutuk",
    name: "Kütük",
    ottoman: "کوتوک",
    era: "evrensel",
    form: "Düz silindir — iki ucu flat, gövde sabit çaplı",
    note: "Sade ve dürüst. Malzemenin kendini göstermesine izin verir — ne fazla, ne eksik. Minimal estetiğe uyan tek geleneksel kesim; bugün de işe yarıyor.",
    materials: ["Abanoz", "Şimşir", "Katalin", "Bakelit"],
    shape: "8px",
  },
  {
    id: "fici",
    name: "Fıçı",
    ottoman: "فيچی",
    era: "evrensel",
    form: "Kısa silindir, ortası hafif şişkin — fıçı formu",
    note: "Ortanın hafif şişliği avuca oturur — fark etmeden hissedersiniz. Kütüğün biraz daha düşünülmüş hali. Ağır taş tesbihlerde bu fark büyür.",
    materials: ["Oltu Taşı", "Oniks", "Abanoz", "Deve Kemiği"],
    shape: "40% 40% 40% 40% / 30% 30% 30% 30%",
  },
];

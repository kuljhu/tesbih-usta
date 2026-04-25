"use client";

// Üç ortografik görünüm — her kesim için:
// 1. Ön (Y-X düzlemi) : karakteristik profil silüeti
// 2. Üst (X-Z düzlemi): tepeden yuvarlak kesit (faseteli hariç)
// 3. 3B perspektif    : profil + yatay ekvator elipsleri

type ViewSpec = {
  front: React.ReactNode;   // Y-X profil şekli
  equatorRx: number;        // en geniş noktada yarıçap (üst görünüm için)
  equatorCy: number;        // en geniş noktanın Y konumu (0-66 ölçeğinde)
  topOverride?: React.ReactNode; // faseteli için çokgen üst görünüm
};

// viewBox "0 0 50 66" — tüm ön/3B görünümler
// viewBox "0 0 50 50" — üst görünüm
const views: Record<string, ViewSpec> = {

  // ── Sığırcık: yayvan (yassı bikoni — kısa ve geniş) ───────────────────
  sigaracik: {
    front: <path d="M25,16 C46,17 47,49 25,50 C4,49 5,17 25,16 Z" />,
    equatorRx: 22,
    equatorCy: 33,
  },

  // ── Şalgamî: dik (ince spindle — uzun ve dar) ─────────────────────────
  salgami: {
    front: <path d="M25,4 C37,10 38,56 25,62 C13,56 14,10 25,4 Z" />,
    equatorRx: 13,
    equatorCy: 33,
  },

  // ── Miskevi ────────────────────────────────────────────────────────────
  miskevi: {
    front: <path d="M25,10 C33,10 40,22 40,37 C40,50 33,58 25,58 C17,58 10,50 10,37 C10,22 17,10 25,10 Z" />,
    equatorRx: 15,
    equatorCy: 37,
  },

  // ── Kürevî: tam küre ───────────────────────────────────────────────────
  kurevi: {
    front: <circle cx="25" cy="33" r="22" />,
    equatorRx: 22,
    equatorCy: 33,
  },

  // ── Beyzi: dikey elips ─────────────────────────────────────────────────
  beyzi: {
    front: <ellipse cx="25" cy="33" rx="16" ry="28" />,
    equatorRx: 16,
    equatorCy: 33,
  },

  // ── Arpa: çok dar uzun ─────────────────────────────────────────────────
  arpa: {
    front: <path d="M25,5 C28,16 28,50 25,61 C22,50 22,16 25,5 Z" />,
    equatorRx: 3,
    equatorCy: 33,
  },

  // ── Armudî: armut ─────────────────────────────────────────────────────
  armudi: {
    front: <path d="M25,8 C31,8 40,22 40,48 A15,11 0 0,1 10,48 C10,22 19,8 25,8 Z" />,
    equatorRx: 15,
    equatorCy: 50,
  },

  // ── Damla: gözyaşı ────────────────────────────────────────────────────
  damla: {
    front: <path d="M25,6 C30,10 40,36 35,54 A12,10 0 0,1 15,54 C10,36 20,10 25,6 Z" />,
    equatorRx: 12,
    equatorCy: 52,
  },

  // ── Kütük: silindir ───────────────────────────────────────────────────
  kutuk: {
    front: <rect x="8" y="12" width="34" height="42" rx="3" />,
    equatorRx: 17,
    equatorCy: 33,
  },

  // ── Fıçı: kavisli silindir ────────────────────────────────────────────
  fici: {
    front: <path d="M8,12 H42 C49,20 51,27 49,33 C51,39 49,46 42,54 H8 C1,46 -1,39 1,33 C-1,27 1,20 8,12 Z" />,
    equatorRx: 24,
    equatorCy: 33,
  },

  // ── Faseteli: oktagon + iç çizgiler ───────────────────────────────────
  faseteli: {
    front: (
      <>
        <polygon points="25,4 40,11 44,33 40,55 25,62 10,55 6,33 10,11" />
        <line x1="25" y1="4"  x2="25" y2="62" strokeWidth="0.5" />
        <line x1="6"  y1="33" x2="44" y2="33" strokeWidth="0.5" />
        <line x1="10" y1="11" x2="40" y2="55" strokeWidth="0.4" />
        <line x1="40" y1="11" x2="10" y2="55" strokeWidth="0.4" />
      </>
    ),
    equatorRx: 19,
    equatorCy: 33,
    topOverride: (
      <polygon points="25,6 38,11 44,25 38,39 25,44 12,39 6,25 12,11" />
    ),
  },
};

// ── Tek kesim için üçlü görünüm bileşeni ──────────────────────────────────
type Props = {
  cutId: string;
  size?: number; // ön/3B görünüm yüksekliği (piksel)
};

const STROKE   = "#c9a84c";
const STROKE2  = "#e2c97e";
const OPACITY  = 0.85;
const GUIDE_OP = 0.12;
const FILL     = "rgba(201,168,76,0.07)";

export default function CutShape({ cutId, size = 58 }: Props) {
  const spec = views[cutId];
  if (!spec) return null;

  const w    = size * (50 / 66);   // ön/3B genişlik
  const h    = size;               // ön/3B yükseklik
  const sq   = w;                  // üst görünüm kare

  const eqRy = Math.max(spec.equatorRx * 0.22, 2.5); // perspektif elips yüksekliği

  return (
    <div className="flex items-end gap-2.5">

      {/* ── 1. ÖN GÖRÜNÜM (Y-X düzlemi) ── */}
      <div className="flex flex-col items-center gap-1">
        <svg viewBox="0 0 50 66" width={w} height={h} aria-hidden="true">
          {/* Eksen kılavuzları */}
          <g stroke={STROKE} strokeOpacity={GUIDE_OP} strokeWidth="0.5" strokeDasharray="2,3">
            <line x1="25" y1="2"  x2="25" y2="64" />
            <line x1="2"  y1="33" x2="48" y2="33" />
          </g>
          {/* Dolgu */}
          <g fill={FILL} stroke="none">{spec.front}</g>
          {/* Kontur */}
          <g fill="none" stroke={STROKE} strokeWidth="1.2" strokeOpacity={OPACITY}
             strokeLinejoin="round" strokeLinecap="round">
            {spec.front}
          </g>
          {/* Eksen etiketleri */}
          <text x="44" y="36" fontSize="6" fill={STROKE} fillOpacity="0.45" fontFamily="system-ui">X</text>
          <text x="22" y="7"  fontSize="6" fill={STROKE} fillOpacity="0.45" fontFamily="system-ui">Y</text>
        </svg>
        <span className="text-[8px] uppercase tracking-widest text-muted/40">Y·X</span>
      </div>

      {/* ── 2. ÜST GÖRÜNÜM (X-Z düzlemi) ── */}
      <div className="flex flex-col items-center gap-1">
        <svg viewBox="0 0 50 50" width={sq} height={sq} aria-hidden="true">
          {/* Eksen kılavuzları */}
          <g stroke={STROKE} strokeOpacity={GUIDE_OP} strokeWidth="0.5" strokeDasharray="2,3">
            <line x1="25" y1="2"  x2="25" y2="48" />
            <line x1="2"  y1="25" x2="48" y2="25" />
          </g>
          {/* Kesit */}
          <g fill={FILL} stroke="none">
            {spec.topOverride ?? <circle cx="25" cy="25" r={spec.equatorRx} />}
          </g>
          <g fill="none" stroke={STROKE} strokeWidth="1.2" strokeOpacity={OPACITY}>
            {spec.topOverride ?? <circle cx="25" cy="25" r={spec.equatorRx} />}
          </g>
          {/* Eksen etiketleri */}
          <text x="44" y="28" fontSize="6" fill={STROKE} fillOpacity="0.45" fontFamily="system-ui">X</text>
          <text x="22" y="7"  fontSize="6" fill={STROKE2} fillOpacity="0.4" fontFamily="system-ui">Z</text>
        </svg>
        <span className="text-[8px] uppercase tracking-widest text-muted/40">X·Z</span>
      </div>

      {/* ── 3. 3B PERSPEKTİF ── */}
      <div className="flex flex-col items-center gap-1">
        <svg viewBox="0 0 50 66" width={w} height={h} aria-hidden="true">
          {/* Dolgu */}
          <g fill={FILL} stroke="none">{spec.front}</g>
          {/* Profil konturu */}
          <g fill="none" stroke={STROKE} strokeWidth="1.1" strokeOpacity={OPACITY * 0.8}
             strokeLinejoin="round" strokeLinecap="round">
            {spec.front}
          </g>
          {/* Ekvator elipsi — Z derinliğini gösterir */}
          <ellipse
            cx="25" cy={spec.equatorCy}
            rx={spec.equatorRx} ry={eqRy}
            fill="none"
            stroke={STROKE2} strokeWidth="1" strokeOpacity="0.65"
            strokeDasharray="2.5,2.5"
          />
          {/* Uç elipsleri (çok küçük) */}
          {spec.equatorCy !== 33 ? null : (
            <>
              <ellipse cx="25" cy={spec.equatorCy - 22} rx={2} ry={1}
                fill="none" stroke={STROKE} strokeWidth="0.7" strokeOpacity="0.35" />
              <ellipse cx="25" cy={spec.equatorCy + 22} rx={2} ry={1}
                fill="none" stroke={STROKE} strokeWidth="0.7" strokeOpacity="0.35" />
            </>
          )}
          {/* Z etiketi — ekvator yanında */}
          <text x={25 + spec.equatorRx + 2} y={spec.equatorCy + 3}
            fontSize="5.5" fill={STROKE2} fillOpacity="0.45" fontFamily="system-ui">Z</text>
        </svg>
        <span className="text-[8px] uppercase tracking-widest text-muted/40">3B</span>
      </div>

    </div>
  );
}

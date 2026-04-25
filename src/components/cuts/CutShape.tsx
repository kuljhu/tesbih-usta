"use client";

// Her kesim için x-y profili + z ekseni kesiti (ekvator elipsi) + eksen göstergesi
// viewBox: "0 0 80 100" — merkez (40,50), şekil alanı (12,10)→(68,90)

type ShapeDef = {
  profile: React.ReactNode;
  equatorCy: number;  // ekvator elipsinin y konumu
  equatorRx: number;  // ekvator elipsinin x yarıçapı
};

const shapes: Record<string, ShapeDef> = {
  kurevi: {
    profile: <ellipse cx="40" cy="50" rx="28" ry="34" />,
    equatorCy: 50,
    equatorRx: 28,
  },
  beyzi: {
    profile: <ellipse cx="40" cy="50" rx="20" ry="36" />,
    equatorCy: 50,
    equatorRx: 20,
  },
  arpa: {
    profile: <path d="M40,10 C44,22 44,78 40,90 C36,78 36,22 40,10 Z" />,
    equatorCy: 50,
    equatorRx: 4,
  },
  salgami: {
    profile: <path d="M40,10 C65,20 66,80 40,90 C14,80 15,20 40,10 Z" />,
    equatorCy: 50,
    equatorRx: 26,
  },
  sigaracik: {
    // Spool/diabolo: geniş uçlar, dar orta
    profile: (
      <path d="
        M14,12 C8,12 8,24 14,32 C20,38 20,42 14,48 C8,56 8,68 14,68
        L66,68 C72,68 72,56 66,48 C60,42 60,38 66,32 C72,24 72,12 66,12 Z
      " />
    ),
    equatorCy: 40,
    equatorRx: 10,
  },
  armudi: {
    profile: <path d="M40,12 C46,12 60,28 60,60 A20,16 0 0,1 20,60 C20,28 34,12 40,12 Z" />,
    equatorCy: 62,
    equatorRx: 20,
  },
  damla: {
    profile: <path d="M40,10 C46,14 60,46 54,70 A16,13 0 0,1 26,70 C20,46 34,14 40,10 Z" />,
    equatorCy: 68,
    equatorRx: 14,
  },
  kutuk: {
    profile: <rect x="14" y="16" width="52" height="68" rx="5" ry="5" />,
    equatorCy: 50,
    equatorRx: 26,
  },
  fici: {
    profile: <path d="M14,16 H66 C74,28 74,44 70,50 C74,56 74,72 66,84 H14 C6,72 6,56 10,50 C6,44 6,28 14,16 Z" />,
    equatorCy: 50,
    equatorRx: 30,
  },
  faseteli: {
    profile: (
      <>
        <polygon points="40,10 62,20 68,50 62,80 40,90 18,80 12,50 18,20" />
        {/* İç faset çizgileri */}
        <line x1="40" y1="10" x2="40" y2="90" strokeDasharray="none" strokeWidth="0.6" />
        <line x1="12" y1="50" x2="68" y2="50" strokeDasharray="none" strokeWidth="0.6" />
        <line x1="18" y1="20" x2="62" y2="80" strokeDasharray="none" strokeWidth="0.4" />
        <line x1="62" y1="20" x2="18" y2="80" strokeDasharray="none" strokeWidth="0.4" />
      </>
    ),
    equatorCy: 50,
    equatorRx: 28,
  },
};

type Props = {
  cutId: string;
  size?: number;
};

export default function CutShape({ cutId, size = 120 }: Props) {
  const shape = shapes[cutId];
  if (!shape) return null;

  const gradId = `grad-${cutId}`;
  const fillId = `fill-${cutId}`;

  return (
    <svg
      viewBox="0 0 80 100"
      width={size}
      height={size * 1.25}
      aria-hidden="true"
      className="overflow-visible"
    >
      <defs>
        {/* Radyal dolgu — 3D ışık hissi */}
        <radialGradient id={gradId} cx="38%" cy="35%" r="60%">
          <stop offset="0%"   stopColor="#c9a84c" stopOpacity="0.18" />
          <stop offset="60%"  stopColor="#c9a84c" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#0d0905" stopOpacity="0.4" />
        </radialGradient>
        {/* Kırpma maskesi — şekle göre */}
        <clipPath id={`clip-${cutId}`}>
          <rect x="0" y="0" width="80" height="100" />
        </clipPath>
      </defs>

      {/* Eksen kılavuz çizgileri */}
      <g stroke="#c9a84c" strokeOpacity="0.12" strokeWidth="0.5" strokeDasharray="3,4">
        <line x1="40" y1="2"  x2="40" y2="98"  /> {/* Y ekseni */}
        <line x1="2"  y1="50" x2="78" y2="50"  /> {/* X ekseni */}
      </g>

      {/* Profil dolgusu */}
      <g fill={`url(#${gradId})`} stroke="none">
        {shape.profile}
      </g>

      {/* Profil konturu */}
      <g
        fill="none"
        stroke="#c9a84c"
        strokeWidth="1.2"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeOpacity="0.85"
      >
        {shape.profile}
      </g>

      {/* Z ekseni: ekvator elipsi (kesik çizgi) */}
      <ellipse
        cx="40"
        cy={shape.equatorCy}
        rx={shape.equatorRx}
        ry={Math.max(shape.equatorRx * 0.18, 2.5)}
        fill="none"
        stroke="#e2c97e"
        strokeWidth="0.9"
        strokeDasharray="3,3"
        strokeOpacity="0.6"
      />

      {/* Eksen etiketleri */}
      <text x="74" y="53" fontSize="7" fill="#c9a84c" fillOpacity="0.5" fontFamily="sans-serif">X</text>
      <text x="37" y="8"  fontSize="7" fill="#c9a84c" fillOpacity="0.5" fontFamily="sans-serif">Y</text>
      <text x="74" y={shape.equatorCy + 3} fontSize="6" fill="#e2c97e" fillOpacity="0.45" fontFamily="sans-serif">Z</text>
    </svg>
  );
}

export default function CareinhoAvatar() {
  return (
    <svg
      viewBox="0 0 200 280"
      className="w-48 h-auto drop-shadow-xl animate-bounce"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Corpo */}
      <ellipse cx="100" cy="140" rx="70" ry="80" fill="#5DADE2" />

      {/* Cabeça */}
      <circle cx="100" cy="80" r="60" fill="#5DADE2" />

      {/* Penas/Topo da cabeça */}
      <ellipse cx="85" cy="30" rx="15" ry="25" fill="#5DADE2" />
      <ellipse cx="100" cy="15" rx="18" ry="30" fill="#5DADE2" />
      <ellipse cx="115" cy="30" rx="15" ry="25" fill="#5DADE2" />

      {/* Olhos - Branco */}
      <circle cx="75" cy="70" r="20" fill="white" />
      <circle cx="125" cy="70" r="20" fill="white" />

      {/* Olhos - Íris (azul escuro) */}
      <circle cx="78" cy="73" r="12" fill="#1F3A93" />
      <circle cx="128" cy="73" r="12" fill="#1F3A93" />

      {/* Olhos - Brilho */}
      <circle cx="80" cy="70" r="5" fill="white" />
      <circle cx="130" cy="70" r="5" fill="white" />

      {/* Sobrancelhas */}
      <path d="M 60 50 Q 75 40 85 50" stroke="#1F3A93" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M 115 50 Q 125 40 140 50" stroke="#1F3A93" strokeWidth="6" fill="none" strokeLinecap="round" />

      {/* Bico - Laranja */}
      <path d="M 100 95 L 85 108 L 100 112 L 115 108 Z" fill="#FF9D00" />

      {/* Boca */}
      <path d="M 95 110 Q 100 120 105 110" stroke="#C41E3A" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Bochechas rosa */}
      <circle cx="50" cy="85" r="16" fill="#FFB6C6" opacity="0.8" />
      <circle cx="150" cy="85" r="16" fill="#FFB6C6" opacity="0.8" />

      {/* Braço esquerdo levantado */}
      <g>
        <ellipse cx="45" cy="130" rx="20" ry="35" fill="#5DADE2" transform="rotate(-45 45 130)" />
        {/* Mão */}
        <circle cx="30" cy="100" r="18" fill="#1F6BA0" />
        {/* Dedos */}
        <circle cx="20" cy="90" r="7" fill="#1F6BA0" />
        <circle cx="25" cy="80" r="7" fill="#1F6BA0" />
        <circle cx="35" cy="78" r="7" fill="#1F6BA0" />
      </g>

      {/* Braço direito */}
      <ellipse cx="155" cy="140" rx="20" ry="30" fill="#5DADE2" />

      {/* Camiseta */}
      <rect x="60" y="140" width="80" height="60" rx="10" fill="white" />

      {/* Logo Care Plus */}
      <rect x="75" y="155" width="50" height="40" rx="5" fill="#1F3A93" />
      <text
        x="100"
        y="175"
        fontFamily="Arial, sans-serif"
        fontSize="14"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        Care
      </text>
      <text
        x="100"
        y="188"
        fontFamily="Arial, sans-serif"
        fontSize="12"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        Plus
      </text>

      {/* Pernas */}
      <rect x="80" y="210" width="15" height="50" rx="7" fill="#5DADE2" />
      <rect x="105" y="210" width="15" height="50" rx="7" fill="#5DADE2" />

      {/* Pés - Laranja */}
      <ellipse cx="87" cy="265" rx="18" ry="12" fill="#FF9D00" />
      <ellipse cx="112" cy="265" rx="18" ry="12" fill="#FF9D00" />
    </svg>
  );
}

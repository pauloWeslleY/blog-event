export const Banner = () => (
  <svg width="800" height="450" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#4f46e5', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#fda4af', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#grad1)" />
    <text
      x="50%"
      y="40%"
      textAnchor="middle"
      fill="white"
      fontFamily="Arial"
      fontSize="40"
      fontWeight="bold"
    >
      Blog de Eventos
    </text>
    <text
      x="50%"
      y="55%"
      textAnchor="middle"
      fill="white"
      fontFamily="Arial"
      fontSize="24"
    >
      Fique por dentro dos últimos eventos e novidades!
    </text>
    <g fill="white" opacity="0.7">
      <circle cx="100" cy="200" r="40" />
      <text
        x="100"
        y="210"
        textAnchor="middle"
        fontFamily="Arial"
        fontSize="18"
      >
        Evento 1
      </text>
    </g>
    <g fill="white" opacity="0.7">
      <circle cx="300" cy="200" r="40" />
      <text
        x="300"
        y="210"
        textAnchor="middle"
        fontFamily="Arial"
        fontSize="18"
      >
        Evento 2
      </text>
    </g>
    <g fill="white" opacity="0.7">
      <circle cx="500" cy="200" r="40" />
      <text
        x="500"
        y="210"
        textAnchor="middle"
        fontFamily="Arial"
        fontSize="18"
      >
        Evento 3
      </text>
    </g>
    <g fill="white" opacity="0.7">
      <circle cx="700" cy="200" r="40" />
      <text
        x="700"
        y="210"
        textAnchor="middle"
        fontFamily="Arial"
        fontSize="18"
      >
        Evento 4
      </text>
    </g>
  </svg>
)

export default function AnimatedCircuit() {
  return (
    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
        <defs>
          <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            {/* Circuit Traces */}
            <path d="M10 10 L 40 10 L 50 20 L 50 80" fill="none" stroke="#f97316" strokeWidth="1" opacity="0.3" />
            <path d="M90 90 L 60 90 L 50 80 L 50 20" fill="none" stroke="#f97316" strokeWidth="1" opacity="0.3" />
            <path d="M10 90 L 30 90 L 40 80 L 40 40 L 60 20 L 90 20" fill="none" stroke="#f97316" strokeWidth="1" opacity="0.3" />
            
            {/* Vias/Pads */}
            <circle cx="10" cy="10" r="2" fill="#f97316" opacity="0.5" />
            <circle cx="90" cy="90" r="2" fill="#f97316" opacity="0.5" />
            <circle cx="10" cy="90" r="2" fill="#f97316" opacity="0.5" />
            <circle cx="90" cy="20" r="2" fill="#f97316" opacity="0.5" />
            
            {/* Animated Data Pulses */}
            <circle cx="10" cy="10" r="1.5" fill="#ffffff" filter="drop-shadow(0 0 2px #ffffff)">
              <animateMotion dur="3s" repeatCount="indefinite" path="M10 10 L 40 10 L 50 20 L 50 80" />
            </circle>
            <circle cx="90" cy="90" r="1.5" fill="#ffffff" filter="drop-shadow(0 0 2px #ffffff)">
              <animateMotion dur="4s" repeatCount="indefinite" path="M90 90 L 60 90 L 50 80 L 50 20" />
            </circle>
            <circle cx="10" cy="90" r="1.5" fill="#ffffff" filter="drop-shadow(0 0 2px #ffffff)">
              <animateMotion dur="5s" repeatCount="indefinite" path="M10 90 L 30 90 L 40 80 L 40 40 L 60 20 L 90 20" />
            </circle>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>
      {/* Existing radial gradient overlay to fade edges */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#001d3d]/50 via-[#001d3d] to-[#001d3d]"></div>
    </div>
  );
}

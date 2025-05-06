import React, { useRef, useState, useEffect } from "react";

export default function SpotBorder({ children, className = "", style = {} }) {
  const boxWrapper = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [overlayColor, setOverlayColor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = ({ clientX, clientY }) => {
      setMousePosition({ x: clientX, y: clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    setOverlayColor({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={boxWrapper}
      className={`relative group rounded-lg p-[2px] bg-[#eeeeee15] overflow-hidden w-fit mx-auto ${className}`}
      style={style}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute opacity-0 z-50 rounded-xl w-full h-full group-hover:opacity-100 transition duration-300"
          style={{
            background: `radial-gradient(250px circle at ${overlayColor.x}px ${overlayColor.y}px, rgba(255, 255, 255, 0.137), transparent 80%)`,
          }}
        />
      )}

      <div
        className="absolute inset-0 z-0 rounded-lg"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #ffffff6e 0%, transparent 20%, transparent)`,
        }}
      />

      <div className="relative z-10 rounded-lg bg-black p-8 w-fit h-full">
        {children}
      </div>
    </div>
  );
}

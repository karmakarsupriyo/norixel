import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button"
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Use simple non-React cursor for true zero-latency dot,
  // but we can use React motion for the trailing outline.
  // Actually, standard CSS is often smoother for the raw dot, but let's do both with Framer Motion for the fluid "magnetic" feel.

  return (
    <>
      <div 
        className="cursor-dot" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
          backgroundColor: isPointer ? '#25D366' : '#0B1F3A' // Switch to WhatsApp green on hover
        }} 
      />
      <motion.div
        className="cursor-outline"
        animate={{
          x: position.x - 20, // center the 40px circle
          y: position.y - 20,
          scale: isPointer ? 1.2 : 1,
          borderColor: isPointer ? 'rgba(37, 211, 102, 0.5)' : 'rgba(11, 31, 58, 0.5)',
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      />
    </>
  );
}

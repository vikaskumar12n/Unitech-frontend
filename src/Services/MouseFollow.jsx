import { useEffect, useState } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="fixed w-3 h-3 rounded-full bg-blue-500 opacity-100 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default MouseFollower;

 
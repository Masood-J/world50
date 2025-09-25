"use client";
import {useEffect,useState} from "react";

export default function CursorGlow(){


  const [mousePos, setMousePos] = useState({x:0,y:0});

  useEffect(() => {
const handlemouseMove=(e)=>{
  setMousePos({x:e.clientX,y:e.clientY});
};
window.addEventListener("mousemove", handlemouseMove);

return () => {
  window.removeEventListener("mousemove", handlemouseMove);
}
  }, []);

  return(
    <div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            circle 750px at ${mousePos.x}px ${mousePos.y}px,
            transparent 0%,
            rgba(0,0,0,1) 100%
          )`
        }}
      ></div>
    </div>
  )
}
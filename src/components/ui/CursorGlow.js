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
    <div className={`fixed -translate-1/2 bg-gray-400 rounded-full h-50 w-50 opacity-10`} style={{top:mousePos.y,left:mousePos.x}}></div>
  )
}
"use client";
import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

export default function TextReveal() {
  const quotes = [
    `The best way to get started is to quit talking and begin doing.`,
    `Don’t let yesterday take up too much of today.`,
    `It’s not whether you get knocked down, it’s whether you get up.`,
    `If you are working on something exciting, it will keep you motivated.`,
    `Success is not in what you have, but who you are.`,
    `Hard work beats talent when talent doesn’t work hard.`,
    `The only limit to our realization of tomorrow is our doubts of today.`
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-[200px] px-4 overflow-hidden">
      <div className="text-2xl md:text-4xl font-bold text-center flex flex-wrap gap-2 text-[#109eda]">
        {quotes[index].split(" ").map((word, i) => (
          <Fade
            key={`${index}-${i}`}
            direction="right"
            delay={i * 200} // each word gets a delay
            className={``}
          >
            <span>{word}</span>
          </Fade>
        ))}
      </div>
    </div>
  );
}

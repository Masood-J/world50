"use client";
import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
export default function TextReveal() {
  const quotes = [
    {
      title: `Their is nowhere on this planet like World 50.`,
      author: `Tim Campos`,
      desc: `CIO, Apple`,
    },
    {
      title: `In an unpredictable world, World 50 is a 'need to have'.`,
      author: `Greg Creed`,
      desc: `Former CEO, YUM! Brands`,
    },
    {
      title: `You can't get this kind of collaboration anywhere else.`,
      author: `Wanda Austin`,
      desc: `Former President & CEO, Aerospace Corporation`,
    },
    {
      title: `Don't sell yourself short: If invited, take the call.`,
      author: `Doug Conant`,
      desc: `Former CEO, Campbell Soup Company`,
    },
  ];

  const [index, setIndex] = useState(0);
  const words = quotes[index].title.split(" ");
  const authorDelay = words.length * 0.2;
  const descDelay = authorDelay + 0.1;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [delay, setDelay] = useState(0);

  return (
    <div className="flex flex-col justify-center gap-3 h- px-4 overflow-hidden">
      <div className="relative text-3xl md:text-5xl text-center flex flex-wrap gap-2 text-[#109eda] font-oswald font-normal pl-2 max-w-[550px]">
        <div className={`absolute -left-5 pl-2 wrap-anywhere`}>
          <Fade key={`open-quote-${index}`} direction="right" delay={0}>
            <span className="">“</span>
          </Fade>
        </div>
        {quotes[index].title.split(" ").map((word, i) => (
          <motion.span
            key={`${index}-${i}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.18, duration: 0.6 }}
          >
            {word}
          </motion.span>
        ))}
        <Fade
          key={`close-quote-${index}`}
          direction="right"
          delay={(words.length + 1) * 180}
        >
          <span className="text-[#109eda] absolute">”</span>
        </Fade>
      </div>
      <div>
        <div className={`px-0 text-nowrap pl-2`}>
          <motion.div
            className={`font-inter font-medium text-2xl`}
            key={`author-${index}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: authorDelay, duration: 0.3 }}
          >
            <span className="font-semibold">{quotes[index].author}</span>
          </motion.div>
        </div>
      </div>
      <div>
        <div className={`px-0 text-nowrap -mt-4 pl-2`}>
        <motion.div
          className={`font-inter font-light text-base`}
          key={`desc-${index}`}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: descDelay, duration: 0.6 }}
        >
          <div className="text-gray-200">{quotes[index].desc}</div>
        </motion.div>
        </div>
      </div>

    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

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
  const authorDelay = words.length * 200 + 500;
  const descDelay = authorDelay + 200;
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [delay, setDelay] = useState(0);

  return (
    <div className="flex flex-col justify-center gap-3 h- px-4 overflow-hidden">
      <div className="relative text-3xl md:text-5xl text-center flex flex-wrap gap-2 text-[#109eda] font-oswald font-normal px-5">
        <div className={`absolute -left-3 pl-2`}>
          <Fade key={`open-quote-${index}`} direction="right" delay={0}>
            <span className="">“</span>
          </Fade>
        </div>
        {quotes[index].title.split(" ").map((word, i) => {
          if (word === "newline") {
            return <br key={`br-${index}-${i}`} />;
          } else {
            return (
              <Fade
                key={`${index}-${i}`}
                direction="right"
                distance="5px"
                delay={i * 250} // each word gets a delay
                className={``}
                duration={680}
              >
                <span>{word}</span>
              </Fade>
            );
          }
        })}
        <Fade
          key={`close-quote-${index}`}
          direction="right"
          delay={(words.length + 1) * 200}
        >
          <span className="text-[#109eda] absolute">”</span>
        </Fade>
      </div>
      <div>
        <div className={`px-5 w-20 text-nowrap`}>
          <Fade
            className={`font-inter font-medium text-2xl`}
            key={`author-${index}`}
            delay={authorDelay+70}
            direction="right"
            duration={700}
          >
            <span className="font-semibold">{quotes[index].author}</span>
          </Fade>
        </div>
      </div>
      <div>
        <div className={`px-5 w-25 text-nowrap -mt-4`}>
        <Fade
          className={`font-inter font-light text-base`}
          key={`desc-${index}`}
          delay={descDelay+180}
          direction="right"
          duration={600}
        >
          <div className="text-gray-200">{quotes[index].desc}</div>
        </Fade>
        </div>
      </div>

    </div>
  );
}

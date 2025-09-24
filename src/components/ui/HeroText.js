"use client";
import Typewriter from "typewriter-effect";

export default function HeroText() {
  const quotes = [
    `<span style="font-size:35px;color:#109eda;">“The best way to get started is to quit talking and begin doing.”</span><br><span style="color:white; font-size:18px;">Walt Disney</span><br><span style="color:white; font-size:18px;">CEO, Walt Entertainment</span>`,
    `<span style="font-size:35px;color:#109eda;">“Don’t let yesterday take up too much of today.”</span><br><span style="color:white; font-size:18px;">Will Rogers</span><br><span style="color:white; font-size:18px;">American Humorist</span>`,
    `<span style="font-size:35px;color:#109eda;">“It’s not whether you get knocked down, it’s whether you get up.”</span><br><span style="color:white; font-size:18px;">Vince Lombardi</span><br><span style="color:white; font-size:18px;">Legendary Football Coach</span>`,
    `<span style="font-size:35px;color:#109eda;">“If you are working on something exciting, it will keep you motivated.”</span><br><span style="color:white; font-size:18px;">Elon Musk</span><br><span style="color:white; font-size:18px;">CEO, Tesla & SpaceX</span>`,
    `<span style="font-size:35px;color:#109eda;">“Success is not in what you have, but who you are.”</span><br><span style="color:white; font-size:18px;">Bo Bennett</span><br><span style="color:white; font-size:18px;">Entrepreneur</span>`,
    `<span style="font-size:35px;color:#109eda;">“Hard work beats talent when talent doesn’t work hard.”</span><br><span style="color:white; font-size:18px;">Tim Notke</span><br><span style="color:white; font-size:18px;">Basketball Coach</span>`,
    `<span style="font-size:35px;color:#109eda;">“The only limit to our realization of tomorrow is our doubts of today.”</span><br><span style="color:white; font-size:18px;">Franklin D. Roosevelt</span><br><span style="color:white; font-size:18px;">32nd President of the USA</span>`,
  ];

  return (

    <Typewriter
      options={{
        strings: quotes,
        autoStart: true,
        loop: true,
        delay: 20,
        deleteSpeed: 40,
        cursor:"",
      }}
    />
  );
}

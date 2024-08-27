"use client";
import { useEffect, useRef, useState } from "react";

export default function BlogPost({
  heading,
  body,
  seconds,
}: {
  heading: string;
  body: string;
  seconds: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  //toggle visibility once loaded on screen
  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    if (ref.current) {
      scrollObserver.observe(ref.current);
    }
  }, []);

  //converts seconds to dd/mm/yyyy string format
  function convertSecondsToString(seconds: number) {
    const jsDate = new Date(seconds * 1000);
    const dd = String(jsDate.getDate()).padStart(2, "0");
    const mm = String(jsDate.getMonth() + 1).padStart(2, "0");
    const yyyy = String(jsDate.getFullYear()).padStart(2, "0");
    return `${dd}/${mm}/${yyyy}`;
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-[2000ms] ease-out border-black shadow-lg shadow-vega-blue delay-500 flex flex-col bg-[#FAFAFA] p-10 ${
        isVisible ? "" : "translate-x-[-100%] opacity-0"
      }`}
    >
      <p className="text-md font-bold">{heading}</p>
      <p className="bg-white border-[1px] border-black p-3 rounded-lg my-3 whitespace-pre text-wrap">
        {body}
      </p>
      <p className="flex-1 text-right italic">
        {convertSecondsToString(seconds)}
      </p>
    </div>
  );
}

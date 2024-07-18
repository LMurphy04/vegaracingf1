"use client";

import { Timestamp } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";

export default function BlogPost({
  post,
}: {
  post: { id: string; heading: string; date: Timestamp; body: string };
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    scrollObserver.observe(ref.current);
  }, []);

  function convertTimestampToString(date: Timestamp) {
    const jsDate = new Date(date.seconds);
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
      <p className="text-md font-bold">{post.heading}</p>
      <p className="bg-white border-[1px] border-black p-3 rounded-lg my-3 whitespace-pre text-wrap">
        {post.body}
      </p>
      <p className="flex-1 text-right italic">
        {convertTimestampToString(post.date)}
      </p>
    </div>
  );
}

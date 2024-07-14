"use client";
import { useEffect, useRef, useState } from "react";
import Title from "../title";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function Home() {
  const [blogPosts, setBlogPosts] = useState<any>(null);

  useEffect(() => {
    async function fetchBlogPosts() {
      const querySnapshot = await getDocs(collection(db, "blog"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      data.sort((a, b) => b.date - a.date);
      setBlogPosts(data);
    }
    fetchBlogPosts();
  }, []);

  const BlogDisplay = () => {
    if (blogPosts === null) {
      return (
        <p className="font-semibold italic text-center">
          Blog Posts Loading...
        </p>
      );
    } else if (blogPosts.length == 0) {
      return (
        <p className="font-semibold italic text-center">
          No Posts Found, Check Connection and Reload!
        </p>
      );
    }
    return (
      <>
        {blogPosts.map((post: any, index: number) => {
          return <BlogPost key={index} post={post} />;
        })}
      </>
    );
  };

  return (
    <>
      <Title title={"Blog"} />
      <div className="flex">
        <p className="mx-auto font-semibold italic">
          Stay up to date with Vega Racing through our blog!
        </p>
      </div>
      <div className="mx-[-20px] sm:mx-[-40px] justify-center break-words my-8 flex flex-col gap-5">
        <BlogDisplay />
      </div>
    </>
  );
}

function BlogPost({ post }: { post: any }) {
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
    const dd = String(date.toDate().getDate()).padStart(2, "0");
    const mm = String(date.toDate().getMonth() + 1).padStart(2, "0");
    const yyyy = String(date.toDate().getFullYear()).padStart(2, "0");
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

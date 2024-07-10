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
        <div className="p-5 font-semibold italic flex flex-col text-center justify-center break-words">
          Blog Posts Loading...
        </div>
      );
    } else if (blogPosts.length == 0) {
      return (
        <div className="p-5 font-semibold italic flex justify-center break-words">
          No Posts Found!
        </div>
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
        <p className="italic bg-white mx-auto rounded-lg p-8 border-[1px] border-black">
          Stay up to date with Vega Racing through our blog!
        </p>
      </div>
      <BlogDisplay />
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
      className={`transition-all duration-[2000ms] ease-out border-b-[1px] border-black shadow-xl shadow-vega-pink-light delay-500 my-10 flex flex-col bg-[#FAFAFA] p-3 rounded-lg ${
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

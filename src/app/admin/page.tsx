"use client";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { addDoc, getDocs, collection, Timestamp } from "firebase/firestore";

export default function Home() {
  const [body, setBody] = useState("");
  const [heading, setHeading] = useState("");
  const [blogPosts, setBlogPosts] = useState<any>([]);
  const [update, setUpdate] = useState(false);

  //READ
  useEffect(() => {
    console.log("trying to access blog data");
    async function fetchBlogPosts() {
      console.log("1");
      const querySnapshot = await getDocs(collection(db, "blog"));
      console.log("2");
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("3");
      data.sort((a, b) => b.date - a.date);
      console.log(data);
      setBlogPosts(data);
    }
    fetchBlogPosts();
  }, [update]);

  const BlogDisplay = function displayBlogs() {
    try {
      if (blogPosts.length == 0) {
        return <p>No blogs found!</p>;
      }
      return blogPosts.map((post: any, index: number) => (
        <div
          key={index}
          className="flex-1 flex-col border-2 border-black my-3 p-2"
        >
          <div className="underline font-semibold flex-1">{post.heading}</div>
          <div className="flex-1">{post.body}</div>
          <div className="font-thin flex-1 text-right">
            {convertTimestampToString(post.date)}
          </div>
        </div>
      ));
    } catch (error) {
      console.log("error displaying");
      return <p>Error Loading Blogs!</p>;
    }
  };

  function convertTimestampToString(date: Timestamp) {
    const dd = String(date.toDate().getDate()).padStart(2, "0");
    const mm = String(date.toDate().getMonth() + 1).padStart(2, "0");
    const yyyy = String(date.toDate().getFullYear()).padStart(2, "0");
    return `${dd}/${mm}/${yyyy}`;
  }

  //WRITE
  const addBlogData = async (heading: string, body: string) => {
    try {
      const docRef = await addDoc(collection(db, "blog"), {
        heading: heading,
        body: body,
        date: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      setUpdate(!update);
      return true;
    } catch (error) {
      console.error("Error adding document ", error);
      return false;
    }
  };

  const handleSubmit = async (formdata: any) => {
    formdata.preventDefault();
    const added = await addBlogData(
      heading == "" ? "Blog Post" : heading,
      body == "" ? "..." : body
    );
    if (added) {
      setBody("");
      setHeading("");
    }
  };

  return (
    <>
      <div>
        <p>Admin</p>
        <div className="flex flex-col">
          <BlogDisplay />
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="heading">Heading: </label>
          <input
            id="heading"
            type="text"
            value={heading}
            onChange={(e) => {
              setHeading(e.target.value);
            }}
          />
          <label htmlFor="body">Body: </label>
          <input
            id="body"
            type="text"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

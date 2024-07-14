"use client";
import { db, auth } from "../../firebase";
import { FormEventHandler, useEffect, useState } from "react";
import { Modal } from "@mantine/core";
import {
  addDoc,
  getDocs,
  collection,
  Timestamp,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import Title from "../../title";

export default function Home() {
  const [body, setBody] = useState("");
  const [heading, setHeading] = useState("");
  const [blogPosts, setBlogPosts] = useState<any>([]);
  const [update, setUpdate] = useState(false);
  const router = useRouter();

  // Check if logged in, if not return to login page
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user == null) {
        console.log(`Logged Out`);
        router.push("/admin");
      } else {
        console.log(`Logged In: ${user.email}`);
      }
    });
  }, []);

  // Access Blog Data
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
  }, [update]);

  // Handle Editing
  const handleEdit = async (blogPost: any, heading: string, body: string) => {
    const docRef = doc(db, "blog", blogPost.id);
    try {
      await updateDoc(docRef, { heading: heading, body: body });
      setUpdate(!update);
      console.log("Post has been updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // Handle Deletion
  const handleDelete = async (blogPost: any) => {
    const docRef = doc(db, "blog", blogPost.id);
    try {
      await deleteDoc(docRef);
      setUpdate(!update);
      console.log("Post has been deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // Handle Adding Blog Post
  const addBlogData = async (formdata: any) => {
    formdata.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "blog"), {
        heading: heading == "" ? "Blog Post" : heading,
        body: body == "" ? "..." : body,
        date: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      setBody("");
      setHeading("");
      setUpdate(!update);
      return true;
    } catch (error) {
      console.error("Error adding document ", error);
      return false;
    }
  };

  // Create Blog Display
  const BlogDisplay = function displayBlogs() {
    if (blogPosts.length == 0) {
      return (
        <div className="p-2 font-semibold italic flex-1 break-words">
          No blog posts found!
        </div>
      );
    }
    return (
      <div className="flex flex-col gap-3">
        {blogPosts.map((post: any, index: number) => (
          <BlogPost
            key={index}
            post={post}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <Title title={"Admin Blog View"} />
      <AddPost
        heading={heading}
        body={body}
        setHeading={setHeading}
        setBody={setBody}
        addBlogData={addBlogData}
      />
      <Title title={"Blog Posts"} />
      <BlogDisplay />
    </>
  );
}

// Add Post Interface
function AddPost({
  heading,
  setHeading,
  body,
  setBody,
  addBlogData,
}: {
  heading: string;
  setHeading: Function;
  body: string;
  setBody: Function;
  addBlogData: FormEventHandler;
}) {
  return (
    <form
      className="flex flex-col gap-3 my-3 p-2 border-2 border-black"
      onSubmit={addBlogData}
    >
      <div className="font-semibold underline underline-offset-2">
        Add a Blog Post
      </div>
      <div className="flex flex-col">
        <label htmlFor="heading">Heading: </label>
        <input
          className="border-2 border-black grow rounded-md p-1"
          id="heading"
          type="text"
          value={heading}
          onChange={(e) => {
            setHeading(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="body">Body:</label>
        <textarea
          className="border-2 border-black grow rounded-md p-1 whitespace-pre text-wrap resize-none overflow-x-hidden"
          id="body"
          value={body}
          rows={5}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </div>
      <button className="px-3 py-1 border-2 border-black font-semibold bg-white hover:bg-vega-blue hover:text-white">
        Submit
      </button>
    </form>
  );
}

// Blog Post Interface
function BlogPost({
  post,
  handleDelete,
  handleEdit,
}: {
  post: any;
  handleDelete: Function;
  handleEdit: Function;
}) {
  const [editOpened, setEditOpened] = useState(false);
  const [deleteOpened, setDeleteOpened] = useState(false);
  const [body, setBody] = useState(post.body);
  const [heading, setHeading] = useState(post.heading);

  function convertTimestampToString(date: Timestamp) {
    const dd = String(date.toDate().getDate()).padStart(2, "0");
    const mm = String(date.toDate().getMonth() + 1).padStart(2, "0");
    const yyyy = String(date.toDate().getFullYear()).padStart(2, "0");
    return `${dd}/${mm}/${yyyy}`;
  }

  return (
    <>
      <div className="flex-1 flex-col border-2 border-black p-2">
        <div className="underline font-semibold flex-1 break-words">
          {post.heading}
        </div>
        <div className="flex-1 break-words whitespace-pre text-wrap">
          {post.body}
        </div>
        <div className="font-thin flex-1 text-right">
          {convertTimestampToString(post.date)}
        </div>
        <div className="flex flex-row gap-2 border-t-2 pt-2 border-black">
          <button
            onClick={() => setEditOpened(true)}
            className="flex-1 text-black px-3 py-1 border-2 border-black font-semibold bg-[#E6E6E6] hover:bg-vega-blue hover:text-white"
          >
            Edit
          </button>
          <button
            onClick={() => setDeleteOpened(true)}
            className="flex-1 text-black px-3 py-1 border-2 border-black font-semibold bg-[#E6E6E6] hover:bg-vega-blue hover:text-white"
          >
            Delete
          </button>
        </div>
      </div>
      <Modal
        opened={editOpened}
        onClose={() => {
          setEditOpened(false);
          setBody(post.body);
          setHeading(post.heading);
        }}
        title="Edit Post"
        centered
        classNames={{
          title: "font-semibold underline underline-offset-2",
          inner: "left-0",
        }}
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="heading">Heading: </label>
            <input
              className="border-2 border-black grow rounded-md p-1"
              id="heading"
              type="text"
              value={heading}
              onChange={(e) => {
                setHeading(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="body">Body:</label>
            <textarea
              className="border-2 border-black grow rounded-md p-1 whitespace-pre resize-none text-wrap"
              id="body"
              value={body}
              rows={5}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            />
          </div>
          <button
            onClick={() => {
              setEditOpened(false);
              handleEdit(post, heading, body);
            }}
            className="px-3 py-1 border-2 border-black font-semibold bg-white hover:bg-vega-blue hover:text-white"
          >
            Confirm
          </button>
        </div>
      </Modal>
      <Modal
        opened={deleteOpened}
        onClose={() => {
          setDeleteOpened(false);
        }}
        title="Delete Post"
        centered
        classNames={{
          title: "font-semibold underline text-white underline-offset-2",
          content: "bg-red-500",
          header: "bg-red-500",
          close: "text-white hover:text-black",
          inner: "left-0",
        }}
      >
        <p className="text-center text-wrap mb-5 italic text-white">
          Are you sure you want to delete this post?
        </p>
        <button
          onClick={() => {
            setDeleteOpened(false);
            handleDelete(post);
          }}
          className="px-3 py-1 border-2 border-black font-semibold bg-white hover:bg-vega-blue hover:text-white w-full"
        >
          Confirm
        </button>
      </Modal>
    </>
  );
}

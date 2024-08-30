import Title from "../title";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import BlogPost from "./post";

export default async function Blog() {
  async function fetchBlogPosts() {
    const querySnapshot = await getDocs(collection(db, "blog"));
    var data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      heading: doc.get("heading"),
      body: doc.get("body"),
      date: doc.get("date"),
    }));
    data.sort((a, b) => b.date - a.date);
    return data;
  }

  var data: {}[] = await fetchBlogPosts();

  const BlogDisplay = () => {
    if (data === null) {
      return (
        <p className="font-semibold italic text-center">No Blog Posts Found.</p>
      );
    }
    return (
      <>
        {data?.map((post: any, index: number) => {
          return (
            <BlogPost
              key={index}
              heading={post.heading}
              body={post.body}
              seconds={post.date.seconds}
            />
          );
        })}
      </>
    );
  };

  return (
    <>
      <Title title={"Blog"} />
      <div className="flex">
        <p className="mx-auto font-semibold italic text-center">
          Stay up to date with Vega Racing through our blog!
        </p>
      </div>
      <div className="mx-[-20px] sm:mx-[-40px] justify-center break-words my-8 flex flex-col gap-5">
        <BlogDisplay />
      </div>
    </>
  );
}

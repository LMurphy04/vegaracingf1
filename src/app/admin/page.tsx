"use client";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Title from "../title";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  //READ
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user != null) {
        console.log(`Logged In`);
        router.push("/admin/edit-blog");
      }
    });
  }, []);

  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log("help");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        setEmail("");
        setPassword("");
        router.push("/admin/edit-blog");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`);
      });
  };

  return (
    <>
      <div>
        <Title title={"Admin Login"} />
        <form
          className="border-2 border-black flex flex-col bg-vega-blue mx-auto w-80 px-3 py-10 gap-3"
          onSubmit={handleLogin}
        >
          <div className="flex">
            <label
              className="font-semibold text-center mr-3 text-white"
              htmlFor="email"
            >
              Email:{" "}
            </label>
            <input
              className="border-2 border-black grow"
              id="email"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex">
            <label
              className="font-semibold text-center mr-3 text-white"
              htmlFor="password"
            >
              Password:{" "}
            </label>
            <input
              className="border-2 border-black grow"
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center">
            <button className="text-black px-3 py-1 border-2 border-black font-semibold bg-[#E6E6E6] hover:underline underline-offset-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

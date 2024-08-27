"use client";
import { FormEventHandler, useEffect, useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Title from "../title";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Check if user is already logged in
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user != null) {
        console.log(`Logged In`);
        router.push("/admin/edit-blog");
      }
    });
  }, [router]);

  // Handles Login Attempts
  const handleLogin = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        router.push("/admin/edit-blog");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`);
        setError(error.message);
      });
  };

  return (
    <>
      <Title title={"Admin Login"} />
      <ErrorBlock errorMessage={error} />
      <LoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
    </>
  );
}

function ErrorBlock({ errorMessage }: { errorMessage: string }) {
  return (
    <div
      className={`text-white font-extrabold border-2 border-b-0 border-black flex flex-col bg-red-500 mx-auto w-80 px-3 py-5 ${
        errorMessage === "" ? "hidden" : "block"
      }`}
    >
      Invalid login. Try again.
    </div>
  );
}

function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
}: {
  email: string;
  setEmail: Function;
  password: string;
  setPassword: Function;
  handleLogin: FormEventHandler;
}) {
  return (
    <form
      className="border-2 border-black flex flex-col bg-[#E6E6E6] mx-auto w-80 px-3 py-10 gap-3 shadow-md"
      onSubmit={handleLogin}
    >
      <input
        className="border-2 border-black grow rounded-md p-1"
        id="email"
        type="text"
        value={email}
        placeholder="Email Address"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="border-2 border-black grow rounded-md p-1"
        id="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <div className="flex justify-center">
        <button className="px-3 py-1 border-2 border-black font-semibold bg-white hover:bg-vega-blue hover:text-white">
          Log In
        </button>
      </div>
    </form>
  );
}

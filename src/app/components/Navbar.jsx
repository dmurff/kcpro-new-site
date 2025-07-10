"use client";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { signInWithEmail } from "../../../utils/supabaseAuth";

const Navbar = () => {
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async () => {
    const email = prompt("Enter email:");
    const password = prompt("Enter password:");

    const { error } = await signInWithEmail(email, password);
    if (error) {
      setErrorMsg(error.message);
    } else {
      console.logI("✅ Login successful");
    }
  };

  return (
    <div className="bg-zinc-300 text-black h-[10vh] sticky top-0 z-50 flex flex-row justify-between items-center px-12">
      <ul className="flex justify-center gap-18 items-center text-blue-600 text-xl">
        <li className="hover:text-blue-800">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-blue-800">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-blue-800">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className="flex gap-4 items-center">
        <button
          className="flex items-center bg-gray-700 hover:bg-gray-900 rounded-md p-2"
          onClick={handleLogin}
        >
          <FaGoogle className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

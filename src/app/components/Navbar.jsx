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
    <nav className="bg-transparent text-white fixed top-0 w-full z-50 flex flex-row justify-between items-center px-12 h-24">
      <ul className="flex justify-center gap-18 items-center text-xl">
        <li className="hover:text-blue-800">
          <Link href="/">Home</Link>
        </li>

        <li className="hover:text-blue-800">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-blue-800">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="hover:text-blue-800">
          <Link href="/contractor-dashboard">Contractor</Link>
        </li>
      </ul>
      <div className="flex gap-4 items-center">
        <button
          className="flex items-center bg-gray-700 hover:bg-gray-900 rounded-md p-2"
          onClick={handleLogin}
        >
          <FaGoogle className="text-white" />
        </button>
        <button className="text-cream items-center bg-orange-500 hover:bg-orange-100 hover:text-slate-950 hover:border-2 border-slate-950 rounded-md p-2">
          get a quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

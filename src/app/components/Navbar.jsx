"use client";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { signInWithEmail } from "../../../utils/supabaseAuth";

const Navbar = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <nav className="fixed top-0 w-full z-50 flex flex-row justify-between items-center px-12 h-24 bg-gray-900 text-white">
      <ul className="flex justify-center gap-x-8 items-center text-2xl mx-auto p-2">
        <li className="hover:text-orange-500 hover:scale-1.5">
          <Link href="/">Home</Link>
        </li>

        <li className="hover:text-orange-500">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-orange-500">
          <Link href="/contact">Products</Link>
        </li>
        <li className="hover:text-orange-500">
          <Link href="/contractor-dashboard">Contractor</Link>
        </li>
      </ul>
      <div className="flex gap-4 items-center ml-10">
        <button
          className="flex items-center bg-gray-700 hover:bg-gray-900 rounded-md p-2"
          onClick={handleLogin}
        >
          <FaGoogle className="text-white" />
        </button>
        <Link
          href="/admin-dashboard"
          className="text-cream items-center bg-orange-500 hover:bg-orange-100 hover:text-slate-950 hover:border-2 border-slate-950 rounded-md p-2"
        >
          get a quote
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

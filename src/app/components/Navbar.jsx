"use client";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { signInWithEmail } from "../../../utils/supabaseAuth";
import Image from "next/image";

const Navbar = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-white flex flex-col">
            <div className="flex justify-end">
              <button
                className="text-3xl text-slate-800"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>

            <ul className="flex flex-col gap-6 text-xl text-slate-800 font-semibold">
              <li className="border-b-2 border-dashed border-blue-100">
                <Link href="/">Home</Link>
              </li>

              <li className="border-b-2">
                <Link href="/about">About</Link>
              </li>
              <li className="border-b-2">
                <Link href="/contact">Products</Link>
              </li>
              <li className="border-b-2">
                <Link href="/contractor-dashboard">Contractor</Link>
              </li>
            </ul>
          </div>
        </>
      )}

      <nav className="fixed top-0 w-full z-40 flex flex-row justify-between pr-12 items-center h-24 bg-gray-900 text-white">
        <div className="flex gap-x-8 ml-1">
          <div>
            <Image
              src="/images/nav-logo.png"
              alt="KC Pro Assembly logo"
              width={120}
              height={40}
            />
          </div>
          <ul className="hidden lg:flex justify-center gap-x-8 items-center text-2xl mx-auto p-2">
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
          <button
            className="lg:hidden text-2xl text-white"
            onClick={() => (!isOpen ? setIsOpen(true) : setIsOpen(false))}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

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
    </>
  );
};

export default Navbar;

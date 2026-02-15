"use client";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function LoginButton() {
  return (
    <>
      <div className="flex gap-6 p-4">
        <button
          className="text-black text-2xl bg-blue-300"
          onClick={() =>
            signIn("google", { callbackUrl: "/admin-dashboard/hoops" })
          }
        >
          Login
        </button>

        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="text-red-500 text-2xl font-semibold bg-blue-300"
        >
          Sign Out
        </button>
      </div>
      <Link className="text-black text-2xl bg-blue-300" href="/">
        home
      </Link>
    </>
  );
}

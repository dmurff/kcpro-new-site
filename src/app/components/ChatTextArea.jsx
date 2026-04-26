"use client";
import { useState, useEffect } from "react";

export default function ChatTextArea({ customer }) {
  const [msg, setMsg] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    const trimmed = msg.trim();
    e.preventDefault();

    if (!msg.trim()) return;

    console.log(msg);
    setSending(true);
    try {
      const res = await fetch("/api/sms/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, customer }),
      });

      if (!res.ok) throw new Error("send error");
      setMsg("");
    } catch (err) {
      console.log(err);
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      <textarea
        onChange={(e) => setMsg(e.target.value)}
        value={msg}
        className="bg-indigo-200 text-gray-900 w-full p-2"
      ></textarea>
      <button
        disabled={sending}
        type="submit"
        className="p-2 bg-blue-400 text-gray-900 text-lg"
      >
        {sending && ""}
        Send
      </button>
    </form>
  );
}

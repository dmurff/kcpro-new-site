"use client";
import { formatNote } from "../../../lib/ai/formatNote";
import { useState } from "react";

export default function GenerateNoteButton({ n }) {
  const [note, setNote] = useState("...");
  async function handleClick() {
    const res = await formatNote(n);
    const resParsed = JSON.parse(res);
    setNote(resParsed);
  }
  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-indigo-500 text-white hover:bg-indigo-700 mx-auto p-4 rounded-md m-8"
      >
        Generate Note
      </button>
      <div className="text-black bg-indigo-300">{note}</div>
    </div>
  );
}

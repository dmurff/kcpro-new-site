"use client";
import { formatNote } from "../../../lib/ai/formatNote";
import { useState } from "react";

export default function GenerateNoteButton({ n }) {
  const [note, setNote] = useState("...");
  async function handleClick() {
    const res = await formatNote(n);
    const resParsed = JSON.parse(res);
    setNote(resParsed);

    console.log("CLient NOte", note);
  }
  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-indigo-500 text-white hover:bg-indigo-700 mx-auto p-4 rounded-md m-8"
      >
        Generate Note
      </button>
      <div className="text-black bg-indigo-300">
        <h1 className="text-gray-900 font-semibold text-2xl p-2">
          Action needed
        </h1>
        <p className="text-gray-900 text-md p-2">{note.action_needed}</p>
      </div>
    </div>
  );
}

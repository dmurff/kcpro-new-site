"use client";

export default function TotalBox({ total }) {
  return (
    <div>
      <h1 className="text-slate-800 text-2xl font-bold border-1 p-2 shadow-md rounded-md">
        ${total}
      </h1>
    </div>
  );
}

"use client";

export default function TotalBox({ total }) {
  return (
    <div>
      <h1 className="text-white text-2xl border-1 p-2 bg-green-700 border-green-500">
        ${total}
      </h1>
    </div>
  );
}

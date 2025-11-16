"use client";

export default function TotalBox({
  total,
  className = "text-slate-800 text-2xl font-bold border-1 p-2 shadow-md rounded-md",
}) {
  return (
    <div className={className}>
      <h1>${total}</h1>
    </div>
  );
}

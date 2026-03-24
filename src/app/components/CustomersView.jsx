"use client";

export default function CustomersView({ customers }) {
  return (
    <>
      <div>
        {customers &&
          customers.map((c) => (
            <div className="bg-gray-400 text-gray-900" key={c.id} id={c.id}>
              {c.name}
            </div>
          ))}
      </div>
    </>
  );
}

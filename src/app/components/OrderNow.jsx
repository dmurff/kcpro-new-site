"use client";
import Link from "next/link";

const OrderNow = ({ id, type }) => {
  return (
    <Link
      href={{
        pathname: "/checkout",
        query: { id, type },
      }}
    >
      <button className="bg-orange-500 p-2 text-white hover:bg-orange-400 hover:text-slate-200 hover:cursor-pointer">
        Add to cart
      </button>
    </Link>
  );
};

export default OrderNow;

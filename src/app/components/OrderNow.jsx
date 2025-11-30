"use client";
import Link from "next/link";

const OrderNow = ({
  pathname,
  styling = "bg-orange-500 p-2 text-white hover:bg-orange-400 rounded-md hover:text-slate-200 hover:cursor-pointer",
  text = "Add to cart",
}) => {
  return (
    <Link className={styling} href={"/hoops"}>
      {text}
    </Link>
  );
};

export default OrderNow;

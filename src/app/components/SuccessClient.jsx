"use client";
import React from "react";
import { useState, useEffect } from "react";
import { createJob } from "../../../lib/api";

export default function SuccessClient({ hoop, mainImage, totalDue }) {
  return (
    <>
      <div className="flex flex-col w-full text-xl font-md text-black">
        <h1 className="text-3xl mb-8 mx-auto pt-8">
          Your hoop order was placed!
        </h1>
        <img
          className={"mx-auto mb-16"}
          width={300}
          src={mainImage}
          alt={hoop.name}
        />
        <p className="text-black text-center text-lg w-[50%] mx-auto">
          {`Congratulations! Your order for the ${hoop.name} has been
          successfully placed. You will recieve an email with scheduling
          instructions. Upon completion the final installation fee of ${totalDue} will be due.`}
        </p>
      </div>
    </>
  );
}

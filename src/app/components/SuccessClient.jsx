"use client";
import React from "react";
import { useState, useEffect } from "react";
import { createJob } from "../../../lib/api";

export default function SuccessClient({ hoop, mainImage, totalDue }) {
  const numTotal = Number(totalDue);

  return (
    <>
      <div className="bg-black/20 flex flex-col w-full text-xl font-md text-black">
        <h1 className="text-3xl text-green-700 mb-8 mx-auto pt-8">Success!</h1>
        <img
          className={"mx-auto mb-16"}
          width={300}
          src={mainImage}
          alt={hoop.name}
        />
        <p className="text-black text-center text-lg w-[80%] lg:w-[60%] mx-auto">
          {`Contratulations! Your order for the ${hoop.name} was successful.`}{" "}
          {numTotal
            ? `A confirmation email has been sent with scheduling instructions for services you selected.`
            : `A confirmation email has been sent with instructions for scheduling delivery of your hoop.`}
        </p>

        {Number(totalDue) ? (
          <p className="text-black text-center text-lg w-[70%] lg:w-[60%] mx-auto">
            Upon completion your total due will be ${totalDue}.
          </p>
        ) : (
          <p className="text-black text-center text-lg w-[70%] lg:w-[60%] mx-auto">
            You selected no additional services and owe nothing upon delivery.
          </p>
        )}
      </div>
    </>
  );
}

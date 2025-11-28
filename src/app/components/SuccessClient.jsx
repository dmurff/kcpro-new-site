"use client";
import React from "react";
import { useState, useEffect } from "react";
import { createJob } from "../../../lib/api";

export default function SuccessClient({ hoop, mainImage, totalDue }) {
  const numTotal = Number(totalDue);

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
        <p className="text-black text-center text-lg w-[80%] lg:w-[60%] mx-auto">
          {`Contratulations! Your order for the ${hoop.name} was successful.`}{" "}
          {numTotal
            ? `You will recieve a confirmation email and scheduling instructions for services you selected.`
            : `You will recieve a confirmation email and instructions for scheduling delivery of your hoop.`}
        </p>

        {Number(totalDue) ? (
          <p className="text-black text-center text-lg w-[70%] lg:w-[60%] mx-auto">
            Upon completion the final installation fee of ${totalDue} will be
            due.
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

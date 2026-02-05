"use client";
import React from "react";
import { useState, useEffect } from "react";
import { createJob } from "../../../lib/api";

export default function ServiceSuccessClient({ job, customer, pi }) {
const [service, setService] = useState();
const [status, setStatus] = useState(false);

useEffect(() => {
  let timer;

  
  const poll = async () => {
    try {

      // Add this inside the useEffect
console.log("SEARCHING DB FOR PI:", pi);
      const res = await fetch(`/api/service-jobs/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pi }),
      });

      if (res.status === 200) {
        const data = await res.json();
        setService(data);
        setStatus(true);
        return; // Stop polling on success
      }

      // If not 200, wait 3s and call itself
      timer = setTimeout(poll, 3000);

    } catch (error) {
      // On network error, wait 3s and call itself
      timer = setTimeout(poll, 3000);
    }
  };

  poll(); // Start

  return () => clearTimeout(timer); // Basic cleanup
}, [pi]);
    {console.log(service)}


  return (
    <>
    {!status && 
     <div className="bg-white flex flex-col w-full text-xl font-md text-black">
    <p className="text-3xl text-black"> Order Processing...</p>
    </div>
    }
    {status &&
       <div className="bg-white flex flex-col w-full text-xl font-md text-black">
        <h1 className="text-3xl text-green-700 mb-8 mx-auto pt-8 mb-8">Success!</h1>
      <p className='text-xl text-black mx-auto'>Thank you for choosing KC Pro Assembly. We will reach out to schedule shortly.</p>
        </div>}
       {/*
        <img
          className={"mx-auto mb-16"}
          width={300}
          src={mainImage}
          alt={hoop.name}
        />
        <p className="text-black text-center text-lg w-[80%] lg:w-[60%] mx-auto">
          {`Contratulations! Your order for the was successful.`}{" "}
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
      </div> */}
    </>
  );
}

"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from 'next/link';

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
     <div className="bg-white flex flex-col w-full text-xl font-md text-black justify-center">
    <p className="text-3xl text-black"> Order Processing...</p>
    </div>
    }
    {status &&
       <div className="bg-white flex flex-col w-full text-xl text-center font-md text-black mb-8">
        <h1 className="text-3xl text-orange-400 mb-8 mx-auto pt-8 mb-8">Success!</h1>
      <p className='text-xl text-black mx-auto mb-16'>Thank you for choosing KC Pro Assembly. We will reach out to schedule shortly.</p>
       <Link 
              href="/" 
              className='w-full block bg-black text-md hover:bg-zinc-800 text-white font-semibold py-4 px-7 transition-all'
              // className="mx-auto bg-black hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-xl transition-all"
            >
              Back to Home
            </Link>
       
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

"use client";
import { useEffect, useState } from "react";
export default function FullJobView({ customer, job }) {
  const hoopStatus = job.hoop_ordered;
  const displayPhone = customer.phone.replace(
    /(\d{3})(\d{3})(\d{4})/,
    "$1-$2-$3",
  );

  const [step, setStep] = useState("confirm");
  const [pendingField, setPendingField] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function handleUpdateClick(field) {
    setPendingField(field);
    setShowModal(true);

    console.log(showModal);
  }
  return (
    <>
      <div className="max-w-7xl mx-auto px-8 border border-blue-500">
        <div className="grid grid-cols-3 text-black mt-16">
          <div className="border border-red-500 p-6">
            <h3 className="font-semibold text-2xl mb-4">Customer</h3>
            <p className="text-xl">{customer.name}</p>
            <p className=" text-lg text-black">{job.address}</p>
            <p className=" text-lg text-black">{displayPhone}</p>
          </div>
          <div className="border border-red-500 p-6">
            <h3 className="font-semibold text-2xl mb-4">Notes</h3>
            <button className="bg-indigo-500 p-2 rounded-md text-white hover:bg-indigo-700">
              View Notes
            </button>
          </div>
          <div className="border border-red-500 p-6">
            <h3 className="font-semibold  text-2xl mb-4">Job Status</h3>
            <div className="grid grid-cols-3 items-center gap-4 mb-4">
              <p className="col-start-1">Hoop Ordered: </p>
              <p className="col-start-2 text-sm text-black justify-self-center">
                {String(hoopStatus)}
              </p>
              <button className="text-xs bg-indigo-500 p-1 rounded-md text-white hover:bg-indigo-700">
                update
              </button>
            </div>
            <div className="grid grid-cols-3 items-center gap-4 mb-4">
              <p>811 Called: </p>

              <p className="justify-self-center text-sm text-black">
                {String(job.utilities_called)}
              </p>
              <button className="text-xs bg-indigo-500 p-1 rounded-md text-white hover:bg-indigo-700">
                update
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 items-center mb-4">
              <p>Hoop Ordered: </p>
              <p className="justify-self-center text-sm text-black">
                {String(hoopStatus)}
              </p>
              <button
                onClick={() => handleUpdateClick("hoop_ordered")}
                className="text-xs bg-indigo-500 p-1 rounded-md text-white hover:bg-indigo-700"
              >
                update
              </button>
            </div>
          </div>
        </div>
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex bg-black/50 w-full items-center justify-center"
            onClick={() => {
              if (step === "action") {
                setShowModal(false);
                setStep("confirm");
              }

              setShowModal(false);
            }}
          >
            <div
              className=" flex flex-col gap-4 justify-center items-center bg-white z-99 p-6 shadow-xl rounded-md"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-black text-center text-3xl font-semibold p-2">
                Update Hoop Order Status
              </p>

              {step === "confirm" && (
                <div className="flex gap-4">
                  <button
                    onClick={() => setStep("action")}
                    className="p-2 w-20 bg-indigo-500 text-white text-md shadow-lg hover:bg-indigo-700 rounded-md"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => {
                      setShowModal(false);
                    }}
                    className="p-2 w-20 bg-indigo-500 text-white text-md shadow-lg hover:bg-indigo-700 rounded-md"
                  >
                    No
                  </button>
                </div>
              )}
              {step === "action" && (
                <div className="flex gap-4 items-center justify-center">
                  <button className="p-2 w-20 bg-indigo-500 text-white text-md shadow-lg hover:bg-indigo-700 rounded-md">
                    Hoop Ordered
                  </button>
                  <button className="p-2 w-20 bg-indigo-500 text-white text-md shadow-lg hover:bg-indigo-700 rounded-md">
                    Order Hoop
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

"use client";
import { useEffect, useState } from "react";
import DashBoardStatusField from "../components/DashBoardStatusField";
import { change811Status } from "@/app/actions/jobStatusChanges.js";
export default function FullJobView({ customer, job }) {
  const hoopStatus = job.hoop_ordered;
  const displayPhone = customer.phone.replace(
    /(\d{3})(\d{3})(\d{4})/,
    "$1-$2-$3",
  );

  const jobId = job.id;

  const [step, setStep] = useState("confirm");
  const [pendingField, setPendingField] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [orderStatus, setOrderStatus] = useState(!!"");
  const [selectedValue, setSelectedValue] = useState(true);

  async function handleUpdateClick(field) {
    console.log("handleUpdateClick called with:", field);
    setPendingField(field);
    setShowModal(true);
    console.log(pendingField);

    // console.log(showModal);
    // console.log(orderStatus);
    // await change811Status(field);
  }

  useEffect(() => {
    console.log("Status Changed:", orderStatus);
  }, [orderStatus]);
  return (
    <>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-3 text-black mt-16 bg-gray-200 border border-1 border-gray-300 rounded-md shadow-lg">
          <div className=" p-6">
            <h3 className="font-semibold text-2xl mb-4">Customer</h3>
            <p className="text-xl">{customer.name}</p>
            <p className=" text-lg text-black">{job.address}</p>
            <p className=" text-lg text-black">{displayPhone}</p>
          </div>
          <div className="flex flex-col justify-between p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-2xl">Notes {">"}</h3>
              <a
                href={`/admin-dashboard/dashboard/jobs/${job.id}/notes`}
                className="bg-indigo-500 p-2 rounded-md text-white hover:bg-indigo-700"
              >
                View Notes
              </a>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-2xl">Message Customer {">"}</h3>
              <a
                href={`/admin-dashboard/dashboard/jobs/${job.id}/sms`}
                className="bg-indigo-500 p-2 rounded-md text-white hover:bg-indigo-700"
              >
                Send Text
              </a>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-semibold  text-2xl mb-4">Job Status</h3>
            {/* <div className="grid grid-cols-3 items-center gap-4 mb-4">
              <p className="col-start-1">Hoop Ordered: </p>
              <p className="col-start-2 text-sm text-black justify-self-center">
                {String(hoopStatus)}
              </p>
              <button className="text-xs bg-indigo-500 p-1 rounded-md text-white hover:bg-indigo-700">
                update
              </button>
            </div> */}
            {/* <div className="grid grid-cols-3 items-center gap-4 mb-4"> */}
            <div className=" mb-4">
              <DashBoardStatusField
                onClick={() => handleUpdateClick("utilities_called")}
                label={"Utilities Called:"}
                status={job.utilities_called}
              />
              <DashBoardStatusField
                onClick={() => handleUpdateClick("hoop_ordered")}
                label={"Hoop Ordered:"}
                status={job.hoop_ordered}
              />
              <DashBoardStatusField
                // May need a different onClick handler
                onClick={() => handleUpdateClick("anchor_set_at")}
                label={"Anchor Set"}
                status={job.anchor_set_at}
              />
              {/* <p>811 Called: </p>

              <p className="justify-self-center text-sm text-black">
                {String(job.utilities_called)}
              </p>
              <button className="text-xs bg-indigo-500 p-1 rounded-md text-white hover:bg-indigo-700">
                update
              </button>
            </div> */}
              {/* hoop order status field */}

              {/* <div className="grid grid-cols-3 items-center gap-4 mb-4">
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
            </div> */}
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
                  <select
                    value={orderStatus}
                    className="text-black bg-indigo-300"
                    onChange={(e) => setOrderStatus(e.target.value === "true")}
                  >
                    <option id="ordered" type="radio" value="true">
                      ordered
                    </option>
                    <option id="notOrdered" type="radio" value="false">
                      not ordered
                    </option>
                  </select>
                  <button
                    type="submit"
                    className="bg-indigo-500 w-20 text-white"
                    onClick={async () => {
                      setShowModal(false);
                      setStep("confirm");
                      await change811Status({
                        pendingField,
                        orderStatus,
                        jobId,
                      });
                    }}
                  >
                    submit
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

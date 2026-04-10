"use client";

export default function DashBoardStatusField({ label, status, onClick }) {
  //   const [step, setStep] = useState("confirm");
  //   const [pendingField, setPendingField] = useState(null);
  //   const [showModal, setShowModal] = useState(false);
  //   const [orderStatus, setOrderStatus] = useState(!!job.hoop_ordered);
  //   const [selectedValue, setSelectedValue] = useState(true);

  //   function handleUpdateClick(field) {
  //     setPendingField(field);
  //     setShowModal(true);

  //     // console.log(showModal);
  //     console.log(orderStatus);
  //   }

  //   useEffect(() => {
  //     console.log("Status Changed:", orderStatus);
  //   }, [orderStatus]);
  return (
    <div className="grid grid-cols-3 items-center gap-4 mb-4">
      <p>{label}</p>
      <div className="flex">
        <p className="inline">{String(status)}</p>
      </div>
      <button
        onClick={onClick}
        className="text-xs bg-indigo-500 p-1 rounded-md text-white hover:bg-indigo-700"
      >
        update
      </button>
    </div>
  );
}

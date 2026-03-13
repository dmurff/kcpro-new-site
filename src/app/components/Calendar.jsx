"use client";

import { DayPicker, getDefaultClassNames } from "react-day-picker";
// import "react-day-picker/style.css";
import { useState } from "react";

export default function Calendar() {
  const [selected, setSelected] = useState({});
  const defaultClassNames = getDefaultClassNames();
  console.log("SELECTED:", selected);

  return (
    <DayPicker
      animate
      mode="single"
      classNames={{
        root: `${defaultClassNames.root} flex flex-col items-center shadow-lg p-5 bg-black/40`,
        // selected: "text-orange-600",
      }}
      disabled={{ before: Date.now() + 1000 * 60 * 60 * 24 }}
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Selected ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
  );
}

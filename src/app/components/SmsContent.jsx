"use client";
import SmsTimeStamp from "@/app/components/SmsTimeStamp";
import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabase/client";
import ChatTextArea from "@/app/components/ChatTextArea";
import { summarizeMessages } from "../../../lib/ai/summarizeMessages";

export default function SmsContent({ messages, customer }) {
  const [messageList, setMessageList] = useState(messages);

  console.log("CUSTOMER:", messageList);

  // const output = await summarizeMessages(messageList);

  useEffect(() => {
    const channel = supabase
      .channel(`messages-${customer}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `customer_id=eq.${customer}`,
        },
        async (payload) => {
          setMessageList((prev) => [...prev, payload.new]);
          const output = await summarizeMessages(messageList);
          let cancelled = false;
          const bool = !cancelled;
          console.log(bool);
        },
      )
      .subscribe((status, err) => {
        console.log("CHANNEL STATUS 📨", status, err);
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="max-w-7xl p-6 bg-[#ededed] mx-auto text-black">
      {messageList.map((m) => {
        const direction = m.direction;
        if (direction === "inbound")
          return (
            <div
              key={m.id}
              className="max-w-7xl p-6 bg-[#ededed] mx-auto text-black"
            >
              <p className="bg-gray-300 rounded-md p-2 inline-block mr-2 shadow-lg">
                {m.body}{" "}
              </p>
              <SmsTimeStamp time={new Date(m.created_at).toLocaleString()} />
            </div>
          );
        else {
          return (
            <div
              key={m.id}
              className="max-w-7xl p-6 bg-[#ededed] mx-auto text-black"
            >
              <p className="bg-blue-300 rounded-md p-2 inline-block mr-2 shadow-lg">
                {m.body}{" "}
              </p>
              <SmsTimeStamp time={new Date(m.created_at).toLocaleString()} />
            </div>
          );
        }
      })}
      <ChatTextArea customer={customer} />
    </div>
  );
}

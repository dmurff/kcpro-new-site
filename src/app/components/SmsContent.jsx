"use client";
import SmsTimeStamp from "@/app/components/SmsTimeStamp";
import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabase/client";
import ChatTextArea from "@/app/components/ChatTextArea";

export default function SmsContent({ messages }) {
  const [messageList, setMessageList] = useState(messages);

  function handleSubmit(sentMessage) {
    console.log(sentMessage);
  }

  useEffect(() => {
    const channel = supabase
      .channel("messages")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          setMessageList((prev) => [...prev, payload.new]);
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="max-w-7xl p-6 bg-[#ededed] mx-auto text-black">
      {messageList.map((m) => (
        <div
          key={m.id}
          className="max-w-7xl p-6 bg-[#ededed] mx-auto text-black"
        >
          <p className="bg-indigo-300 rounded-md p-2 inline-block mr-2">
            {m.body}{" "}
          </p>
          <SmsTimeStamp time={new Date(m.created_at).toLocaleString()} />
        </div>
      ))}
      <ChatTextArea handleSubmit={handleSubmit} />
    </div>
  );
}

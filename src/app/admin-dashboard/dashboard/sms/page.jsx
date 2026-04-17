import supabase from "../../../../../utils/supabaseServer";
import SmsTimeStamp from "@/app/components/SmsTimeStamp";

export default async function Sms() {
  const { data, error } = await supabase.from("messages").select("*");
  const messages = data;
  console.log("data::::::", data);

  return (
    <>
      {messages.map((m) => (
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
    </>
  );
}

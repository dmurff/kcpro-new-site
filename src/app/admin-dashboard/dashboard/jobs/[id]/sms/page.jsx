import supabase from "../../../../../../../utils/supabaseServer";
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
          {m.body}{" "}
          <SmsTimeStamp time={new Date(m.created_at).toLocaleString()} />
        </div>
      ))}
    </>
  );
}

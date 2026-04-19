import supabase from "../../../../../utils/supabaseServer";
import SmsContent from "@/app/components/SmsContent";

export default async function Sms() {
  const { data, error } = await supabase.from("messages").select("*");
  const messages = data;
  console.log("data::::::", data);

  return (
    <>
      <SmsContent messages={messages} />
    </>
  );
}

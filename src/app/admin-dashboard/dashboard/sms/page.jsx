import supabase from "../../../../../utils/supabaseServer";
import SmsContent from "@/app/components/SmsContent";

export default async function Sms({ searchParams }) {
  const { customer } = await searchParams;
  const { data, error } = await supabase.from("messages").select("*");
  const messages = data;
  console.log("data::::::", data, "CUSTOMER:", customer);

  return (
    <>
      <SmsContent messages={messages} customer={customer} />
    </>
  );
}

import supabase from "../../../../../utils/supabaseServer";
import SmsContent from "@/app/components/SmsContent";

export default async function Sms({ searchParams }) {
  const { customer, jobId } = await searchParams;

  console.log(jobId);

  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("customer_id", customer);

  if (!data) {
    console.log(error, error.message);
    return;
  }

  const messages = data;

  console.log("data::::::", data, "CUSTOMER:", customer);

  return (
    <>
      <SmsContent messages={messages} customer={customer} />
    </>
  );
}

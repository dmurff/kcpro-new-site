import supabase from "../../../../../utils/supabaseServer";
import SmsContent from "@/app/components/SmsContent";
export const dynamic = "force-dynamic";

export default async function Sms({ searchParams }) {
  const { customer, jobId } = await searchParams;

  console.log("PAGE LOaded");
  console.log(jobId);

  console.log(customer);

  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("customer_id", customer)
    .order("created_at", { ascending: true });

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

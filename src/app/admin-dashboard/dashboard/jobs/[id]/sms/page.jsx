import supabase from "../../../../../../../utils/supabaseServer";

export default async function Sms() {
  const { data, error } = await supabase.from("messages").select("*");

  console.log(data);

  return (
    <>
      <div className="max-w-7xl p-6 bg-[#ededed] mx-auto">{data.body}</div>
    </>
  );
}

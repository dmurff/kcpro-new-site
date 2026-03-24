import supabase from "../../../../../utils/supabaseServer";
import CustomersView from "../../../components/CustomersView";

export default async function Customers() {
  const { data: customers, error } = await supabase
    .from("customers")
    .select("*");
  if (error) {
    console.log(error, error.message);
  }
  return (
    <>
      <CustomersView customers={customers} />
    </>
  );
}

import AddHoopForm from "@/app/components/AddHoopForm";
import { supabaseServer as supabase } from "../../../../../../lib/supabase/server";
import { updateHoop } from "../../../actions";

export default async function EditHoop({ params }) {
  const { id } = params;

  const { data: hoop, error } = await supabase
    .from("hoops")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return <p className="text-red-600">Error: {error.message}</p>;

  if (!hoop) return <p>No hoop found</p>;

  return (
    <>
      <AddHoopForm initialValues={hoop} mode="edit" id={id} />;
      <AddHoopImages hoop={hoop} />
    </>
  );
}

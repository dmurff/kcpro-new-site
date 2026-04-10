"use server";
import { revalidatePath } from "next/cache";
import supabase from "../../../utils/supabaseServer";

export async function change811Status({ pendingField, orderStatus, jobId }) {
  console.log("pending Status: ", pendingField, "Order Status", orderStatus);

  let result = "";

  if (
    pendingField === "utilities_called" ||
    (pendingField === "hoop_ordered" && orderStatus === true) ||
    orderStatus === false
  ) {
    const { data, error } = await supabase
      .from("jobs")
      .update({ [pendingField]: orderStatus })
      .eq("id", jobId)
      .select();

    result = data;
  }

  console.log("DATA:", result);

  revalidatePath(`/admin-dashboard/dashboard/jobs/${jobId}`);
}

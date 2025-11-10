import supabase from "../../utils/supabaseServer";

export async function upsertCustomer({ name, email, phone, address }) {
  const { data, error } = await supabase
    .from("customers")
    .upsert(
      {
        email,
        name,
        phone,
        address,
      },
      { onConflict: "email" }
    )
    .select()
    .single();

  if (error) {
    console.error("❌ Error upserting customer:", error);
    throw new Error("Failed to save customer");
  }

  return data; // customer row
}

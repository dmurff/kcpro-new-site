import supabase from "../../utils/supabaseServer";

export async function createCustomer(name, email, phone, address) {
  const { data: customer, error } = await supabase
    .from("customers")
    .upsert(
      {
        name,
        email,
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

  return customer;
}

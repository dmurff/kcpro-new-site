import createSupabaseServer from "./supabase/server.js";

export async function createCustomer(
  name,
  email,
  phone,
  address,
  city,
  state,
  postalCode
) {
  const supabase = createSupabaseServer();

  const { data: customer, error } = await supabase
    .from("customers")
    .upsert(
      {
        name,
        email,
        phone,
        address,
        city,
        state,
        postal_code: postalCode,
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

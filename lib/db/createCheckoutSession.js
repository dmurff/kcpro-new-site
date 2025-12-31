// import "server-only";
import supabase from "../../utils/supabaseServer";

export async function createCheckoutSession(checkoutData) {

    const {data, error } = await supabase.from('checkout_sessions').insert({checkoutData}).select().single()


    if (error) {
    console.error("❌ Error adding checkout_session:", error);
    throw new Error("Failed to save customer");
  }

  return data;
}

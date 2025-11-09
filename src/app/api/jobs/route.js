import supabase from "utils/supabaseServer";

export async function POST(req, res) {
  try {
    const customerData = req.body;

    const { error } = await supabase.insert(customerData);
  } catch (err) {
    console.error("couldn't post");
  }
}

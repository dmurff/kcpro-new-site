import supabase from "../../../../utils/supabaseServer";

export async function POST(req) {
  const formData = await req.json();
  const { id, ...updates } = formData;

  const { data, error } = await supabase
    .from("hoops")
    .update(updates)
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
  return new Response(JSON.stringify({ success: true, data }), {
    status: 200,
  });
}

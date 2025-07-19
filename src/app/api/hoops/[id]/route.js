import supabase from "../../../utils/supabaseServer";
import { NextResponse } from "next/server";

export async function GET(req, params) {
  const { id } = params;

  const { data, error } = await supabase
    .from("hoops")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, data });
}

import createSupabaseServer from "../../../../lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const supabase = createSupabaseServer();
  try {
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
    console.log(data);

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("route error", err);
    return NextResponse.json(
      { error: "internal Server error" },
      { status: 500 }
    );
  }
}

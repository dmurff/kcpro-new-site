import supabase from "../../../../utils/supabaseServer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const customerData = await req.json();

    console.log("🏀💶:", customerData);

    return NextResponse.json({ message: "job", customerData });

    // const { error } = await supabase.insert(customerData);
  } catch (err) {
    console.error("couldn't create job");
  }
}

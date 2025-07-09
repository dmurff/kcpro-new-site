"use server";
import supabase from "/utils/supabaseClient";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();

  if (!data) {
    return NextResponse.json(
      { success: false, error: "No data provided" },
      { status: 400 }
    );
  }

  const jobTypes = [];
  if (data.basketball_hoop) jobTypes.push("basketball_hoop");
  if (data.playset) jobTypes.push("playset");
  if (data.furniture) jobTypes.push("furniture");
  if (data.gym_product) jobTypes.push("gym_product");

  const insertData = {
    ...data,
    job_type: jobTypes,
  };

  delete insertData.basketball_hoop;
  delete insertData.playset;
  delete insertData.furniture;
  delete insertData.gym_product;

  const { error } = await supabase.from("leads").insert([insertData]);

  if (error) {
    console.error("insert error", error);

    return NextResponse.json({ success: false, error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

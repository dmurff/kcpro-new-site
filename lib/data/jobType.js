import { supabaseServer as supabase } from "../supabase/server.js";

export default async function determineJobType(selectedServiceIds) {
  if (!selectedServiceIds || selectedServiceIds.length === 0) {
    // hoop purchase delivery only
    const { data, error } = await supabase
      .from("job_types")
      .select("id")
      .eq("name", "delivery")
      .single();

    if (error) throw new Error(error.message);
    return data.id;
  }
  const { data: services, error } = await supabase
    .from("services")
    .select("name")
    .in("id", selectedServiceIds);

  console.log("🐦🐦🐦🐦👋👋👋👋", services);

  let hasInstall = false;
  let hasRemoval = false;

  for (const s of services) {
    const name = s.name.toLowerCase();
    if (s.name.includes("installation")) hasInstall = true;
    if (s.name.includes("removal")) hasRemoval = true;
  }

  let type = "";

  // add more types soon
  if (hasRemoval && hasInstall) type = "installation";
  if (hasRemoval) type = "removal";
  if (hasInstall) type = "installation";

  //   console.log(type);

  const { data: jobType } = await supabase
    .from("job_types")
    .select("id")
    .eq("name", type)
    .single();

  console.log(jobType);

  const finalJobType = jobType.id;

  console.log(finalJobType);

  return finalJobType;
}

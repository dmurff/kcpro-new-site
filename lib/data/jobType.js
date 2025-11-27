import { supabaseServer as supabase } from "../supabase/server";

export default async function determineJobType(selectedServiceIds) {
  if (!selectedServiceIds || selectedServiceIds.length === 0) {
    return "delivery"; // only a purchased hoop
  }
  const { data: services, error } = await supabase
    .from("services")
    .select("name")
    .in("id", selectedServiceIds);

  console.log("🐦🐦🐦🐦👋👋👋👋", services);

  let hasInstall = false;
  let hasRemoval = false;
  let type = "";

  for (const s of services) {
    if (s.name.includes("installation")) hasInstall = true;
    if (s.name.includes("removal")) hasRemoval = true;
  }

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

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

  let hasInstall = false;
  let hasRemoval = false;
  let hasConcrete = false;
  let hasAssembly = false;
  let hasRelocate = false;
  let dirtRemoval = false;
  let boxRemoval = false;
  let backboardRepair = false;

  for (const s of services) {
    const name = s.name.toLowerCase();
    if (s.name.includes("installation")) hasInstall = true;
    if (s.name.includes("removal")) hasRemoval = true;
    if (s.name.includes("assembly")) hasAssembly = true;
    if (s.name.includes("concrete")) hasConcrete = true;
    if (s.name.includes("relocate")) hasRelocate = true;
    if (s.name.includes("dirt")) dirtRemoval = true;
    if (s.name.includes("box")) boxRemoval = true;
    if (s.name.includes("backboard")) backboardRepair = true;
  }

  let type = "";

  // add more types soon
  if (hasRemoval && hasInstall) type = "installation";
  if (hasRemoval) type = "removal";
  if (hasInstall) type = "installation";
  if (hasAssembly) type = "assembly_only";
  if (hasConcrete) type = "anchor_only";
  if (hasRelocate) type = "relocation";
  if (dirtRemoval) type = "dirt_disposal";
  if (boxRemoval) type = "box_disposal";
  if (backboardRepair) type = "backboard_repair";

  console.log("Type:", type);

  const { data: jobType } = await supabase
    .from("job_types")
    .select("id")
    .eq("name", type)
    .single();

  console.log("??????????????????????????????????????????", jobType);

  const finalJobType = jobType.id;

  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>🔨", finalJobType);

  return finalJobType;
}

import supabase from "../../../../../utils/supabaseServer";
import JobsView from "../../../components/JobsView";
import { getAllCustomers } from "../../../../../lib/data/customers";
import { getJobType } from "../../../../../lib/data/jobs";

export default async function Customers() {
  const { data: jobs, error } = await supabase.from("jobs").select("*");
  const customers = await getAllCustomers();
  const jobType = await getJobType();
  console.log(jobs);
  console.log(jobType);
  return (
    <>
      <JobsView jobs={jobs} customers={customers} jobType={jobType} />
    </>
  );
}

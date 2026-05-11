import { getJobById } from "../../../../../../lib/data/jobs";
import { getCustomerById } from "../../../../../../lib/data/customers";
import FullJobView from "../../../../components/FullJobView";
export const dynamic = "force-dynamic";

export default async function JobDetailed({ params }) {
  const { id } = await params;

  const jobId = id;

  const job = await getJobById(jobId);

  console.log(job);

  const customer = await getCustomerById(job.customer_id);

  return <FullJobView customer={customer} job={job} />;
}

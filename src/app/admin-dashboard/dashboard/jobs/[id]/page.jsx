import { getJobById } from "../../../../../../lib/data/jobs";
import { getCustomerById } from "../../../../../../lib/data/customers";

export default async function JobDetailed({ params }) {
  const { id } = await params;

  const jobId = id;

  const job = await getJobById(jobId);

  console.log(job);

  const customer = await getCustomerById(job.customer_id);

  return (
    <div className="text-4xl text-black font-semibold">
      <h3 className="text-xl">{customer.name}</h3>
      <p className="text-lg text-black">{job.address}</p>
    </div>
  );
}

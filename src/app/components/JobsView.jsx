import supabase from "../../../utils/supabaseServer";
import Link from "next/link";

export default async function JobsView({ jobs, customers, jobType }) {
  console.log("🎯 JobsView received:", {
    jobsCount: jobs?.length,
    customersCount: customers?.length,
    jobTypeCount: jobType?.length,
    lastJob: jobs?.[jobs.length - 1],
    firstJob: jobs?.[0],
  });
  return (
    <>
      <div className="mx-auto p-10">
        {jobs &&
          jobs
            .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
            .map((j) => {
              const customer = customers.find((c) => c.id === j.customer_id);

              const jobName = jobType.find((t) => j.job_type_id === t.id);
              console.log(jobName);
              const formatDate = (timestamp) => {
                return new Date(timestamp).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit",
                });
              };

              return (
                <Link
                  href={`/admin-dashboard/dashboard/jobs/${j.id}`}
                  key={j.id}
                  id={j.id}
                  className="grid lg:grid-cols-4 gap-4 lg:gap-2 text-white bg-black/80 mb-4 p-2 hover:cursor-pointer hover:focus-ring-blue-200 hover:bg-black/40 rounded-md shadow-md"
                >
                  <div>
                    <h3 className=" font-semibold">Customer</h3>
                    <p>{customer.name}</p>
                    <p>{customer.address}</p>
                    <p>{customer.phone}</p>
                  </div>
                  <div>
                    <h3 className=" font-semibold">Job</h3>

                    <p>{jobName.name}</p>
                  </div>
                  <div>
                    <h3 className=" font-semibold">Order Date</h3>
                    <p>{formatDate(j.created_at)}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">811 Called</h3>

                    <p>{String(j.utilities_called)}</p>
                  </div>
                  <div>
                    <h3 className=" font-semibold">Hoop Ordered</h3>

                    <p>{String(j.hoop_ordered)}</p>
                  </div>
                  <div>
                    <h3 className=" font-semibold">Due</h3>

                    <p>${Number(j.remainder_cents / 100).toFixed(2)}</p>
                  </div>
                </Link>
              );
            })}
      </div>
    </>
  );
}

import supabase from "../../../utils/supabaseServer";

export default async function JobsView({ jobs, customers, jobType }) {
  return (
    <>
      <div className="max-w-7xl">
        {jobs &&
          jobs.map((j) => {
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
              <div
                key={j.id}
                id={j.id}
                className="grid grid-cols-4 gap-2 text-gray-900 bg-gray-300 mb-2"
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
                  <h3 className=" font-semibold">Due</h3>

                  <p>${Number(j.remainder_cents / 100).toFixed(2)}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

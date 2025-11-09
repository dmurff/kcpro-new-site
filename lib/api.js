export async function createJob(customerData) {
  const res = await fetch("/api/jobs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customerData),
  });

  if (!res.ok) {
    throw new Error("Failed to create job");
  }

  return res.json();
}

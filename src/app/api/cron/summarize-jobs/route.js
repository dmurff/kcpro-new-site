import { cronJobSummary } from "../../../../../lib/ai/cronJobSummary";

export async function GET(req) {
  const header = req.headers.get("authorization");

  if (header !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  await cronJobSummary();
  return new Response("Success", { status: 200 });
}

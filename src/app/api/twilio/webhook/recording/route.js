import "server-only";

export async function POST(req) {
  const request = await req.formData();

  const recordingObj = Object.fromEntries(request);

  console.log(recordingObj);

  return new Response("success", { status: 200 });
}

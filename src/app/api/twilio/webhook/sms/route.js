import "server-only";

export async function POST(req) {
  const formData = await req.formData();
  const payload = Object.fromEntries(formData);
  console.log(payload);

  return new Response("", { status: 200 });
}

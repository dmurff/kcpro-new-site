import "server-only";
import handleSms from "../../../../../../lib/data/handleSms.js";

export async function POST(req) {
  const formData = await req.formData();
  const payload = Object.fromEntries(formData);
  console.log(payload);

  handleSms(payload);

  return new Response("", { status: 200 });
}

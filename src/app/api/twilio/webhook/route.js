import "server-only";

import Twilio from "twilio";

const sid = process.env.TWILIO_ACCOUNT_SID;
const token = process.env.TWILIO_AUTH_TOKEN;

const client = Twilio(sid, token);

export default async function POST(req) {
  const payload = await req.body;

  console.log(payload);
}

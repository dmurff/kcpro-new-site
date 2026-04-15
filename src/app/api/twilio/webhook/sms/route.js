import "server-only";
import twilio from "twilio";
import { handleSms } from "../../../../../../lib/data/handleSms.js";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const payload = Object.fromEntries(formData);
    console.log("Webhook hit!!!!!", payload);

    const twilioSignature = req.headers.get("x-twilio-signature");
    const url = "https://www.kcproassembly.com/api/twilio/webhook/sms";
    const authToken = process.env.TWILIO_AUTH_TOKEN;

    const isValid = twilio.validateRequest(
      authToken,
      twilioSignature,
      url,
      payload,
    );

    if (!isValid) {
      return new Response("Unauthorized", { status: 403 });
    }

    handleSms(payload);

    return new Response("", { status: 200 });
  } catch (err) {
    if (err) {
      return new Response(err.message, { status: 403 });
    }
  }
}

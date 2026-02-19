import "server-only";

// Download the helper library from https://www.twilio.com/docs/node/install
import Twilio from "twilio";

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = Twilio(accountSid, authToken);

export async function createMessage(customerPhone) {
  // Dynamic import of twilio because it is node only and must be called at run time because it can't be part of next.js build bundle
  // const Twilio = (await import("twilio")).default;

  console.log(customerPhone, "📞📞📞📞📞");

  const message = await client.messages.create({
    body: `KC Pro Assembly: Your order was successful!

We've placed you in our job queue and will reach out shortly to schedule.

Questions? 
Call/Text: 816-301-4776
Email: support@kcproassembly.com`,
    from: "+19137044870",
    to: customerPhone,
  });

  console.log(message.body);
  console.log("📨 Twilio SID:", message.sid);
  console.log("📨 Twilio Status:", message.status);
}

export async function saleNotification() {
  const message = await client.messages.create({
    body: `A new job has been created`,
    from: "+19137044870",
    to: "+18167392375",
  });
}
// createMessage();

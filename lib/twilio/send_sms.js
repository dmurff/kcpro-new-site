// Download the helper library from https://www.twilio.com/docs/node/install
import Twilio from "twilio";

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = Twilio(accountSid, authToken);

export async function createMessage(customerPhone) {
  const message = await client.messages.create({
    body: "Your order was successfull! Please visit www.kcproassembly.com for next steps. Viktoriya is the best wifey in the world!",
    from: "+19137044870",
    to: customerPhone,
  });

  console.log(message.body);
  console.log("📨 Twilio SID:", message.sid);
  console.log("📨 Twilio Status:", message.status);
}

// createMessage();

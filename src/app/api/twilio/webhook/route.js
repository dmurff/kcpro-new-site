import "server-only";

// import Twilio from "twilio";

// const sid = process.env.TWILIO_ACCOUNT_SID;
// const token = process.env.TWILIO_AUTH_TOKEN;

// const client = Twilio(sid, token);

// export async function GET(req) {
//   return new Response("dimitri is a turd burglar", { status: 200 });
// }

export async function POST(req) {
  //   const formData = await req.formData();

  //   const payload = Object.fromEntries(formData);

  //   console.log(payload);
  // Must return TwiML or Twilio throws an error
  const callbackUrl =
    "https://www.kcproassembly.com/api/twilio/webhook/recording";
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
    <Response>
      <Say>Thanks for calling KC Pro Assembly. Dima is eeeeeaaaaahhhhhhhhhhrrrg.</Say>
      <Dial record="record-from-answer"
        recordingStatusCallback="${callbackUrl}"
        recordingStatusCallbackEvent="in-progress completed absent">
        <Number>+18167392375</Number>
      </Dial>
    </Response>`;

  return new Response(twiml, {
    headers: { "Content-Type": "text/xml" },
  });
}

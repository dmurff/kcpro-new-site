import Twilio from "twilio";
import supabase from "../../../../../utils/supabaseServer";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = Twilio(accountSid, authToken);

export async function POST(req) {
  //   const request = await req.json();
  //   console.log(request);
  try {
    const { message, customer } = await req.json();
    console.log(message, customer);

    const { data: customerData, error } = await supabase
      .from("customers")
      .select("*")
      .eq("id", customer)
      .single();

    console.log(customerData.name);

    console.log("1 - before Twilio", {
      from: "+19134233374",
      to: customerData.phone,
      body: message,
    });

    const smsSend = await client.messages.create({
      body: `${message}`,
      from: "+19134233374",
      to: `${customerData.phone}`,
    });

    console.log("2 - after Twilio:", smsSend.sid);

    // what do I do here? Do I check it for success to twilio? How do I know whether or not to proceed with inserting the message to supabase?
    const { data, error: insertError } = await supabase
      .from("messages")
      .insert({
        from_number: "+19134233374",
        to_number: customerData.phone,
        customer_id: customerData.id,
        body: message,
        direction: "outbound",
        twilio_sid: smsSend.sid,
      });

    console.log("3 - after insert:", { data, insertError });

    if (insertError) {
      console.error("Twilio sent message but insert failed", insertError, {
        sid: smsSend.sid,
      });

      return Response.json({ success: false }, { status: 500 });
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("FULL ROUTE ERROR:", {
      message: err?.message,
      code: err?.code,
      status: err?.status,
      moreInfo: err?.moreInfo,
      stack: err?.stack,
    });

    return Response.json(
      { success: false, error: err?.message, code: err?.code },
      { status: 500 },
    );
  }
}

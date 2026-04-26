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

    const smsSend = await client.messages.create({
      body: `${message}`,
      from: "+19134233374",
      to: `${customerData.phone}`,
    });

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

    if (insertError) {
      console.error("Twilio sent message but insert failed", insertError, {
        sid: smsSend.sid,
      });
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.log(err, err.message);
    if (err) return Response.json({ error: err.message }, { status: 500 });
  }
}

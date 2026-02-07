import "server-only";

import { supabaseServer as supabase } from "./../supabase/server.js";
import { createCustomer } from "./createCustomer";
import { createJob } from "./createJob";
import { sendEmail } from "../email/emailClient";
import { createMessage } from "../twilio/send_sms";
import determineJobType from "../data/jobType";

export async function createCustomerAndJob(data) {
  // let customer = null;
  // let job = null;
  // let message = null;

  try {
    const {
      name,
      email,
      phone,
      address,
      city,
      state,

      postal_code: postalCode = data.postalCode,
      hoop_id: hoopId = data.hoopId,
      remainder_cents: remainderCents = data.remainderCents,
      payment_intent_id: paymentIntentId = data.paymentIntentId,
      // total_cents: totalCents = data.totalCents,
      deposit_cents: depositCents = data.depositCents,
      checkout_total: checkoutTotal = data.checkoutTotal,

      selected_service_ids: selectedServiceIds = data.selectedServiceIds || [],
    } = data;

    const customer = await createCustomer(
      name,
      email,
      phone,
      address,
      city,
      state,
      postalCode
    );

    // 2) determine job type

    const jobType = await determineJobType(selectedServiceIds);
    // await determineJobType()
    // 2) Create job (customer.id is now available)
    // Job should only be created if the customer selects they want a job

    const job_type_id = jobType;

    const result = await createJob({
      customer_id: customer.id,
      hoop_id: hoopId,
      address,
      city,
      state,
      postalCode: postalCode,
      job_type_id: jobType,
      remainder_cents: remainderCents,
      payment_intent_id: paymentIntentId,
    });

    const job = result.job;
    const message = job.message;

    for (const serviceId of selectedServiceIds) {
      try {
        await supabase.from("jobs_services").insert({
          job_id: job.id,
          service_id: serviceId,
        });
      } catch (err) {
        console.error("Could not add service to database.", err.message);
      }
    }

    try {
      await sendEmail({
        to: `${customer.email}`,
        subject: "Order Confirmation",
        html: "Hey!",
        text: "Thanks for choosing KC Pro Assembly! We look forward to meeting you and we will send instructions for next steps withing 24 hours!",
      });
    } catch (err) {
      console.error("⚠️ email failed", err.message);
    }

    const phoneNumber = customer.phone;

    // TWILIO /////////////
    // ////////////////////////
    try {
      await createMessage(phoneNumber);
    } catch (err) {
      console.error("⚠️ SMS failed", err.message);
    }

    return { customer, job, message };
  } catch (err) {
    console.error("🔥 Critical error in createCustomerAndJob", err);
    throw new Error("Your order was not successfull. Please retry.");
  }
}

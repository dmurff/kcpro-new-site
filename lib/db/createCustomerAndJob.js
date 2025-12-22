"use server";

import supabase from "../../utils/supabaseServer";
import { createCustomer } from "./createCustomer";
import { createJob } from "./createJob";
import { sendEmail } from "../email/emailClient";
import { createMessage } from "../twilio/send_sms";
import determineJobType from "../data/jobType";

export async function createCustomerAndJob(customerData, jobData) {
  // let customer = null;
  // let job = null;
  // let message = null;

  try {
    const { name, email, phone, address } = customerData;
    const {
      hoop_id,
      remainder_cents,
      payment_intent_id,
      selectedServiceIds = [],
    } = jobData;

    const customer = await createCustomer(name, email, phone, address);

    // 2) determine job type

    console.log("¥¥¥¥¥¥¥¥", selectedServiceIds);
    const jobType = await determineJobType(selectedServiceIds);
    // await determineJobType()
    console.log(jobType);
    // 2) Create job (customer.id is now available)
    // Job should only be created if the customer selects they want a job

    const full_address = address;
    const job_type_id = jobType;

    const result = await createJob(
      customer.id,
      hoop_id,
      full_address,
      job_type_id,
      remainder_cents,
      payment_intent_id
    );

    const job = result.job;
    const message = job.message;
    console.log("🏀🏀🏀🏀🏀🏀🏀🏀🏀🏀🏀", selectedServiceIds);

    for (const serviceId of selectedServiceIds) {
      try {
        console.log("🔨🔨🔨🔨🔨🔨🔨🔨🔨🔨🔨", serviceId, job.id);
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

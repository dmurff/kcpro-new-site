import supabase from "../../utils/supabaseServer";
import { createCustomer } from "./createCustomer";
import { createJob } from "./createJob";
import { sendEmail } from "../email/emailClient";

export async function createCustomerAndJob(customerData, jobData) {
  const { name, email, phone, address } = customerData;
  const {
    hoop_id,
    remainder_cents,
    payment_intent_id,
    selectedServiceIds = [],
  } = jobData;

  const customer = await createCustomer(name, email, phone, address);

  // 2) Create job (customer.id is now available)
  const { job, message } = await createJob(
    customer.id,
    hoop_id,
    remainder_cents,
    payment_intent_id
  );

  for (const serviceId of selectedServiceIds) {
    await supabase.from("jobs_services").insert({
      job_id: job.id,
      service_id: serviceId,
    });
  }

  if ((customer, job)) {
    await sendEmail({
      to: `${customer.email}`,
      subject: "Order Confirmation",
      html: "Hey!",
      text: "Thanks for choosing KC Pro Assembly! We look forward to meeting you and we will send instructions for next steps withing 24 hours!",
    });
  }

  return { customer, job, message }; // customer row
}

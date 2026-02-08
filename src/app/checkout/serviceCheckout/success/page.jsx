import { getCustomerById } from "../../../../../lib/data/customers";
import { getJobByPI } from "../../../../../lib/data/jobs";
// import Stripe from 'stripe';
import ServiceSuccessClient from "@/app/components/ServiceSuccessClient";
import { getServiceId } from "../../../../../lib/data/job-service";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function Page({ searchParams }) {
  const filters = await searchParams;

  console.log("💶💶🔨💶🔨💶", filters);
  const pi = filters.payment_intent;
  const clientSecret = filters.payment_intent_client_secret;

  console.log("PI:", pi);

  return (
    <>
      <ServiceSuccessClient pi={pi} />
    </>
  );
}

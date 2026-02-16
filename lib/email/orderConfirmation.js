import "server-only";
import { fetchHoop } from "../data/hoops.js";
import getCheckoutSession from "../db/getCheckoutSession";

export default async function orderConfirmationEmail({ customer, job }) {
  const name = customer?.name || "there";

  const pi = job.deposit_payment_intent_id;

  const priceData = await getCheckoutSession(pi);

  const { checkout_total, remainder_cents } = priceData;

  //   const hoopId = priceData?.hoop_id ?? null;

  //   const hoop = await fetchHoop(hoopId);

  const remainder = remainder_cents / 100;

  const orderTotal = checkout_total / 100;

  const text = `
Hey ${name},

Thanks for your order from KC Pro Assembly!

Order Total: $${orderTotal}

Due on job completion: $${remainder}

We will send instructions for next steps shortly.

- KC Pro Assembly
`;

  const html = `
  <div style="font-family: Arial, sans-serif;">
    <h2>Hey ${name},</h2>
    <p>Thanks for your order from <strong>KC Pro Assembly</strong>!</p>

    <p><strong>Order Total:</strong> $${orderTotal}</p>

    <p><strong>Due on job completion:</strong> $${remainder}</p>

    <p>We will send instructions for next steps shortly.</p>

    <p style="margin-top: 24px;">- KC Pro Assembly</p>
  </div>
`;

  return { text, html };
}

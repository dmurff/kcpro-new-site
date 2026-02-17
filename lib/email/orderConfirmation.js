import "server-only";
import { fetchHoop } from "../data/hoops.js";
import getCheckoutSession from "../db/getCheckoutSession";

export default async function orderConfirmationEmail({ customer, job }) {
  const name = customer?.name || "there";

  const pi = job.deposit_payment_intent_id;

  const priceData = await getCheckoutSession(pi);

  const { checkout_total, remainder_cents, deposit_cents } = priceData;

  //   const hoopId = priceData?.hoop_id ?? null;

  //   const hoop = await fetchHoop(hoopId);

  const remainder = (remainder_cents / 100).toFixed(2);

  const deposit = (deposit_cents / 100).toFixed(2);

  const checkoutTotal = (checkout_total / 100).toFixed(2);

  const paid = checkout_total ? checkoutTotal : deposit;

  const text = `
Hey ${name},

Thanks for your order from KC Pro Assembly!

Paid at checkout: $${paid}

Due on job completion: $${remainder}


Email: support@kcproassembly.com
Phone: 816-301-4776 

We will reach out with instructions for next steps shortly. In the meantime, reach out if you have any questions.
Thanks again for choosing KC Pro Assemnly and we look forward to meeting you!
- KC Pro Assembly
`;

  const html = `
  <div style="font-family: Arial, sans-serif;">
    <h2>Hey ${name},</h2>
    <p>Thanks for your order from <strong>KC Pro Assembly</strong>!</p>

    <p><strong>Paid at checkout:</strong> $${paid}</p>

    <p><strong>Due on job completion:</strong> $${remainder}</p>

    <p>
    Email: support@kcproassembly.com< br/>
    Phone: 816-301-4776</p>

    <p>We will reach out with instructions for next steps shortly. In the meantime if you have any questions contact us.
    Thanks again for choosing KC Pro Assemnly and we look forward to meeting you!</p>

    <p style="margin-top: 24px;">- KC Pro Assembly</p>
  </div>
`;

  return { text, html };
}

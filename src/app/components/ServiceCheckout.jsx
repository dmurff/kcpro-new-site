"use client";

import ServiceCheckoutForm from "./ServiceCheckoutForm";

export default function ServiceCheckout({ clientSecret, service, deposit, remainder}) {
  return (
    <>
      
        <ServiceCheckoutForm clientSecret={clientSecret} service={service} deposit={deposit} remainder={remainder}/>
    </>
  );
}

import ServiceCheckout from "@/app/components/ServiceCheckout";
// import ServiceCheckoutWrapper from "@/app/components/ServiceCheckoutWrapper";

export default async function Page({ searchParams }) {
  const { serviceId, clientSecret } = await searchParams;

  //   console.log("🐦🐦🐦🐦🐦🕰️🕰️🕰️🕰️🕰️", );

  return (
    <>
      <ServiceCheckout clientSecret={clientSecret} />
    </>
  );
}

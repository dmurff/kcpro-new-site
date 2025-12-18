import { fetchAllServices } from "../../../../lib/data/service";

export default async function (searchParams) {
  const services = await fetchAllServices();

  return (
    <>
      <ServiceBundle services={services} />
    </>
  );
}

export const dynamic = "force-dynamic";

import { fetchAllServices } from "../../../../lib/data/service";
import ServiceBundle from "../../components/ServiceBundle";

export default async function ({ searchParams }) {
  const services = await fetchAllServices();

  const { service_id } = await searchParams;

  console.log(service_id);
  return (
    <>
      <ServiceBundle services={services} primaryServiceId={service_id} />
    </>
  );
}

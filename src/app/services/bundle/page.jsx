export const dynamic = "force-dynamic";

import { fetchAllServices } from "../../../../lib/data/service";
import ServiceBundle from "../../components/ServiceBundle";
import { getServiceNameById } from "../../../../lib/data/service";

export default async function BundlePage({ searchParams }) {
  const services = await fetchAllServices();

  const { service_id } = await searchParams;

  const selectedService = await getServiceNameById(service_id);
  console.log("fffffffffffffffff", selectedService);

  const serviceName = selectedService.name;

  console.log(typeof serviceName);

  return (
    <>
      <ServiceBundle
        services={services}
        primaryServiceId={service_id}
        serviceName={serviceName}
      />
    </>
  );
}

import { fetchAllServices } from "../../../../lib/data/service";
import ServiceBundle from "../../components/ServiceBundle";

export default async function (searchParams) {
  const services = await fetchAllServices();

  return (
    <>
      <ServiceBundle services={services} />
    </>
  );
}

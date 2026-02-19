import { fetchServiceBySlug } from "../../../../lib/data/service";
import { SERVICE_CONTENT } from "../../../../lib/data/serviceContent";
import ServiceSlugContent from "@/app/components/ServiceSlugContent";
import { notFound } from "next/navigation";
import ServiceNavbar from "@/app/components/ServiceNavbar";

export default async function Page({ params }) {
  const { slug } = await params;
  const service = await fetchServiceBySlug(slug);
  if (!service) notFound();

  const content = SERVICE_CONTENT[slug];

  console.log("💳💳💳💳💳💳❌", service.id);
  return (
    <>
      <ServiceNavbar />
      <ServiceSlugContent
        slug={slug}
        serviceId={service.id}
        content={content}
        service={service}
      />
    </>
  );
}

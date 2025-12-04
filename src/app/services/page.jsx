import { fetchAllServices } from "../../../lib/data/service";

export default async function Services() {
  const services = await fetchAllServices();

  return (
    <>
      {services.map((s) => (
        <div key={s.id} className="bg-black/80">
          <h1 className="text-white font-bold text-3xl">{s.display_name}</h1>
        </div>
      ))}
    </>
  );
}

export const dynamic = "force-dynamic";

import AddHoopForm from "../../components/AddHoopForm";
import createSupabaseServer from "../../../lib/supabase/server";
import Link from "next/link";

export default async function AdminDashboard() {
  const supabase = createSupabaseServer();
  const { data: hoops, error } = await supabase.from("hoops").select("*");

  console.log(hoops);

  return (
    <>
      <div className="flex justify-between mb-8 bg-gray-900">
        <ul className="flex flex-row gap-8 text-white text-xl">
          <li className="hover:bg-blue-100 hover:text-gray-900">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:bg-blue-100 hover:text-gray-900">
            <Link href="/admin-dashboard/hoops/new">Add Hoop</Link>
          </li>
        </ul>
      </div>
      <div className="text-center p-4 m-4"></div>
      <ul className="flex flex-row gap-6 m-8 p-2 bg-blue-200">
        {hoops.map((h) => (
          <li key={h.id} className="bg-blue-200 text-md text-gray-900 p-4">
            <Link href={`/admin-dashboard/hoops/${h.id}/edit`}>{h.name}</Link>
          </li>
        ))}
      </ul>

      <AddHoopForm />
    </>
  );
}

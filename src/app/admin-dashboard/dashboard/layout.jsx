import Link from "next/link";
export const dynamic = "force-dynamic";

export default function DashboardLayout({ children }) {
  return (
    <>
      <nav className="flex justify-center bg-[#ededed] p-6">
        <ul className="flex  gap-4 lg:gap-8 max-w-4xl items-center text-lg text-gray-500 font-semibold ">
          <li className="hover:text-gray-900 hover:cursor-pointer transition delay-100 duration-300 ease-in-out">
            <Link href="/admin-dashboard/dashboard/jobs">Jobs</Link>
          </li>
          <li className="hover:text-gray-900 hover:cursor-pointer transition delay-100 duration-200 ease-in-out">
            <Link href="/admin-dashboard/dashboard/customers">Customers</Link>
          </li>
          <li className="hover:text-gray-900 hover:cursor-pointer transition delay-100 duration-200 ease-in-out">
            <Link href="/admin-dashboard/hoops">Messenger</Link>
          </li>
          <li className="hover:text-gray-900 hover:cursor-pointer transition delay-100 duration-200 ease-in-out">
            <Link href="/admin-dashboard/hoops">Hoops</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}

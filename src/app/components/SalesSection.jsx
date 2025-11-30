import Image from "next/image";
import Link from "next/link";
import OrderNow from "./OrderNow";

export default function SalesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-0 md:gap-x-8 md:min-h-[800px]">
          {/* Block 1 */}
          <div className="p-6 pt-0 md:col-start-1 md:row-start-1">
            <p className="text-orange-400 font-black text-2xl">01.</p>
            <h2 className="text-3xl lg:text-4xl text-slate-800 font-bold">
              Purchase your hoop
            </h2>
            <p className="text-lg/7 text-slate-600 font-light mt-8">
              Kansas City's top hoop installers partnered with Ironclad Sports
              to bring you the most durable in ground basketball goals on the
              market. With unmatched curb appeal and time tested designs you
              will love your new hoop.
            </p>
          </div>

          {/* Block 2 — goes to column 2, vertically centered */}
          <div className="p-6 md:col-start-2 md:row-start-2 flex items-center justify-center">
            <div>
              <p className="text-orange-400 font-black text-2xl">02.</p>
              <h2 className="text-3xl lg:text-4xl text-slate-800 font-bold">
                Select installation options
              </h2>
              <p className="text-lg/7 text-slate-600 font-light mt-8">
                At checkout you will see a list of services we offer ranging
                from old hoop removal to in ground hoop installation. Select the
                options that you need and proceed to checkout.
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="p-6 md:col-start-1 md:row-start-3">
            <p className="text-orange-400 font-black text-2xl">03.</p>
            <h2 className="text-3xl lg:text-4xl text-slate-800 font-bold">
              Schedule your service
            </h2>
            <p className="text-lg/7 text-slate-600 font-light mt-8">
              After checkout you will be emailed a receipt and clear
              instructions for next steps. Then you will be prompted to choose
              an installation date that works for you.
            </p>
          </div>
          <div className="p-6 md:col-start-1 md:row-start-4">
            <OrderNow
              styling={
                "bg-orange-400 font-semibold text-white p-2 rounded-lg hover:bg-orange-600 "
              }
              text={"Shop Hoops"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

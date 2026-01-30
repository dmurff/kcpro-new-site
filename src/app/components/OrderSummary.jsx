"use client";

export default function OrderSummary({
  primaryService,
  selectedAddons,
  serviceTotal,
  deposit,
  remainder,
  onCheckout,
  isPending,
}) {
  if (!primaryService) return null;

  return (
    <div className=" lg:sticky lg:top-24">
      <div className="rounded-xl bg-gray-50 p-6 ring-1 ring-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Order Summary
        </h3>

        {/* Line items */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between text-gray-700">
            <span>{primaryService.display_name}</span>
            <span>${primaryService.price}</span>
          </div>

          {selectedAddons.map((addon) => (
            <div key={addon.id} className="flex justify-between text-gray-700">
              <span>{addon.display_name}</span>
              <span>${addon.price}</span>
            </div>
          ))}
        </div>

        <hr className="my-4" />

        {/* Totals */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Service Total</span>
            <span className={"text-gray-700"}>${serviceTotal}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Deposit Due Today</span>
            <span className={"text-gray-700"}>${deposit}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Due on Completion</span>
            <span className={"text-gray-700"}>${remainder}</span>
          </div>
        </div>

        <button
          onClick={onCheckout}
          disabled={isPending}
          className={`mt-6 w-full rounded-md px-4 py-3 text-sm font-semibold text-white
    ${
      isPending
        ? "bg-orange-400 cursor-not-allowed"
        : "bg-orange-600 hover:bg-orange-700"
    }
  `}
        >
          {isPending ? "Redirecting…" : "Proceed to Checkout"}
        </button>
      </div>
    </div>
  );
}

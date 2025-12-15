export default function ServiceSlugCta({ handleSubmit }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-8">
      <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        Ready to book your service?
        <br />
        Proceed to checkout to deposit.
      </h2>
      <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
        <a
          onClick={handleSubmit}
          href="#"
          className="rounded-md bg-orange-400 px-3.5 py-2.5 text-md font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
        >
          {" "}
          Get started{" "}
        </a>
        {/* <a
            href="#"
            className="text-sm/6 font-semibold text-gray-900 hover:opacity-80"
          >
            Learn more
            <span aria-hidden="true">→</span>
          </a> */}
      </div>
    </div>
  );
}

export default function ServiceWhatToExpect({ content }) {
  const expect = content.whatToExpect;
  return (
    <>
      <div className="mx-auto max-w-2xl lg:mx-0">
        <p className="text-base/7 font-semibold text-orange-600">
          Start to finish
        </p>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          What to expect{" "}
        </h2>
        <p className="mt-6 text-xl/8 text-gray-700">{expect}</p>
      </div>
    </>
  );
}

export default async function Notes() {
  return (
    <div>
      <div className=" max-w-7xl mx-auto p-4 bg-gray-200">
        <h1 className="mt-8 text-2xl font-semibold text-gray-900 text-center mb-8">
          Job Notes
        </h1>
        <div className="grid grid-cols-2 bg-gray-600 w-3xl h-30 mb-2 mx-auto p-2">
          <div className="flex gap-4 justify-center align-center">
            <p>Customer:</p>
            <p>Jon Gerard</p>
          </div>
          <div className="flex gap-4 justify-center align-center">
            <p>Customer:</p>
            <p>Jon Gerard</p>
          </div>
          <div className="flex gap-4 justify-center align-center">
            <p>Customer:</p>
            <p>Jon Gerard</p>
          </div>
          <div className="flex gap-4 justify-center align-center">
            <p>Customer:</p>
            <p>Jon Gerard</p>
          </div>
        </div>
        <div className="bg-gray-400 w-3xl h-30 mb-2 mx-auto"></div>
        <div className="bg-gray-400 w-3xl h-30 mb-2 mx-auto"></div>
        <div className="bg-gray-400 w-3xl h-30 mb-2 mx-auto"></div>
        <div className="bg-gray-400 w-3xl h-30 mb-2 mx-auto"></div>
      </div>
    </div>
  );
}

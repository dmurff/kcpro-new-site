export default function ErrorPage({ searchParams }) {
  const { msg } = searchParams;

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#0C1220] to-[#0F172A] px-6">
      <div className="max-w-lg w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 shadow-xl">
        <h1 className="text-3xl font-bold text-white mb-4">
          Something went wrong
        </h1>

        <p className="text-gray-300 mb-6 leading-relaxed">
          We weren’t able to finish processing your order.
          <br />
          {msg && (
            <span className="text-gray-400 text-sm block mt-2">
              Error: {msg}
            </span>
          )}
        </p>

        <div className="flex items-center gap-4">
          <a
            href="/checkout"
            className="inline-flex items-center justify-center px-6 py-3 
                       bg-orange-500 hover:bg-orange-600 
                       text-white font-semibold rounded-lg transition"
          >
            Try Again
          </a>

          <a href="/" className="text-gray-300 hover:text-white transition">
            Return Home →
          </a>
        </div>
      </div>
    </div>
  );
}

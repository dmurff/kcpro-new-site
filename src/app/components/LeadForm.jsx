import leadCreate from "@/app/actions/leadCreate";

const LeadForm = () => {
  return (
    <div className="bg-black m-10 flex justify-center">
      <form className="bg-black text-2xl" action={leadCreate}>
        <label className="text-white block text-sm" htmlFor="name">
          Name
        </label>
        <input
          className="rounded-lg bg-white font-mono text-base text-black mb-5"
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          required
        />
        <label className="text-white block text-sm" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-lg bg-white font-mono text-base text-black mb-5"
          type="email"
          name="email"
          id="email"
          required
          placeholder="you@example.com"
        />
        <button
          type="submit"
          className="block bg-blue-700 text-sm bold flex justify-center rounded-md p-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeadForm;

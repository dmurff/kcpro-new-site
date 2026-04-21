import supabase from "../../../../../../../utils/supabaseServer";
import GenerateNoteButton from "@/app/components/GenerateNoteButton";

export default async function Notes({ params }) {
  const { id } = await params;
  const { data: notes, error } = await supabase
    .from("notes")
    .select("*")
    .eq("job_id", id);
  if (error) {
    console.log(error, error.message);
  }
  console.log(notes);

  return (
    <div>
      <div className=" max-w-7xl mx-auto p-4 bg-gray-200">
        <h1 className="mt-8 text-2xl font-semibold text-gray-900 text-center mb-8">
          Job Notes
        </h1>
        <div className="flex gap-4 bg-gray-600 w-3xl mb-2 mx-auto p-2">
          <div className="text-gray-900 bg-gray-100">
            <div className="bg-gray-400 flex gap-4 p-4">
              <p>Customer:</p>
              <p>Jon Gerard</p>
            </div>
            {notes.map((n) => {
              let parsed = null;
              try {
                parsed = JSON.parse(n.content);
              } catch (err) {
                parsed = null;
              }
              return (
                <div className="" id={n.id} key={n.id}>
                  <div className="flex flex-col max-h-96 p-4 overflow-y-auto border bg-black/80">
                    {parsed ? (
                      <>
                        <p className="text-blue-100">
                          Name: {parsed.customerName}
                        </p>
                        <p className="text-blue-100">
                          Address: {parsed.address}
                        </p>
                        <p className="text-blue-100">
                          Begin Date: {parsed.dateOfService}
                        </p>
                        <p className="text-blue-100">
                          Arrival Time: {parsed.timeWindow}
                        </p>
                        <p className="text-blue-100">
                          Job: {parsed.jobDescription}
                        </p>
                        <p className="text-blue-100">{parsed.customerType}</p>
                        <p className="text-blue-100">
                          Follow Up Needed: {String(parsed.followUpNeeded)}
                        </p>
                        <p className="text-blue-100">
                          Details: {parsed.additionalNotes}
                        </p>
                      </>
                    ) : (
                      <p className="text-blue-100">{n.content}</p>
                    )}
                  </div>
                  <div className="border-3 border-red-500 mb-6"></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-gray-400 w-3xl h-30 mb-2 mx-auto">
          <GenerateNoteButton n={notes} />
        </div>
        <div className="bg-gray-400 w-3xl h-30 mb-2 mx-auto"></div>
        <div className="bg-gray-400 w-3xl h-30 mb-2 mx-auto"></div>
        <div className="bg-gray-400 w-3xl h-30 mb-2 mx-auto"></div>
      </div>
    </div>
  );
}

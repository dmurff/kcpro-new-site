"use server";

export async function formatNote(n) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": process.env.ANTHROPIC_SECRET_KEY,
      "anthropic-version": "2023-06-01",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      //   model: "claude-opus-4-6",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: `You are a smart assistant here to sift through all convos and give an accurate accounting of what needs to be done next and when. You are being given notes that span the entire life cycle of a job with a customer. Please look at all the notes but keep in mind dates have been changed and topics differ. One job can have different phases that are not neccesarily changes to the overall target completion date. But sometimes in the conversation you can see intent to change a recetly scheduled meeting or job visit. Use your logic to come up with a concise breakdown of where a current job stands using context from summaries, timestamps, overall conversation flow start to finish and recent conversations to help you deduce what is needed next and.
          here is the list of notes: ${JSON.stringify(n)}
          keep in mind all of these notes are text messages or phone conversations between the business and the same customer.
          `,
          //           content:
          // `Summarize this phone call between myself and a customer that called. I need the customer's name what date the work will begin, the time window we agreed upon and what would be done. place the values into these fields note: current date is ${today} return the formatted note in a javaScript object with the name of the obj = appointment:
          //           - Customer name
          // - Summary of work to be done
          // - Date of service
          // - Time window of service
          // Transcript: ${transcript} If this is a discovery call or a sales call for a new customer looking for information then capture these details:
          // - Customer name
          // - Customer details about location or needs
          // - What prices were quoted and when the work will be completed
          // Lastly if this seems like a new customer tag it as a new customer if it seems we are talking about work that I or my crew has completed flag it as an existing job/customer. return the trasncript as text with relavent fields like customer name, job to be performed, details, time work was scheduled, date it was scheduled and additional info that you find relevant.`,
        },
      ],
    }),
  });

  const note = await res.json();
  const noteText = note.content[0].text;
  console.log("NEW NOTE:::::::", noteText);
  // return note.content[0].text;

  return noteText;
}

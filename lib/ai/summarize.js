export async function summarizeTranscript(transcript) {
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
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: `Summarize this phone call between myself and a customer that called. I need the customer's name what date the work will begin, the time window we agreed upon and what would be done. place the values into these fields note: current date is ${today} return the formatted note in a javaScript object with the name of the obj = appointment:
          - Customer name
- Summary of work to be done
- Date of service
- Time window of service
Transcript: ${transcript} If this is a discovery call or a sales call for a new customer looking for information then capture these details: 
- Customer name
- Customer details about location or needs
- What prices were quoted and when the work will be completed
Lastly if this seems like a new customer tag it as a new customer if it seems we are talking about work that I or my crew has completed flag it as an existing job/customer`,
        },
      ],
    }),
  });

  const data = await res.json();
  console.log(data);
  return data.content[0].text;
}

"use server";

export async function notFromSms(sms) {
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
          content: `You are taking a message texted to me via sms and making a suggestion on what we should do with it Take the ${sms}`,
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

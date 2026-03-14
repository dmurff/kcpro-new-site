import "server-only";

export async function POST(req) {
  const request = await req.formData();

  const recordingObj = Object.fromEntries(request);

  //   console.log(recordingObj);

  const recordingUrl = recordingObj.RecordingUrl;

  console.log(recordingUrl);

  // post url to deepgram to get transcription

  const url = "https://api.deepgram.com/v1/listen";
  const options = {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.DEEPGRAM_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: `${recordingUrl}`,
      auth: {
        username: process.env.TWILIO_ACCOUNT_SID,
        password: process.env.TWILIO_AUTH_TOKEN,
      },
    }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }

  return new Response("success", { status: 200 });
}

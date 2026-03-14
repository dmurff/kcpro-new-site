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
      Authorization: "Token adbc90289cfc8a33f529e9c244364d3ed15705a9",
      "Content-Type": "application/json",
    },
    body: `{"url":"${recordingUrl}"}`,
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

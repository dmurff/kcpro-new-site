import "server-only";
import { summarizeTranscript } from "../../../../../../lib/ai/summarize.js";

export async function POST(req) {
  const request = await req.formData();
  const recordingObj = Object.fromEntries(request);
  const recordingUrl = recordingObj.RecordingUrl;
  console.log(recordingUrl);

  try {
    // Step 1: Fetch audio from Twilio using your credentials
    const twilioAuth = Buffer.from(
      `${process.env.TWILIO_ACCOUNT_SID}:${process.env.TWILIO_AUTH_TOKEN}`,
    ).toString("base64");

    const audioResponse = await fetch(`${recordingUrl}.mp3`, {
      headers: {
        Authorization: `Basic ${twilioAuth}`,
      },
    });

    const audioBuffer = await audioResponse.arrayBuffer();

    // Step 2: Send audio bytes directly to Deepgram
    const response = await fetch(
      "https://api.deepgram.com/v1/listen?multichannel=true&punctuate=true&model=nova-2",
      {
        method: "POST",
        headers: {
          Authorization: `Token ${process.env.DEEPGRAM_API_KEY}`,
          "Content-Type": "audio/mpeg",
        },
        body: audioBuffer,
      },
    );

    const data = await response.json();
    const transcript = data.results.channels[0].alternatives[0].transcript;
    const summary = await summarizeTranscript(transcript);
    console.log(summary);
  } catch (error) {
    console.error(error);
  }

  return new Response("success", { status: 200 });
}

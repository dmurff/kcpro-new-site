import { ServerClient } from "postmark";

const client = new ServerClient(process.env.POSTMARK_SERVER_TOKEN);

export async function sendEmail({ to, subject, html, text }) {}

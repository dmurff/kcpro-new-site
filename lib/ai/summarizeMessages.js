export async function summarizeMessages(conversation) {
  const messages = conversation.filter((m) => m.body);

  console.log(messages);

  return messages;
}

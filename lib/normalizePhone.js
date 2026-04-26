import { parsePhoneNumberFromString } from "libphonenumber-js";

export function normalizePhone(input) {
  if (!input) return null;
  try {
    const parsed = parsePhoneNumberFromString(input, "US");
    return parsed && parsed.isValid() ? parsed.number : null;
  } catch {
    return null;
  }
}

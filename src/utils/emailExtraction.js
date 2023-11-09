export function getUsernameFromEmail(email) {
  const parts = email.split("@");
  if (parts.length === 2) {
    return parts[0];
  } else {
    // Handle invalid email addresses
    return null;
  }
}

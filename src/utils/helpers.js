export function capitalizeFirstLetter(string) {
  // Check if 'string' is a valid string to avoid errors
  if (typeof string !== "string" || string.length === 0) {
    return ""; // Return an empty string if input is invalid
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function validateEmail(email) {
  // Use a well-tested regular expression for email validation
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

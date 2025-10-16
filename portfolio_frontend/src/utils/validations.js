const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// PUBLIC_INTERFACE
export function validateContact(values) {
  /** Validates contact form values and returns { valid, errors } */
  const errors = {};
  if (!values.name || values.name.trim().length < 2) {
    errors.name = "Please enter your name";
  }
  if (!values.email || !EMAIL_REGEX.test(values.email)) {
    errors.email = "Please enter a valid email";
  }
  if (!values.message || values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters";
  }
  return { valid: Object.keys(errors).length === 0, errors };
}

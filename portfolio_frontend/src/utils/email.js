const CONTACT_ENDPOINT = process.env.REACT_APP_CONTACT_ENDPOINT;
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

async function postJson(url, payload) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `Request failed: ${res.status}`);
  }
  return res.json().catch(() => ({}));
}

// PUBLIC_INTERFACE
export async function sendContact(values) {
  /**
   * Sends contact form:
   * - If REACT_APP_CONTACT_ENDPOINT is provided, POST there
   * - Else if EmailJS envs exist, call EmailJS REST API
   * - Else throw a controlled "not configured" error
   */
  if (CONTACT_ENDPOINT) {
    return postJson(CONTACT_ENDPOINT, values);
  }

  // EmailJS REST fallback (no SDK dependency)
  if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
    // EmailJS REST endpoint
    const url = "https://api.emailjs.com/api/v1.0/email/send";
    const payload = {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: {
        from_name: values.name,
        reply_to: values.email,
        message: values.message,
      },
    };
    // EmailJS returns 200 on success without JSON
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(text || `EmailJS failed: ${res.status}`);
    }
    return { status: "ok" };
  }

  const err = new Error("Email not configured");
  err.code = "NOT_CONFIGURED";
  throw err;
}

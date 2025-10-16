import React, { useState } from "react";
import "./Contact.css";
import SectionHeading from "./SectionHeading";
import { validateContact } from "../utils/validations";
import { sendContact } from "../utils/email";
import { ANCHORS } from "../router/anchors";

// PUBLIC_INTERFACE
export default function Contact() {
  /** Contact form with validation and guarded submission strategies */
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ sending: false, success: null, error: null });

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const v = validateContact(values);
    setErrors(v.errors);
    if (!v.valid) return;

    setStatus({ sending: true, success: null, error: null });
    try {
      await sendContact(values);
      setStatus({ sending: false, success: "Thanks! I’ll get back to you soon.", error: null });
      setValues({ name: "", email: "", message: "" });
    } catch (err) {
      if (err?.code === "NOT_CONFIGURED") {
        setStatus({
          sending: false,
          success: null,
          error:
            "Email not configured. Please set REACT_APP_CONTACT_ENDPOINT or EmailJS env variables.",
        });
      } else {
        setStatus({ sending: false, success: null, error: err?.message || "Something went wrong" });
      }
    }
  };

  return (
    <section id={ANCHORS.contact} className="section">
      <div className="container">
        <SectionHeading title="Contact" subtitle="Let’s work together" />
        <form className="contact surface" onSubmit={onSubmit} noValidate>
          <div className="grid">
            <label>
              <span>Name</span>
              <input
                name="name"
                value={values.name}
                onChange={onChange}
                autoComplete="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "err-name" : undefined}
              />
              {errors.name && <span id="err-name" className="error">{errors.name}</span>}
            </label>
            <label>
              <span>Email</span>
              <input
                name="email"
                type="email"
                value={values.email}
                onChange={onChange}
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "err-email" : undefined}
              />
              {errors.email && <span id="err-email" className="error">{errors.email}</span>}
            </label>
          </div>
          <label>
            <span>Message</span>
            <textarea
              name="message"
              rows="5"
              value={values.message}
              onChange={onChange}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "err-message" : undefined}
            />
            {errors.message && <span id="err-message" className="error">{errors.message}</span>}
          </label>
          <div className="actions">
            <button className="btn btn-primary" type="submit" disabled={status.sending} aria-busy={status.sending}>
              {status.sending ? "Sending..." : "Send Message"}
            </button>
            {status.success && <span className="success">{status.success}</span>}
            {status.error && <span className="error">{status.error}</span>}
          </div>
        </form>
      </div>
    </section>
  );
}

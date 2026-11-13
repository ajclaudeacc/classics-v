"use client";
import { useId, useState } from "react";
import { BUSINESS } from "@/lib/site";
import { Check, Phone } from "./Icons";
import Field from "./FormField";

export default function InquiryForm({ variant = "general", title, intro }) {
  const uid = useId();
  const id = (n) => `${uid}-${n}`;
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | preview
  const wedding = variant === "wedding";

  const aria = (n, hint) => ({
    "aria-invalid": errors[n] ? true : undefined,
    "aria-describedby": [errors[n] && `${id(n)}-error`, hint && !errors[n] && `${id(n)}-hint`].filter(Boolean).join(" ") || undefined,
  });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setErrors({});
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, form: variant, page: window.location.pathname }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus(json.preview ? "preview" : "sent");
        form.reset();
      } else {
        setStatus("idle");
        setErrors(json.errors || { form: "Something went wrong. Please call us instead." });
        const first = Object.keys(json.errors || {}).find((k) => k !== "form");
        if (first) form.querySelector(`[name="${first}"]`)?.focus();
      }
    } catch {
      setStatus("idle");
      setErrors({ form: `We couldn't reach the server. Please call us at ${BUSINESS.phone}.` });
    }
  }

  if (status === "sent" || status === "preview") {
    return (
      <div className="form-card form-done" role="status">
        <span className="done-icon"><Check /></span>
        {status === "sent" ? (
          <>
            <h3>Thank you, we got your message</h3>
            <p>Our office staff will get back to you soon. For a faster answer, call us at <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>.</p>
          </>
        ) : (
          <>
            <h3>This is a design preview</h3>
            <p>Your message was not sent. To reach {BUSINESS.shortName}, please call <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a> or email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.</p>
          </>
        )}
        <button type="button" className="btn btn-secondary" onClick={() => setStatus("idle")}>Send another message</button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate aria-labelledby={id("title")}>
      <h3 id={id("title")}>{title || (wedding ? "Wedding reception information request" : "General information request")}</h3>
      {intro && <p className="form-intro">{intro}</p>}

      <div className="form-row">
        <Field id={id("firstName")} label="First name" required error={errors.firstName}>
          <input id={id("firstName")} name="firstName" autoComplete="given-name" required {...aria("firstName")} />
        </Field>
        <Field id={id("lastName")} label="Last name" required error={errors.lastName}>
          <input id={id("lastName")} name="lastName" autoComplete="family-name" required {...aria("lastName")} />
        </Field>
      </div>

      <div className="form-row">
        <Field id={id("email")} label="Email address" required error={errors.email}>
          <input id={id("email")} name="email" type="email" autoComplete="email" required {...aria("email")} />
        </Field>
        <Field id={id("phone")} label="Phone" error={errors.phone} hint="If you'd like a call back.">
          <input id={id("phone")} name="phone" type="tel" autoComplete="tel" {...aria("phone", true)} />
        </Field>
      </div>

      <Field id={id("message")} label="Message" required error={errors.message} hint={wedding ? "Your date, guest count and anything you have in mind." : undefined}>
        <textarea id={id("message")} name="message" rows="5" required {...aria("message", wedding)} />
      </Field>

      <fieldset className="radio-group">
        <legend>Would you like information about special events, deals and promotions at {BUSINESS.shortName}? <span className="opt">(optional)</span></legend>
        <label><input type="radio" name="promotions" value="yes" /> Yes</label>
        <label><input type="radio" name="promotions" value="no" /> No</label>
      </fieldset>

      <div className="hp" aria-hidden="true">
        <label htmlFor={id("company")}>Leave this field empty</label>
        <input id={id("company")} name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {errors.form && <p className="error form-error" role="alert">{errors.form}</p>}

      <div className="form-actions">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <a className="form-call" href={BUSINESS.phoneHref}><Phone /> Or call {BUSINESS.phone}</a>
      </div>
    </form>
  );
}

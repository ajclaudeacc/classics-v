"use client";
import { useId, useState } from "react";
import { BUSINESS, JOBS } from "@/lib/site";
import { Check, Phone } from "./Icons";
import Field from "./FormField";

const DAYS = [
  { value: "weekdays", label: "Weekdays" },
  { value: "weeknights", label: "Weeknights" },
  { value: "weekends", label: "Weekends" },
];

export default function ApplicationForm() {
  const uid = useId();
  const id = (n) => `${uid}-${n}`;
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | preview

  const aria = (n, hint) => ({
    "aria-invalid": errors[n] ? true : undefined,
    "aria-describedby": [errors[n] && `${id(n)}-error`, hint && !errors[n] && `${id(n)}-hint`].filter(Boolean).join(" ") || undefined,
  });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = { ...Object.fromEntries(fd), availability: fd.getAll("availability") };
    setStatus("sending");
    setErrors({});
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
            <h3>Thank you for applying</h3>
            <p>We got your application and will contact you if it&rsquo;s a fit. Questions? Call <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>.</p>
          </>
        ) : (
          <>
            <h3>This is a design preview</h3>
            <p>Your application was not sent. To apply, please call <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a> or email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.</p>
          </>
        )}
        <button type="button" className="btn btn-secondary" onClick={() => setStatus("idle")}>Back to the form</button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate aria-labelledby={id("title")}>
      <h3 id={id("title")}>Apply online</h3>
      <p className="form-intro">Takes about two minutes. No résumé needed.</p>

      <fieldset className={`radio-group job-pick${errors.position ? " has-error" : ""}`} aria-describedby={errors.position ? `${id("position")}-error` : undefined}>
        <legend>Which job? <span className="req">(required)</span></legend>
        {JOBS.map((j) => (
          <label key={j.id}><input type="radio" name="position" value={j.id} required /> {j.title.replace(/s$/, "")}</label>
        ))}
        {errors.position && <p className="error" id={`${id("position")}-error`}>{errors.position}</p>}
      </fieldset>

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
        <Field id={id("phone")} label="Phone" required error={errors.phone}>
          <input id={id("phone")} name="phone" type="tel" autoComplete="tel" required {...aria("phone")} />
        </Field>
      </div>

      <fieldset className="radio-group">
        <legend>When can you work? <span className="opt">(optional, check all that apply)</span></legend>
        {DAYS.map((d) => (
          <label key={d.value}><input type="checkbox" name="availability" value={d.value} /> {d.label}</label>
        ))}
      </fieldset>

      <Field id={id("experience")} label="Experience or anything else we should know" error={errors.experience} hint="Past restaurant or banquet jobs, or tell us about yourself if this would be your first job.">
        <textarea id={id("experience")} name="experience" rows="4" {...aria("experience", true)} />
      </Field>

      <div className="hp" aria-hidden="true">
        <label htmlFor={id("company")}>Leave this field empty</label>
        <input id={id("company")} name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {errors.form && <p className="error form-error" role="alert">{errors.form}</p>}

      <div className="form-actions">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send application"}
        </button>
        <a className="form-call" href={BUSINESS.phoneHref}><Phone /> Or call {BUSINESS.phone}</a>
      </div>
    </form>
  );
}

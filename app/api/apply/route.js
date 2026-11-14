import { NextResponse } from "next/server";
import { saveApplication } from "@/lib/db.mjs";
import { JOBS } from "@/lib/site";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DAYS = ["weekdays", "weeknights", "weekends"];
// Only plain text is accepted; anything else (objects, lists, numbers) counts as empty.
const clean = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request) {
  const parsed = await request.json().catch(() => null);
  const body = parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  if (body.company) return NextResponse.json({ ok: true }); // honeypot

  const data = {
    position: clean(body.position, 40),
    firstName: clean(body.firstName, 80),
    lastName: clean(body.lastName, 80),
    email: clean(body.email, 160),
    phone: clean(body.phone, 40),
    availability: (Array.isArray(body.availability) ? body.availability : []).filter((d) => DAYS.includes(d)),
    experience: clean(body.experience, 3000),
  };

  const errors = {};
  if (!JOBS.some((j) => j.id === data.position)) errors.position = "Choose the job you're applying for.";
  if (!data.firstName) errors.firstName = "Enter your first name.";
  if (!data.lastName) errors.lastName = "Enter your last name.";
  if (!data.email) errors.email = "Enter your email address.";
  else if (!EMAIL.test(data.email)) errors.email = "Enter an email address like name@example.com.";
  if (data.phone.replace(/\D/g, "").length < 10) errors.phone = "Enter a phone number we can call, like 716-555-0134.";
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 400 });

  // Same switch as inquiries: nothing is stored until the business turns the forms on.
  if (process.env.INQUIRY_FORM_LIVE !== "true" || !process.env.DATABASE_URL) {
    return NextResponse.json({ ok: true, preview: true });
  }
  try {
    await saveApplication(data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Saving application failed:", err);
    return NextResponse.json({ errors: { form: "We couldn't send your application just now. Please call us at (716) 691-6000." } }, { status: 500 });
  }
}

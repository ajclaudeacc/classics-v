import { NextResponse } from "next/server";
import { saveInquiry } from "@/lib/db.mjs";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Only plain text is accepted; anything else (objects, lists, numbers) counts as empty.
const clean = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request) {
  const parsed = await request.json().catch(() => null);
  const body = parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  if (body.company) return NextResponse.json({ ok: true }); // honeypot: bots fill hidden fields

  const form = body.form === "wedding" ? "wedding" : "general";
  const data = {
    form,
    firstName: clean(body.firstName, 80),
    lastName: clean(body.lastName, 80),
    email: clean(body.email, 160),
    phone: clean(body.phone, 40),
    message: clean(body.message, 4000),
    wantsPromotions: body.promotions === "yes" ? true : body.promotions === "no" ? false : null,
    page: clean(body.page, 120),
  };

  const errors = {};
  if (!data.firstName) errors.firstName = "Enter your first name.";
  if (!data.lastName) errors.lastName = "Enter your last name.";
  if (!data.email) errors.email = "Enter your email address.";
  else if (!EMAIL.test(data.email)) errors.email = "Enter an email address like name@example.com.";
  if (data.phone && data.phone.replace(/\D/g, "").length < 10) errors.phone = "Enter a phone number we can call, like 716-555-0134, or leave it blank.";
  if (!data.message) errors.message = "Tell us a little about your event or question.";
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 400 });

  // The form stays in preview mode until the business switches it on, so no
  // customer inquiry is collected where Classics V cannot see it.
  if (process.env.INQUIRY_FORM_LIVE !== "true" || !process.env.DATABASE_URL) {
    return NextResponse.json({ ok: true, preview: true });
  }

  try {
    await saveInquiry(data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Saving inquiry failed:", err);
    return NextResponse.json({ errors: { form: "We couldn't send your message just now. Please call us at (716) 691-6000." } }, { status: 500 });
  }
}

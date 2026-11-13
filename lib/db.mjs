// Saves inquiries to Postgres (Supabase). Uses the Transaction pooler URL in DATABASE_URL.
import postgres from "postgres";

let sql = null;
let ready = null;

function db() {
  if (!sql) sql = postgres(process.env.DATABASE_URL, { prepare: false, ssl: "require", max: 1 });
  if (!ready) {
    ready = sql`CREATE TABLE IF NOT EXISTS inquiries (
      id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      created_at timestamptz NOT NULL DEFAULT now(),
      form text NOT NULL,
      first_name text NOT NULL,
      last_name text NOT NULL,
      email text NOT NULL,
      phone text,
      message text NOT NULL,
      wants_promotions boolean,
      page text
    )`.catch((err) => {
      ready = null;
      throw err;
    });
  }
  return ready.then(() => sql);
}

export async function saveInquiry(i) {
  const s = await db();
  await s`INSERT INTO inquiries (form, first_name, last_name, email, phone, message, wants_promotions, page)
          VALUES (${i.form}, ${i.firstName}, ${i.lastName}, ${i.email}, ${i.phone || null}, ${i.message}, ${i.wantsPromotions}, ${i.page || null})`;
}

let jobsReady = null;
export async function saveApplication(a) {
  const s = await db();
  if (!jobsReady) {
    jobsReady = s`CREATE TABLE IF NOT EXISTS job_applications (
      id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      created_at timestamptz NOT NULL DEFAULT now(),
      position text NOT NULL,
      first_name text NOT NULL,
      last_name text NOT NULL,
      email text NOT NULL,
      phone text NOT NULL,
      availability text[] NOT NULL DEFAULT '{}',
      experience text
    )`.catch((err) => {
      jobsReady = null;
      throw err;
    });
  }
  await jobsReady;
  await s`INSERT INTO job_applications (position, first_name, last_name, email, phone, availability, experience)
          VALUES (${a.position}, ${a.firstName}, ${a.lastName}, ${a.email}, ${a.phone}, ${a.availability}, ${a.experience || null})`;
}

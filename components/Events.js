import { BUSINESS } from "@/lib/site";
import EventCountdown from "./EventCountdown";
import { Calendar, External } from "./Icons";
import NearImg from "./NearImg";

function calendarLink(e) {
  const start = e.date.replace(/-/g, "");
  const [y, m, d] = e.date.split("-").map(Number);
  const next = new Date(Date.UTC(y, m - 1, d + 1)).toISOString().slice(0, 10).replace(/-/g, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${e.title} at Classics V`,
    dates: `${start}/${next}`,
    details: `Tickets: ${e.href}`,
    location: `${BUSINESS.name}, ${BUSINESS.street}, ${BUSINESS.city}, ${BUSINESS.region} ${BUSINESS.postal}`,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

function DateBadge({ date }) {
  const [y, m, d] = date.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  const opts = { timeZone: "UTC" };
  return (
    <span className="date-badge" aria-hidden="true">
      <span className="date-month">{dt.toLocaleDateString("en-US", { ...opts, month: "short" })}</span>
      <span className="date-day">{d}</span>
      <span className="date-weekday">{dt.toLocaleDateString("en-US", { ...opts, weekday: "short" })}</span>
    </span>
  );
}

export default function Events({ events }) {
  const [featured, ...rest] = events;
  return (
    <>
      <article className="event-featured">
        <a className="event-poster" href={featured.href}>
          <NearImg src={featured.img + "?format=750w"} alt={featured.alt} width="311" height="576" />
        </a>
        <div className="event-info">
          <div className="event-top">
            <DateBadge date={featured.date} />
            <div>
              <EventCountdown date={featured.date} />
              <p className="event-when"><time dateTime={featured.date}>{featured.when}</time></p>
            </div>
          </div>
          <h3>{featured.title}</h3>
          {featured.note && <p className="event-note">{featured.note}</p>}
          <p className="event-where">At {BUSINESS.shortName}, {BUSINESS.street}, {BUSINESS.city}</p>
          <div className="event-actions">
            <a className="btn btn-primary btn-lg" href={featured.href}>Get tickets<span className="sr-only"> for {featured.title}</span> <External /></a>
            <a className="btn btn-secondary btn-lg" href={calendarLink(featured)}><Calendar /> Add to calendar</a>
          </div>
        </div>
      </article>

      {rest.length > 0 && (
        <ul className="event-list">
          {rest.map((e) => (
            <li key={e.href}>
              <DateBadge date={e.date} />
              <div>
                <h3><a href={e.href}>{e.title}</a></h3>
                <p><time dateTime={e.date}>{e.when}</time></p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p className="events-follow">
        New events are announced on <a href={BUSINESS.social[0].href}>Facebook</a> and <a href={BUSINESS.social[1].href}>Instagram</a>.
      </p>
    </>
  );
}

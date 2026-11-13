"use client";
import { useEffect, useState } from "react";

// "Today", "Tomorrow" or "In 5 days", worked out in the visitor's browser so it is never stale.
export default function EventCountdown({ date }) {
  const [label, setLabel] = useState(null);
  useEffect(() => {
    const [y, m, d] = date.split("-").map(Number);
    const event = new Date(y, m - 1, d);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const days = Math.round((event - today) / 86400000);
    setLabel(days < 0 ? null : days === 0 ? "Today" : days === 1 ? "Tomorrow" : days <= 30 ? `In ${days} days` : null);
  }, [date]);
  if (!label) return null;
  return <span className="event-countdown">{label}</span>;
}

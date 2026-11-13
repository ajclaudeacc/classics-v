import { BUSINESS } from "@/lib/site";

// Shown while this redesign is a proposal. Set NEXT_PUBLIC_PREVIEW_MODE=false to remove it at launch.
export default function PreviewBanner() {
  if (process.env.NEXT_PUBLIC_PREVIEW_MODE === "false") return null;
  return (
    <div className="preview-banner" role="region" aria-label="Preview notice">
      <p>
        Design preview for {BUSINESS.shortName}. The official website is{" "}
        <a href="https://classicsfive.com">classicsfive.com</a>. To book, call{" "}
        <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>.
      </p>
    </div>
  );
}

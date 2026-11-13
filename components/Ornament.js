// A gold flourish divider, a refined take on the swirl ornaments from the original site.
export default function Ornament({ className = "" }) {
  return (
    <svg className={`ornament ${className}`} viewBox="0 0 240 24" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M2 12h70" />
        <path d="M72 12c10 0 14-8 22-8 6 0 9 4 9 8s-3 8-9 8c-8 0-12-8-22-8" />
        <path d="M168 12c-10 0-14-8-22-8-6 0-9 4-9 8s3 8 9 8c8 0 12-8 22-8" />
        <path d="M168 12h70" />
      </g>
      <path d="M120 3l9 9-9 9-9-9z" fill="currentColor" />
      <circle cx="104" cy="12" r="2" fill="currentColor" />
      <circle cx="136" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

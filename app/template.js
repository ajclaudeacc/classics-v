// Re-mounts on every page change, so each new page fades in (see .page-fade in globals.css).
export default function Template({ children }) {
  return <div className="page-fade">{children}</div>;
}

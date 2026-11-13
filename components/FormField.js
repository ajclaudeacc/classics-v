// Shared labeled form field with optional hint and inline error.
export default function FormField({ id, label, required, error, children, hint }) {
  return (
    <div className={`field${error ? " has-error" : ""}`}>
      <label htmlFor={id}>
        {label} {required ? <span className="req">(required)</span> : <span className="opt">(optional)</span>}
      </label>
      {children}
      {hint && !error && <p className="hint" id={`${id}-hint`}>{hint}</p>}
      {error && <p className="error" id={`${id}-error`}>{error}</p>}
    </div>
  );
}

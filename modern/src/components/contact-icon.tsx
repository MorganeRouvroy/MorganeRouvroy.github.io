type ContactIconKind = "github" | "linkedin" | "email";

type ContactIconProps = {
  kind: ContactIconKind;
  className?: string;
};

export function ContactIcon({ kind, className }: ContactIconProps) {
  if (kind === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={className}
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.8-1.6 6.8-7.3A5.7 5.7 0 0 0 20.2 4 5.3 5.3 0 0 0 20 0s-1.3-.4-4.2 1.6a14.7 14.7 0 0 0-7.6 0C5.3-.4 4 0 4 0a5.3 5.3 0 0 0-.2 4 5.7 5.7 0 0 0-1.6 4.1c0 5.6 3.4 6.9 6.7 7.3a3.1 3.1 0 0 0-.9 2.4V22" />
      </svg>
    );
  }

  if (kind === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={className}
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

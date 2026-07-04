import { site } from "@/lib/site";

const variants = {
  solid:
    "bg-brass text-night hover:bg-ink focus-visible:bg-ink transition-colors",
  outline:
    "border border-line text-ink hover:border-brass hover:text-brass transition-colors",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type BookCallButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  label?: string;
  className?: string;
};

export default function BookCallButton({
  variant = "solid",
  size = "md",
  label = "Book a call",
  className = "",
}: BookCallButtonProps) {
  return (
    <a
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 font-medium tracking-wide ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {label}
      <span aria-hidden="true">→</span>
    </a>
  );
}

import { site } from "@/lib/site";

const variants = {
  solid: "bg-flare text-night hover:bg-ink",
  paper: "bg-night text-ink hover:bg-flare hover:text-night",
  outline: "border border-hairline text-ink hover:border-flare hover:text-flare",
};

const sizes = {
  sm: "px-5 py-2.5 text-xs",
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4.5 text-sm",
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
      className={`inline-flex items-center justify-center gap-2 rounded-full font-mono font-bold uppercase tracking-widest transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {label}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

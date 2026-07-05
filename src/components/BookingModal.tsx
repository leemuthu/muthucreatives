"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { site } from "@/lib/site";

type BookingModalContextValue = {
  openModal: () => void;
};

const BookingModalContext = createContext<BookingModalContextValue | null>(null);

export function useBookingModal() {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error("useBookingModal must be used within BookingModalProvider");
  }
  return context;
}

export default function BookingModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeModal]);

  return (
    <BookingModalContext.Provider value={{ openModal }}>
      {children}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
        >
          <button
            type="button"
            aria-label="Close booking dialog"
            className="absolute inset-0 bg-night/85 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="relative flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden border border-hairline bg-coal shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]">
            <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
              <div>
                <p
                  id="booking-modal-title"
                  className="type-wide text-lg font-black uppercase text-ink"
                >
                  Book a call
                </p>
                <p className="mt-1 font-mono text-xs tracking-wide text-mist">
                  Free 20 minutes. Pick whatever works.
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                className="flex h-9 w-9 shrink-0 items-center justify-center border border-hairline text-ink transition-colors hover:border-flare hover:text-flare"
              >
                <span aria-hidden="true" className="text-lg leading-none">
                  ×
                </span>
              </button>
            </div>
            <div className="overflow-y-auto bg-paper p-3">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2w_svIWwEhW062nhiZNA5dXpARHHD8Ym3MAbGuAaYbN6d-j84JgtXazAXiH0mv1kWyXNHFPe9d?gv=true"
                style={{ border: 0, background: "#efe9dc", colorScheme: "light" }}
                width="100%"
                height="600"
                frameBorder="0"
                title="Book a call with Muthu Creatives"
              />
            </div>
            <p className="border-t border-hairline px-6 py-3 text-center font-mono text-xs text-mist">
              Calendar not loading?{" "}
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-flare underline decoration-hairline underline-offset-4 hover:text-ink"
              >
                Open it in a new tab
              </a>
            </p>
          </div>
        </div>
      )}
    </BookingModalContext.Provider>
  );
}

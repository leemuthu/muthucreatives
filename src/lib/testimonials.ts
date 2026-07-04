export type Testimonial = {
  text: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    text: "Delivered exactly what we needed in under a week. We've had noticeably more inquiries since launch.",
    author: "Daniel W.",
    role: "Founder, Logistics",
  },
  {
    text: "Turned it around in 48 hours and it looked better than sites we've paid ten times more for.",
    author: "Sarah R.",
    role: "Marketing Director, SaaS",
  },
  {
    text: "The automation saves our team 3 hours every day.",
    author: "Tom L.",
    role: "Operations Manager, Ecommerce",
  },
];

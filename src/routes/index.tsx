import { createFileRoute } from "@tanstack/react-router";
import Home from "@/pages/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Devexa Man Power Services — Guards, Housekeeping & Smart Workforce App" },
      { name: "description", content: "Pan-India security guards, bouncers, mechanized housekeeping, CCTV, facade cleaning & the Devexa Man Power workforce management platform for real-time attendance, GPS tracking & reporting." },
    ],
  }),
  component: Home,
});


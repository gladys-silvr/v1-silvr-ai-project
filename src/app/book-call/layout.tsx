import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Call – Pathways",
  description: "Schedule a call with Pathways.",
};

export default function BookCallLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="fixed inset-0 z-50 h-dvh w-full overflow-hidden bg-white">
      {children}
    </div>
  );
}

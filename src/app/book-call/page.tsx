const GHL_FUNNEL_URL = process.env.NEXT_PUBLIC_GHL_FUNNEL_URL ?? "";

export default function BookCallPage() {
  if (!GHL_FUNNEL_URL) {
    return (
      <main className="flex h-full w-full flex-col items-center justify-center gap-4 bg-white px-6 text-center">
        <p className="text-lg font-medium text-slate-800">
          Booking funnel is not configured yet.
        </p>
        <p className="max-w-md text-sm text-slate-600">
          Add your Go High Level funnel URL to{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
            NEXT_PUBLIC_GHL_FUNNEL_URL
          </code>{" "}
          in <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">.env.local</code>
          .
        </p>
        <a
          href="/"
          className="text-sm font-medium text-[#42B8D5] underline-offset-2 hover:underline"
        >
          Back to home
        </a>
      </main>
    );
  }

  return (
    <iframe
      src={GHL_FUNNEL_URL}
      title="Book a call with Pathways"
      className="h-full w-full border-0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; geolocation; microphone; camera"
      loading="eager"
    />
  );
}

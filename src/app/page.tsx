import Image from "next/image";

const primary = "#113251";
const secondary = "#5398EB";
const accent = "#B7D1E7";

function SectionShell({
  id,
  label,
  title,
  eyebrow,
  description,
  children,
}: {
  id?: string;
  label?: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {label && (
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-slate-500">
            {label}
          </p>
        )}
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {eyebrow && (
              <p className="text-lg font-medium text-slate-500">{eyebrow}</p>
            )}
            <h2
              className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem]"
              style={{ color: primary }}
            >
              {title}
            </h2>
          </div>
          {description && (
            <p className="max-w-xl text-lg sm:text-xl lg:text-[1.35rem] text-slate-600">
              {description}
            </p>
          )}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function PrimaryButton({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-[#42B8D5] px-6 py-2.5 text-base font-medium text-white shadow-sm transition hover:bg-[#36a6c0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#42B8D5]"
    >
      {children}
    </a>
  );
}

function SecondaryButton({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-2.5 text-base font-medium text-slate-800 shadow-sm transition hover:border-[#5398EB] hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5398EB]"
    >
      {children}
    </a>
  );
}

function PathwaysLogo({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <span className="inline-flex items-center bg-white">
      <Image
        src="/pathways-logo.png"
        alt="Pathways"
        width={110}
        height={24}
        className={`block bg-white ${className}`}
        priority
        unoptimized
      />
    </span>
  );
}

function HeroSection() {
  return (
    <section className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pb-20">
        <div className="flex-1">
          <p className="text-lg font-semibold uppercase tracking-[0.2em] text-slate-500">
            Pathways · Smart CRM Solutions
          </p>
          <h1 className="hero-title-gradient mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Smart CRM Solutions for Organizations &amp; Home Service Businesses
          </h1>
          <p className="mt-4 text-xl font-medium text-slate-700 sm:text-2xl">
            AI-powered automation, appointment setting, and workflow systems
          </p>
          <p className="mt-3 max-w-xl text-lg sm:text-xl lg:text-[1.25rem] text-slate-600">
            Designed to help businesses and organizations grow with less manual
            work—whether you run programs and registrations or book field jobs
            from inbound leads.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <PrimaryButton href="#book-call">Book A Call</PrimaryButton>
          </div>
          <p className="mt-4 text-lg text-slate-500">
            Built for sports organizations, nonprofits, and home service
            contractors including roofing, HVAC, plumbing, and remodeling.
          </p>
        </div>

        <div className="flex-1">
          <div className="relative">
            <div
              className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-[#B7D1E7] via-white to-[#5398EB] opacity-70 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[#f8f9fb] shadow-[0_18px_60px_rgba(15,46,83,0.18)]">
              {/* GHL-style Conversations chrome */}
              <div className="flex items-center justify-between border-b border-slate-200 bg-white px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-800">
                    Conversations
                  </span>
                  <span className="rounded-md bg-[#eef4ff] px-1.5 py-0.5 text-[10px] font-medium text-[#2563eb]">
                    Unread 3
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                  <span className="rounded border border-slate-200 bg-white px-2 py-1">
                    Filter
                  </span>
                  <span className="rounded border border-slate-200 bg-white px-2 py-1">
                    Sort
                  </span>
                </div>
              </div>

              <div className="flex min-h-[320px] bg-white">
                {/* Inbox + chat list */}
                <div className="hidden w-[38%] flex-col border-r border-slate-200 sm:flex">
                  <div className="border-b border-slate-100 px-2 py-2">
                    <div className="flex gap-1 rounded-lg bg-slate-100 p-0.5 text-[10px]">
                      <span className="flex-1 rounded-md bg-white px-2 py-1 text-center font-medium text-slate-800 shadow-sm">
                        Unread
                      </span>
                      <span className="flex-1 rounded-md px-2 py-1 text-center text-slate-500">
                        All
                      </span>
                      <span className="flex-1 rounded-md px-2 py-1 text-center text-slate-500">
                        Starred
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    {[
                      {
                        name: "Jamie Peterson",
                        preview:
                          "Yes, we have 18 new players for the youth league.",
                        time: "10:04 AM",
                        active: true,
                        unread: true,
                      },
                      {
                        name: "Sarah Mitchell",
                        preview: "What time does registration close?",
                        time: "9:52 AM",
                        active: false,
                        unread: true,
                      },
                      {
                        name: "Mike Torres",
                        preview: "Thanks — I'll send the waiver tonight.",
                        time: "Yesterday",
                        active: false,
                        unread: false,
                      },
                    ].map((convo) => (
                      <div
                        key={convo.name}
                        className={`flex gap-2 border-b border-slate-50 px-2.5 py-2.5 ${
                          convo.active
                            ? "border-l-2 border-l-[#2563eb] bg-[#eef4ff]/60"
                            : "border-l-2 border-l-transparent"
                        }`}
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#113251] text-[10px] font-semibold text-white">
                          {convo.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1">
                            <p className="truncate text-[11px] font-semibold text-slate-800">
                              {convo.name}
                            </p>
                            <span className="shrink-0 text-[9px] text-slate-400">
                              {convo.time}
                            </span>
                          </div>
                          <p className="truncate text-[10px] text-slate-500">
                            {convo.preview}
                          </p>
                        </div>
                        {convo.unread && (
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2563eb]" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message thread */}
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="border-b border-slate-100 px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#113251] text-xs font-semibold text-white">
                        JP
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-slate-900">
                          Jamie Peterson
                        </p>
                        <p className="text-[10px] text-slate-500">
                          +1 (555) 234-8901 ·{" "}
                          <span className="font-medium text-[#2563eb]">SMS</span>
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex gap-2 border-t border-slate-50 pt-2 text-[10px]">
                      <span className="border-b-2 border-[#2563eb] pb-1 font-medium text-[#2563eb]">
                        SMS
                      </span>
                      <span className="pb-1 text-slate-400">Email</span>
                      <span className="pb-1 text-slate-400">FB Messenger</span>
                      <span className="pb-1 text-slate-400">Activity</span>
                    </div>
                  </div>

                  <div className="flex-1 space-y-3 overflow-hidden bg-[#f8f9fb] px-3 py-3">
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 shadow-sm ring-1 ring-slate-100">
                        <p className="text-[10px] font-medium text-slate-400">
                          Jamie Peterson · 10:03 AM
                        </p>
                        <p className="mt-0.5 text-xs text-slate-800">
                          Hi! I need to register new members for the Spring
                          Program. Can you help?
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#2563eb] px-3 py-2 text-white shadow-sm">
                        <p className="text-[10px] font-medium text-blue-100">
                          You · 10:03 AM
                        </p>
                        <p className="mt-0.5 text-xs">
                          Hi Jamie! I can help with Spring Program registration.
                          Can I grab each player&apos;s name and age?
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 shadow-sm ring-1 ring-slate-100">
                        <p className="text-[10px] font-medium text-slate-400">
                          Jamie Peterson · 10:04 AM
                        </p>
                        <p className="mt-0.5 text-xs text-slate-800">
                          Yes, we have 18 new players for the youth league.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#2563eb] px-3 py-2 text-white shadow-sm">
                        <p className="text-[10px] font-medium text-blue-100">
                          You · 10:05 AM
                        </p>
                        <p className="mt-0.5 text-xs">
                          Perfect — I&apos;ve added a note on Jamie&apos;s
                          contact and tagged the Spring Program. Your team can
                          follow up from here.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 bg-white px-3 py-2.5">
                    <div className="flex items-end gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                      <p className="min-h-[20px] flex-1 text-[11px] text-slate-400">
                        Type a message...
                      </p>
                      <span className="rounded-md bg-[#2563eb] px-2.5 py-1 text-[10px] font-medium text-white">
                        Send
                      </span>
                    </div>
                    <div className="mt-1.5 flex gap-3 text-[9px] text-slate-400">
                      <span>Snippets</span>
                      <span>Templates</span>
                      <span>Schedule</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-base text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span
            className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
            style={{ backgroundColor: secondary }}
          >
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SolutionCard({
  title,
  tagline,
  description,
  imageSrc,
  imageAlt,
  features,
  results,
  setup,
  retainer,
}: {
  title: string;
  tagline: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  features: string[];
  results: string[];
  setup: string;
  retainer: string;
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-100 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[16/10] w-full bg-slate-50">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
        <div className="flex-1">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            {tagline}
          </p>
          <h3
            className="mt-2 text-2xl font-semibold tracking-tight text-slate-900"
            style={{ color: primary }}
          >
            {title}
          </h3>
          <p className="mt-3 text-base text-slate-600">{description}</p>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Features
            </p>
            <div className="mt-2">
              <FeatureList items={features} />
            </div>
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Results
            </p>
            <ul className="mt-2 space-y-1.5 text-base text-slate-700">
              {results.map((result) => (
                <li key={result} className="flex gap-2">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: secondary }}
                  />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-auto shrink-0 border-t border-slate-100 pt-6">
          <div className="min-h-[10.5rem] overflow-hidden rounded-2xl bg-gradient-to-br from-[#113251] via-[#1a4a75] to-[#5398EB] p-5 shadow-lg shadow-[#113251]/20 ring-1 ring-[#5398EB]/30">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#B7D1E7]">
              Pricing
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-white/15 p-4 ring-1 ring-white/25 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#B7D1E7]">
                  Setup
                </p>
                <p className="mt-2 text-lg font-bold leading-tight text-white sm:text-xl">
                  {setup}
                </p>
              </div>
              <div className="rounded-xl bg-white/15 p-4 ring-1 ring-white/25 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#B7D1E7]">
                  Retainer
                </p>
                <p className="mt-2 text-lg font-bold leading-tight text-white sm:text-xl">
                  {retainer}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <PrimaryButton href="#book-call">Book A Call</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function SmartCRMSolutionsSection() {
  return (
    <SectionShell
      id="solutions"
      label="Solutions"
      title="Smart CRM Solutions for Organizations & Home Service Businesses"
      description="AI-powered automation, appointment setting, and workflow systems designed to help businesses and organizations grow with less manual work."
    >
      <div className="grid items-stretch gap-8 lg:grid-cols-2">
        <SolutionCard
          title="Smart Basic CRM for Organizations"
          tagline="Built to help your organization grow"
          description="An AI-powered receptionist and CRM that manages registrations, communication, tournaments, and fundraising in one streamlined system."
          imageSrc="/images/pathways/community-3.png"
          imageAlt="Youth wrestling team group photo representing sports organizations and community programs."
          features={[
            "AI Receptionist & CRM",
            "Program Registration System",
            "Tournament Management",
            "Fundraiser System",
            "Bulk Messaging",
            "Group Chat Management",
            "Automated Follow-ups",
            "Human Handoff Support",
          ]}
          results={[
            "Clear and organized communication",
            "Reduced administrative workload",
            "Better member and participant experience",
            "Increased community engagement",
          ]}
          setup="$1,200 (includes all pipelines)"
          retainer="$240/month or $60/week"
        />
        <SolutionCard
          title="Smart Standard CRM for Home Service Business"
          tagline="Turn every lead into booked jobs"
          description="A complete AI-powered appointment setting and workflow automation system built for home service contractors like roofing, HVAC, plumbing, and remodeling businesses."
          imageSrc="/images/home-services/hvac-technician.png"
          imageAlt="HVAC technician servicing commercial equipment, representing home service field operations."
          features={[
            "Appointment Setting Pipeline",
            "AI Qualifying & Booking Bot",
            "Automated Follow-ups",
            "Google Review Requests",
            "Production Scheduling System",
            "Crew Management Tools",
            "Custom AI Agents",
            "Workflow Automation",
          ]}
          results={[
            "More booked jobs from existing leads",
            "Faster response times",
            "Stronger online reviews and reputation",
            "Smoother scheduling and operations",
            "Higher ROI from ads and lead spend",
          ]}
          setup="$1,200 per pipeline"
          retainer="$400/month or $100/week"
        />
      </div>
    </SectionShell>
  );
}

function FinalCTASection() {
  return (
    <section
      id="book-call"
      className="border-y border-slate-100 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="hero-title-gradient text-3xl font-semibold tracking-tight sm:text-4xl">
          Grow with AI-Powered CRM &amp; Automation
        </h2>
        <p className="mt-3 text-xl sm:text-2xl text-slate-600">
          Whether you run an organization or a home service business, Pathways
          helps you automate conversations, bookings, and follow-ups in one
          system—so your team spends less time on manual work.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <PrimaryButton href="#book-call">Book A Call</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <PathwaysLogo className="h-6 w-auto" />
          <p className="mt-2 max-w-sm text-sm text-slate-600">
            Smart CRM solutions with AI automation for organizations and home
            service businesses.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            © {new Date().getFullYear()} Pathways. All rights reserved.
          </p>
        </div>
        <div className="flex flex-1 flex-col items-start gap-8 text-base text-slate-700 sm:flex-row sm:items-center sm:justify-end">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#solutions" className="hover:text-[#113251]">
              Solutions
            </a>
            <a href="#solutions" className="hover:text-[#113251]">
              Pricing
            </a>
            <a href="#book-call" className="hover:text-[#113251]">
              Contact
            </a>
            <a href="#privacy" className="hover:text-[#113251]">
              Privacy Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="inline-flex shrink-0 items-center" aria-label="Pathways home">
          <PathwaysLogo className="h-5 w-auto sm:h-6" />
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex">
          <a href="#solutions" className="hover:text-[#113251]">
            Solutions
          </a>
          <a href="#solutions" className="hover:text-[#113251]">
            Pricing
          </a>
          <PrimaryButton href="#book-call">Book A Call</PrimaryButton>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <SmartCRMSolutionsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

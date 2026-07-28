const sections = [
  {
    id: "overview",
    title: "1. Overview",
    content:
      "This Privacy Policy explains how Aunn D Tayy LLC collects, uses, and protects information when you use our website and games.",
  },
  {
    id: "collect",
    title: "2. Information We Collect",
    content:
      "We may collect account identifiers, gameplay events, device information, and support messages. We only collect data needed to operate, improve, and secure our services.",
  },
  {
    id: "use",
    title: "3. How We Use Information",
    content:
      "Information is used to deliver game features, improve performance, investigate abuse, provide support, and comply with legal obligations.",
  },
  {
    id: "sharing",
    title: "4. Data Sharing",
    content:
      "We do not sell personal information. We may share limited information with trusted service providers who help us host services, process analytics, or prevent fraud.",
  },
  {
    id: "retention",
    title: "5. Data Retention",
    content:
      "We keep information only as long as necessary for business, legal, and security reasons. Retention periods vary by data type and region.",
  },
  {
    id: "rights",
    title: "6. Your Rights",
    content:
      "Depending on your location, you may have rights to access, correct, delete, or export your data. You can request privacy support through our contact email.",
  },
  {
    id: "children",
    title: "7. Children",
    content:
      "Our services are not directed to children under 13 unless explicitly stated. If you believe a child provided personal information, contact us and we will investigate promptly.",
  },
  {
    id: "security",
    title: "8. Security",
    content:
      "We use technical and organizational safeguards to protect data, but no system is completely secure. We continuously monitor and improve security controls.",
  },
  {
    id: "changes",
    title: "9. Policy Changes",
    content:
      "We may update this policy as our services evolve. Material changes will be reflected by a revised date on this page.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-zinc-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-[-15%] h-[30rem] w-[30rem] rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-10%] h-[24rem] w-[24rem] rounded-full bg-orange-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(255,255,255,0.12),transparent_45%),radial-gradient(circle_at_70%_65%,rgba(255,255,255,0.08),transparent_45%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 md:px-10 lg:flex-row lg:gap-14">
        <aside className="lg:sticky lg:top-10 lg:h-fit lg:w-64">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Legal</p>
          <h1 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-zinc-400">Last updated: July 27, 2026</p>

          <nav className="mt-7 space-y-2 rounded-2xl border border-zinc-700/70 bg-zinc-900/60 p-4 backdrop-blur">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block rounded-md px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </aside>

        <section className="flex-1 space-y-5">
          {sections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="rounded-2xl border border-zinc-700/70 bg-zinc-900/65 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur md:p-7"
            >
              <h2 className="text-xl font-bold md:text-2xl">{section.title}</h2>
              <p className="mt-3 leading-7 text-zinc-300">{section.content}</p>
            </article>
          ))}

          <article className="rounded-2xl border border-emerald-300/30 bg-emerald-400/10 p-6 md:p-7">
            <h2 className="text-xl font-bold md:text-2xl">Contact</h2>
            <p className="mt-3 leading-7 text-zinc-200">
              Privacy questions can be sent to aunndtayyllc@gmail.com.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}

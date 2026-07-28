const terms = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using our website and games, you agree to these Terms of Service. If you do not agree, please do not use our services.",
  },
  {
    id: "eligibility",
    title: "2. Eligibility",
    content:
      "You must comply with all applicable laws when using our services. If local law requires parental consent, you are responsible for obtaining it.",
  },
  {
    id: "license",
    title: "3. Limited License",
    content:
      "We grant you a personal, non-exclusive, non-transferable, revocable license to use our games and website for lawful personal use.",
  },
  {
    id: "conduct",
    title: "4. Acceptable Use",
    content:
      "You agree not to cheat, exploit bugs, reverse engineer protected systems, interfere with service availability, or abuse other players.",
  },
  {
    id: "ip",
    title: "5. Intellectual Property",
    content:
      "All content, branding, software, and game assets are owned by Aunn D Tayy LLC or its licensors. You may not copy or redistribute without permission.",
  },
  {
    id: "accounts",
    title: "6. Accounts and Access",
    content:
      "Some features may require an account. You are responsible for safeguarding credentials and for activity under your account.",
  },
  {
    id: "termination",
    title: "7. Suspension and Termination",
    content:
      "We may suspend or terminate access when we reasonably believe these terms are violated or when needed to protect service integrity.",
  },
  {
    id: "disclaimer",
    title: "8. Disclaimer",
    content:
      "Services are provided on an as-is and as-available basis without warranties of any kind, to the fullest extent permitted by law.",
  },
  {
    id: "liability",
    title: "9. Limitation of Liability",
    content:
      "To the maximum extent allowed by law, Aunn D Tayy LLC is not liable for indirect, incidental, special, or consequential damages arising from use of the services.",
  },
  {
    id: "changes",
    title: "10. Changes to Terms",
    content:
      "We may update these terms from time to time. Continued use of our services after updates means you accept the revised terms.",
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-zinc-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-[-14rem] left-[-12%] h-[26rem] w-[26rem] rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.06),transparent_35%),linear-gradient(320deg,rgba(255,255,255,0.05),transparent_40%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-6 py-16 md:px-10">
        <header className="rounded-3xl border border-zinc-700/70 bg-zinc-900/70 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.4)] backdrop-blur md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Legal</p>
          <h1 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 max-w-3xl text-zinc-300">
            These terms define the rules for using Aunn D Tayy LLC products,
            including this website and all published games.
          </p>
          <p className="mt-4 text-sm text-zinc-400">Last updated: July 27, 2026</p>
        </header>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          {terms.map((term) => (
            <article
              key={term.id}
              id={term.id}
              className="rounded-2xl border border-zinc-700/70 bg-zinc-900/65 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur"
            >
              <h2 className="text-xl font-bold">{term.title}</h2>
              <p className="mt-3 leading-7 text-zinc-300">{term.content}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-2xl border border-cyan-300/30 bg-cyan-400/10 p-6 md:p-7">
          <h2 className="text-xl font-bold md:text-2xl">Questions</h2>
          <p className="mt-3 leading-7 text-zinc-200">
            For legal or policy questions, contact aunndtayyllc@gmail.com.
          </p>
        </section>
      </div>
    </main>
  );
}

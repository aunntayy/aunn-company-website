export default function GamesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-zinc-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-[-10%] h-[28rem] w-[28rem] rounded-full bg-orange-500/25 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-8%] h-[24rem] w-[24rem] rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-6xl px-6 py-16 md:px-10">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Aunn D Tayy</p>
        <h1 className="mt-4 text-4xl font-black md:text-6xl">Game Library</h1>
        <p className="mt-4 max-w-2xl text-zinc-300">
          Play our currently available titles and check back for new releases.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl border border-zinc-700/70 bg-zinc-900/70 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
            <div className="h-40 rounded-xl bg-orange-500 text-black text-5xl font-black flex items-center justify-center">
              2048
            </div>
            <h2 className="mt-5 text-2xl font-bold">Classic 2048</h2>
            <p className="mt-2 text-zinc-300">
              Swipe or use arrow keys to combine tiles and reach 2048.
            </p>
            <a
              href="/games/2048"
              className="mt-5 inline-block rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              Play Now
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}

export default function Game2048Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Now Playing</p>
          <h1 className="mt-1 text-2xl font-black md:text-3xl">Classic 2048</h1>
        </div>
        <a
          href="/games"
          className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition hover:border-zinc-500 hover:text-white"
        >
          Back to Games
        </a>
      </header>

      <section className="mx-auto w-full max-w-6xl px-4 pb-10 md:px-10">
        <div className="overflow-hidden rounded-2xl border border-zinc-700/70 bg-zinc-900/50 shadow-[0_16px_45px_rgba(0,0,0,0.4)]">
          <iframe
            src="/games/2048/index.html"
            title="Classic 2048"
            className="h-[85vh] min-h-[650px] w-full bg-white"
            loading="eager"
          />
        </div>
      </section>
    </main>
  );
}

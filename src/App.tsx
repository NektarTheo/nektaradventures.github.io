function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center gap-6 px-6 text-center">
        <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300">
          Nektar Adventures
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          React + Tailwind Single Page App
        </h1>
        <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
          A fast, modern SPA scaffolded with the latest React and styled using Tailwind CSS.
        </p>
        <a
          href="#explore"
          className="rounded-md bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
        >
          Explore
        </a>
      </div>
    </main>
  )
}

export default App

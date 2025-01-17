"use client"

export default function HomePage() {
  const handleClick = () => {
    window.open('/intermediate')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-red-500 to-red-800 text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Initial
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:gap-8">
          <div
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 cursor-pointer select-none"
            onClick={handleClick}
          >
            <h3 className="text-2xl font-bold">Intermediate →</h3>
          </div>
        </div>
      </div>
    </main>
  );
}

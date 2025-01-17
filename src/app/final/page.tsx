"use client"

export default function HomePage() {
  const handleClick = () => {
    window.open('/intermediate')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-green-500 to-green-800 text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Final
        </h1>
      </div>
    </main>
  );
}

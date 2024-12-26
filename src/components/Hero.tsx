export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-500 to-indigo-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Ciao, sono Lorenzo</h1>
      <p className="text-xl mb-8">Sviluppatore web specializzato in React & Tailwind.</p>
      <button className="bg-white text-blue-600 py-2 px-6 rounded-full shadow-lg hover:bg-gray-100">
        Contattami
      </button>
    </section>
  )
}
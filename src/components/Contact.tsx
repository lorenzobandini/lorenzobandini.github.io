export default function Contact() {
  return (
    <section id="contact" className="py-16 px-8">
      <h2 className="text-3xl font-semibold mb-6">Contattami</h2>
      <form className="flex flex-col space-y-4 w-full max-w-md">
        <input type="text" placeholder="Nome" className="p-2 border border-gray-300 rounded" />
        <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded" />
        <textarea placeholder="Messaggio" className="p-2 border border-gray-300 rounded" rows={4}></textarea>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Invia</button>
      </form>
    </section>
  )
}
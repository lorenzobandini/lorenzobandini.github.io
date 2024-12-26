export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <div className="font-bold text-xl">Lorenzo Bandini</div>
      <nav className="space-x-4">
        <a href="#hero" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">Chi sono</a>
        <a href="#projects" className="hover:underline">Progetti</a>
        <a href="#education" className="hover:underline">Formazione</a>
        <a href="#experiences" className="hover:underline">Esperienze</a>
        <a href="#contact" className="hover:underline">Contatti</a>
      </nav>
    </header>
  )
}
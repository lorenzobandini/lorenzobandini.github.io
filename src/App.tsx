import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Header from './components/Header'
import Education from './components/Education'
import Experiences from './components/Experiences'

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Header />
      <Hero />
      <About />
      <Education />
      <Experiences />
      <Projects />
      <Contact />
    </div>
  )
}
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import BackgroundEffects from "../components/BackgroundEffects"
import Technologies from "../components/Technologies"
import Certifications from "../components/Certifications"
function Home() {
  return (
    <div className="bg-black text-white">
      <BackgroundEffects />

      <Navbar />

      <Hero />

      <About />

      <Projects />
      
      <Technologies/>

      <Certifications/>

      <Contact />

    </div>
  )
}

export default Home
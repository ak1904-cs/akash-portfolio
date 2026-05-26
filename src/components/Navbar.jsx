function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex justify-between items-center px-8 md:px-20 py-8 backdrop-blur-md">

      <h1 className="uppercase tracking-[10px] text-xs md:text-sm font-medium text-white">

        AKASH

      </h1>

      <div className="flex gap-8 md:gap-14 uppercase tracking-[4px] text-[10px] md:text-xs text-gray-300">

  <a href="#" className="hover:text-cyan-400 transition">
    Home
  </a>

  <a href="#about" className="hover:text-cyan-400 transition">
    About
  </a>

  <a href="#projects" className="hover:text-cyan-400 transition">
    Projects
  </a>

  <a href="#technologies" className="hover:text-cyan-400 transition">
    Technologies
  </a>

  <a href="#certifications" className="hover:text-cyan-400 transition">
    Certifications
  </a>

  <a href="#contact" className="hover:text-cyan-400 transition">
    Contact
  </a>

</div>
    </nav>
  )
}

export default Navbar
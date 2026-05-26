import { motion } from "framer-motion"

function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black text-white overflow-hidden px-8 md:px-20 py-40 flex items-center"
    >

      {/* Background Glow */}
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 w-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[8px] text-cyan-400 text-xs mb-8">

            Contact

          </p>

          <h1 className="text-5xl md:text-8xl leading-[0.95] font-semibold tracking-[-4px] max-w-5xl">

            Let’s build
            something
            impactful.

          </h1>

        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-10 mt-24">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="border border-cyan-500/20 bg-black/40 backdrop-blur-xl rounded-3xl p-8">

              <p className="uppercase tracking-[5px] text-cyan-400 text-xs mb-4">
                Email
              </p>

              <a
                href="mailto:akashsaripalli1904@gmail.com"
                className="text-2xl md:text-3xl hover:text-cyan-400 transition"
              >
                akashsaripalli1904@gmail.com
              </a>

            </div>

            <div className="border border-cyan-500/20 bg-black/40 backdrop-blur-xl rounded-3xl p-8">

              <p className="uppercase tracking-[5px] text-cyan-400 text-xs mb-4">
                Phone
              </p>

              <a
                href="tel:+918074796623"
                className="text-2xl md:text-3xl hover:text-cyan-400 transition"
              >
                +91 8074796623
              </a>

            </div>

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="border border-cyan-500/20 bg-black/40 backdrop-blur-xl rounded-3xl p-8">

              <p className="uppercase tracking-[5px] text-cyan-400 text-xs mb-4">
                Location
              </p>

              <h2 className="text-2xl md:text-3xl">
                Visakhapatnam, India
              </h2>

            </div>

            <div className="border border-cyan-500/20 bg-black/40 backdrop-blur-xl rounded-3xl p-8">

              <p className="uppercase tracking-[5px] text-cyan-400 text-xs mb-6">
                Profiles
              </p>

              <div className="flex flex-col gap-4 text-2xl md:text-3xl">

                <a
                  href="https://github.com/ak1904-cs"
                  target="_blank"
                  className="hover:text-cyan-400 transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/akash-saripalli-3ba85a308/"
                  target="_blank"
                  className="hover:text-cyan-400 transition"
                >
                  LinkedIn
                </a>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default Contact
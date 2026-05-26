import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-black text-white overflow-hidden px-8 md:px-20 py-40"
    >

      {/* Glow */}
      <div className="absolute top-[10%] left-[-200px] w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-6xl md:text-[120px] leading-none font-semibold tracking-[-6px] mb-24"
        >

          ABOUT

        </motion.h1>

        {/* About Text */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-300 text-xl leading-[2] max-w-5xl"
        >

          Pursuing B.Tech in Computer Science Engineering at GITAM University
          with strong knowledge of programming, data structures, and software
          development.

          Passionate about building scalable applications, intelligent systems,
          and solving real-world problems using modern technologies.

          Highly motivated and adaptable with strong foundations in computer science,
          problem-solving, communication, and teamwork.

          Eager to apply technical expertise, gain real-world experience,
          and contribute to impactful projects.

        </motion.p>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="mt-32"
        >

          <h2 className="text-4xl md:text-6xl font-semibold tracking-[-3px] mb-16">

            EDUCATION

          </h2>

          <div className="space-y-10">

            {/* GITAM */}
            <div className="border border-cyan-500/20 bg-black/40 backdrop-blur-xl rounded-3xl p-8">

              <div className="flex flex-col md:flex-row md:justify-between gap-6">

                <div>

                  <h3 className="text-3xl font-semibold">
                    GITAM University
                  </h3>

                  <p className="text-cyan-400 mt-3">
                    Bachelor of Technology — Computer Science Engineering
                  </p>

                </div>

                <div className="text-gray-400">

                  <p>Jul 2023 — May 2027</p>
                  <p>CGPA: 8.3</p>
                  <p>Visakhapatnam, India</p>

                </div>

              </div>

            </div>

            {/* Junior College */}
            <div className="border border-cyan-500/20 bg-black/40 backdrop-blur-xl rounded-3xl p-8">

              <div className="flex flex-col md:flex-row md:justify-between gap-6">

                <div>

                  <h3 className="text-3xl font-semibold">
                    Sri Chaitanya Junior College
                  </h3>

                  <p className="text-cyan-400 mt-3">
                    Intermediate (CBSE)
                  </p>

                </div>

                <div className="text-gray-400">

                  <p>Jul 2021 — Mar 2023</p>
                  <p>Percentage: 79%</p>
                  <p>Visakhapatnam, India</p>

                </div>

              </div>

            </div>

            {/* School */}
            <div className="border border-cyan-500/20 bg-black/40 backdrop-blur-xl rounded-3xl p-8">

              <div className="flex flex-col md:flex-row md:justify-between gap-6">

                <div>

                  <h3 className="text-3xl font-semibold">
                    Sri Chaitanya School
                  </h3>

                  <p className="text-cyan-400 mt-3">
                    SSC
                  </p>

                </div>

                <div className="text-gray-400">

                  <p>Jun 2020 — Mar 2021</p>
                  <p>Percentage: 100%</p>
                  <p>Visakhapatnam, India</p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default About
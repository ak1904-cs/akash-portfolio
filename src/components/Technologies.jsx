import { motion } from "framer-motion"

function Technologies() {

  const categories = [

    {
      title: "Languages",
      tech: ["Python", "Java", "C", "C++"],
    },

    {
      title: "Frontend",
      tech: ["HTML", "CSS", "JavaScript", "React"],
    },

    {
      title: "AI & Cybersecurity",
      tech: ["Machine Learning", "NLP", "OCR", "OSINT"],
    },

    {
      title: "Cloud & Tools",
      tech: ["AWS", "Git", "GitHub", "DevOps"],
    },

  ]

  return (
    <section
      id="technologies"
      className="relative min-h-screen bg-black text-white overflow-hidden px-8 md:px-20 py-40"
    >

      {/* Glow */}
      <div className="absolute top-[20%] right-[-200px] w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-6xl md:text-[120px] leading-none font-semibold tracking-[-6px] mb-24"
        >

          TECHNOLOGIES

        </motion.h1>

        {/* Categories */}
        <div className="grid md:grid-cols-2 gap-10">

          {categories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                borderColor: "#22d3ee",
              }}
              className="border border-cyan-500/20 bg-black/40 backdrop-blur-xl rounded-[40px] p-10"
            >

              <h2 className="text-3xl md:text-4xl font-semibold mb-10">

                {category.title}

              </h2>

              <div className="flex flex-wrap gap-4">

                {category.tech.map((item, i) => (

                  <div
                    key={i}
                    className="px-5 py-3 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-sm md:text-base"
                  >

                    {item}

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Technologies
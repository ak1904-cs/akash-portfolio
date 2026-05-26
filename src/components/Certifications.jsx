import { motion } from "framer-motion"

function Certifications() {

    const certifications = [

        {
          title: "Machine Learning & Deep Learning — NPTEL",
          link: "https://drive.google.com/file/d/1s_f2Uqx5e9uu_YLeqUqo6Xs8hKETrC9p/view?usp=drive_link",
        },
      
        {
          title: "Salesforce Agentforce Specialist",
          link: "https://drive.google.com/file/d/1KE0y_ei8VUdoN43u-GtqLnwPTKRRnhHu/view?usp=drive_link",
        },
      
        {
          title: "AI Developer Internship — CodeBeat",
          link: "https://drive.google.com/file/d/1M6xdsQdXnuMKpdHPH4UNiPAPYdNayLs7/view?usp=drive_link",
        },
      
        {
          title: "Smart India Hackathon 2025 Participant",
          link: "https://drive.google.com/file/d/1cFTbS__jlQRcScWDnFzuyzDc4aLp5iIT/view?usp=drive_link",
        },
      
      ]

  return (
    <section 
    id="certifications"
    className="relative min-h-screen bg-black text-white overflow-hidden px-8 md:px-20 py-40">

      {/* Glow */}
      <div className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

<h1 className="text-6xl md:text-[120px] leading-none font-semibold tracking-[-6px] mb-24">

CERTIFICATIONS

</h1>

        </motion.div>

        {/* Certification Cards */}
        <div className="space-y-6 mt-24">

          {certifications.map((cert, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.01,
                borderColor: "#22d3ee",
              }}
              className="border border-cyan-500/20 bg-black/40 backdrop-blur-xl rounded-3xl p-8 text-lg md:text-2xl"
            >

<a
  href={cert.link}
  target="_blank"
  rel="noopener noreferrer"
  className="flex justify-between items-center hover:text-cyan-400 transition"
>

  <span>{cert.title}</span>

  <span className="text-cyan-400 text-sm uppercase tracking-[4px]">
    View
  </span>

</a>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Certifications
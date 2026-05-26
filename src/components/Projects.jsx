import { motion } from "framer-motion"
import { useState } from "react"

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [

    {
      title: "Sentinel-X",
      organization: "AI & Cybersecurity Project",
  
      description:
        "Built a multi-modal OSINT threat intelligence platform using OCR, NLP, and automated risk scoring for cybersecurity analysis and entity detection.",
  
      image:
        "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop",
    },
  
    {
      title: "Multi-Lingual Learning Platform",
      organization: "Full Stack Web Application",
  
      description:
        "Developed a multilingual learning platform with authentication, secure validation systems, and dynamic language-switching capabilities.",
  
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    },
  
    {
      title: "UIDAI Data Intelligence System",
      organization: "Hackathon Project",
  
      description:
        "Designed a governance intelligence model using Aadhaar datasets to analyze maturity, maintenance pressure, and volatility indicators.",
  
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    },
  
    {
      title: "Groundwater Resource Evaluation",
      organization: "Smart Monitoring System",
  
      description:
        "Built a real-time groundwater monitoring and analytics system using DWLR datasets to track trends and resource variations.",
  
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    },
  
  ]

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black text-white px-8 md:px-20 py-40 overflow-hidden"
    >

      {/* Heading */}
      <div className="mb-24">

        <p className="uppercase tracking-[8px] text-cyan-400 text-xs mb-8">
          Selected Work
        </p>

        <h1 className="text-5xl md:text-8xl font-semibold leading-[0.95] tracking-[-4px]">

          Featured
          Projects

        </h1>

      </div>

      {/* Project List */}
      <div className="space-y-8">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            whileHover={{ scale: 1.01 }}
            onClick={() => setSelectedProject(project)}
            className="border border-cyan-500/20 rounded-3xl p-8 md:p-12 cursor-pointer bg-black/40 backdrop-blur-xl hover:border-cyan-400 transition"
          >

            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

              <div>

                <h2 className="text-3xl md:text-5xl font-semibold">

                  {project.title}

                </h2>

                <p className="text-gray-400 mt-4">

                  {project.organization}

                </p>

              </div>

              <p className="text-cyan-400 uppercase tracking-[4px] text-xs">

                View Project

              </p>

            </div>

          </motion.div>

        ))}

      </div>

      {/* Popup Modal */}
      {selectedProject && (

        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex items-center justify-center p-6">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#050505] border border-cyan-500/20 rounded-[40px] overflow-hidden max-w-5xl w-full"
          >

            {/* Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-[300px] object-cover"
            />

            {/* Content */}
            <div className="p-10">

              <div className="flex justify-between items-start gap-8">

                <div>

                  <h2 className="text-5xl font-semibold">

                    {selectedProject.title}

                  </h2>

                  <p className="text-cyan-400 mt-4 uppercase tracking-[4px] text-xs">

                    {selectedProject.organization}

                  </p>

                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white text-3xl"
                >

                  ×

                </button>

              </div>

              <p className="text-gray-400 leading-8 mt-10 text-lg">

                {selectedProject.description}

              </p>

            </div>

          </motion.div>

        </div>

      )}

    </section>
  )
}

export default Projects
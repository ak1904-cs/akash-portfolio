import { motion, useScroll, useTransform } from "framer-motion"

function Hero() {
  const { scrollY } = useScroll()

  const y = useTransform(scrollY, [0, 1000], [0, 300])

  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  return (
    <motion.section
  style={{ y, opacity }}
  className="relative h-screen bg-black overflow-hidden flex items-center justify-center text-white">

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

      </div>

      {/* Glow Effects */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-250px] right-[-200px] w-[600px] h-[600px] bg-blue-500/10 blur-[180px] rounded-full"></div>

      {/* Floating Panels */}

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-[18%] left-[8%] hidden md:block border border-cyan-500/20 bg-black/40 backdrop-blur-xl p-6 rounded-3xl w-[260px]"
      >

<p className="text-cyan-400 text-xs uppercase tracking-[4px] mb-6">
  AI CORE ONLINE
</p>

<div className="space-y-4 text-sm text-gray-300">

  <p>{"> Initializing neural systems..."}</p>
  <p>{"> Loading cybersecurity modules..."}</p>
  <p>{"> Cloud infrastructure secured..."}</p>
  <p>{"> Authentication verified..."}</p>
  <p>{"> System status: ACTIVE"}</p>

</div>

      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-[15%] right-[8%] hidden md:block border border-cyan-500/20 bg-black/40 backdrop-blur-xl p-6 rounded-3xl w-[300px]"
      >

<p className="text-cyan-400 text-xs uppercase tracking-[4px] mb-6">
  Core Technologies
</p>

<div className="space-y-5">

  <div>
    <div className="flex justify-between text-xs mb-2">
      <span>Python</span>
      <span>95%</span>
    </div>

    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
      <div className="h-full w-[95%] bg-cyan-400"></div>
    </div>
  </div>

  <div>
    <div className="flex justify-between text-xs mb-2">
      <span>Cybersecurity</span>
      <span>90%</span>
    </div>

    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
      <div className="h-full w-[90%] bg-cyan-400"></div>
    </div>
  </div>

  <div>
    <div className="flex justify-between text-xs mb-2">
      <span>Cloud & DevOps</span>
      <span>82%</span>
    </div>

    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
      <div className="h-full w-[82%] bg-cyan-400"></div>
    </div>
  </div>

</div>

      </motion.div>

      <motion.div
  animate={{
    y: ["-100%", "120%"],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute left-0 w-full h-[120px] bg-cyan-400/5 blur-3xl"
/>
      {/* Main Content */}

      <div className="relative z-10 text-center px-6">

        

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-6xl md:text-[150px] leading-[0.85] font-semibold tracking-[-8px]"
        >

          BUILDING
          <br />

          <motion.span
  animate={{
    opacity: [1, 0.7, 1],
    textShadow: [
      "0 0 10px rgba(34,211,238,0.2)",
      "0 0 30px rgba(34,211,238,0.8)",
      "0 0 10px rgba(34,211,238,0.2)",
    ],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
  }}
  className="text-cyan-300"
>

  INTELLIGENT

</motion.span>
          <br />

          SYSTEMS

        </motion.h1>



      </div>

    </motion.section>
  )
}

export default Hero
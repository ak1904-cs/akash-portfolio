import { motion } from "framer-motion"

function BackgroundEffects() {

  const particles = Array.from({ length: 40 })

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {/* Moving Grid */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "0px 100px"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating Particles */}
      {particles.map((_, index) => (

        <motion.div
          key={index}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 8 + index % 5,
            repeat: Infinity,
          }}
          className="absolute w-[3px] h-[3px] bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />

      ))}

      {/* Left Glow */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-[-250px] right-[-200px] w-[700px] h-[700px] bg-blue-500/10 blur-[200px] rounded-full"
      />

      {/* Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

    </div>
  )
}

export default BackgroundEffects
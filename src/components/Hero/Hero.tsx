import { motion } from 'framer-motion'
import { ArrowDown, Download, ExternalLink, Sparkles, Code2, Database, Cloud, Cpu, FileJson } from 'lucide-react'

const floatingIcons = [
  { icon: Code2, label: 'React', x: '15%', y: '20%', delay: 0 },
  { icon: FileJson, label: 'Java', x: '85%', y: '15%', delay: 0.5 },
  { icon: Database, label: 'PostgreSQL', x: '10%', y: '70%', delay: 1 },
  { icon: Cloud, label: 'GCP', x: '88%', y: '65%', delay: 1.5 },
  { icon: Cpu, label: 'AI', x: '50%', y: '10%', delay: 2 },
  { icon: Sparkles, label: 'LLM', x: '50%', y: '85%', delay: 0.8 },
]

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 neural-bg" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="text-sm text-gray-400">Available for opportunities</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="inline-block mb-6">
            <span className="font-mono text-sm text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
              AI Full Stack Developer
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none mb-6">
            <span className="block">Building Intelligent</span>
            <span className="block gradient-text mt-2">Full Stack Solutions</span>
            <span className="block text-white/90 mt-2">with AI</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          AI Full Stack Developer specializing in Spring Boot, React, FastAPI, and Generative AI.
          Building enterprise-grade applications with modern AI capabilities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <a
            href=""
            className="group px-8 py-4 rounded-xl glass glass-hover text-white font-semibold text-lg flex items-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            Download Resume
          </a>

          <a
            href="#contact"
            className="group px-8 py-4 rounded-xl glass glass-hover text-gray-300 font-semibold text-lg flex items-center gap-2 transition-all duration-300 hover:scale-105"
          >
            Contact Me
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-center justify-center gap-8 sm:gap-12"
        >
          {['Java', 'Spring Boot', 'React', 'FastAPI', 'Python', 'TypeScript'].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.1 }}
              className="text-xs sm:text-sm text-gray-500 font-mono tracking-wider uppercase"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {floatingIcons.map(({ icon: Icon, label, x, y, delay }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + delay, duration: 0.5, type: 'spring' }}
          className="absolute hidden lg:block"
          style={{ left: x, top: y }}
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut' }}
            className="glass rounded-2xl p-3 group hover:bg-white/10 transition-colors cursor-default"
          >
            <Icon className="w-6 h-6 text-indigo-400 group-hover:text-teal-400 transition-colors" />
          </motion.div>
          <span className="block text-xs text-gray-500 text-center mt-1 font-mono">{label}</span>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 font-mono">Scroll</span>
          <ArrowDown className="w-4 h-4 text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { Briefcase, Building2, ArrowRight, Sparkles, Code2, Brain } from 'lucide-react'

const milestones = [
  {
    year: '2023',
    title: 'Enterprise Development',
    description: 'Started working on enterprise projects for Ford, building full-stack applications with Java Spring Boot and React.',
    icon: Building2,
  },
  {
    year: '2024',
    title: 'Full Stack Mastery',
    description: 'Deepened expertise in Spring Boot, React TSX, FastAPI, and REST APIs. Delivered production-grade systems.',
    icon: Code2,
  },
  {
    year: '2025',
    title: 'AI Engineering',
    description: 'Began specializing in Generative AI, LLMs, RAG systems, and AI Agents. Expanding into GCP cloud architecture.',
    icon: Brain,
  },
  {
    year: '2026+',
    title: 'AI Architect',
    description: 'Building intelligent systems that combine enterprise full-stack expertise with cutting-edge AI capabilities.',
    icon: Sparkles,
  },
]

export default function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">About Me</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From enterprise full-stack development to AI engineering
            </p>
            <div className="mt-6 flex justify-center">
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400" />
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start" ref={ref}>
          <div className="lg:col-span-3 space-y-6">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              I'm an{' '}
              <span className="text-white font-semibold">AI Full Stack Developer</span> with over a year of
              experience building enterprise-grade applications for{' '}
              <span className="text-white font-semibold">Ford</span> through my company.
              My expertise spans the full development stack — from{' '}
              <span className="text-indigo-400">Java Spring Boot</span> and{' '}
              <span className="text-indigo-400">React TSX</span> on the frontend, to{' '}
              <span className="text-indigo-400">Python FastAPI</span> for AI-powered backends.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              Currently, I'm diving deep into{' '}
              <span className="text-teal-400">Artificial Intelligence, Generative AI, LLMs, RAG systems, AI Agents,</span>{' '}
              and <span className="text-teal-400">Google Cloud Platform</span>.
              I'm passionate about building intelligent systems that solve real-world problems at scale.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              My journey is driven by a vision to bridge the gap between enterprise software engineering
              and cutting-edge AI — creating applications that are not only robust and scalable but also
              intelligent and adaptive.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {['Enterprise Apps', 'REST APIs', 'AI Integration', 'Cloud Architecture'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-teal-500/30 to-transparent" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className="relative pl-16 pb-10 last:pb-0"
                >
                  <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-[#0a0a0f] border-2 border-indigo-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  </div>

                  <div className="glass rounded-xl p-5 glass-hover">
                    <div className="flex items-center gap-2 mb-2">
                      <milestone.icon className="w-4 h-4 text-indigo-400" />
                      <span className="text-xs font-mono text-indigo-400">{milestone.year}</span>
                    </div>
                    <h3 className="text-white font-semibold mb-1">{milestone.title}</h3>
                    <p className="text-gray-400 text-sm">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

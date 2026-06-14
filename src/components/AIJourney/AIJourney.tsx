import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { Code2, Cloud, Sparkles, Network, Bot, Target, ChevronDown } from 'lucide-react'

const journeySteps = [
  {
    title: 'Full Stack Developer',
    description: 'Mastered Java Spring Boot, React, FastAPI, and enterprise architecture patterns.',
    icon: Code2,
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Cloud Engineering',
    description: 'Learning GCP, Docker, and cloud-native development practices for scalable deployments.',
    icon: Cloud,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Generative AI',
    description: 'Exploring LLMs, prompt engineering, and generative model applications.',
    icon: Sparkles,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'RAG Systems',
    description: 'Building retrieval-augmented generation pipelines with vector databases and embeddings.',
    icon: Network,
    gradient: 'from-teal-500 to-emerald-500',
  },
  {
    title: 'AI Agents',
    description: 'Developing autonomous AI agents for complex task execution and decision making.',
    icon: Bot,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'AI Architect',
    description: 'Designing and orchestrating intelligent systems that combine enterprise scale with AI.',
    icon: Target,
    gradient: 'from-indigo-500 to-teal-500',
  },
]

export default function AIJourney() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="ai-journey" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 neural-bg opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-300">The Path Ahead</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">AI Journey</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My roadmap from full stack developer to AI architect
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400" />
          </div>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="relative flex items-start gap-6 pb-12 last:pb-0"
            >
              <div className="relative flex flex-col items-center">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg relative z-10`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                {index < journeySteps.length - 1 && (
                  <div className="absolute top-14 bottom-0 w-px bg-gradient-to-b from-white/10 to-transparent" />
                )}
              </div>

              <div className="flex-1 pt-3">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-mono text-indigo-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-400">{step.description}</p>
              </div>

              {index < journeySteps.length - 1 && (
                <div className="hidden sm:flex absolute -bottom-2 left-7 justify-center">
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

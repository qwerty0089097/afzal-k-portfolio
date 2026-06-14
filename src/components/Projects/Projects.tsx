import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Red Carpet Agency Landing Page',
    description: 'Vannila HTML landing site with visually attractive business site with contact form',
    tags: ['PHP','HTML','CSS','Cloudflare Pages'],
    gradient: 'from-cyan-600 to-blue-600',
    links: { demo: 'https://theredcarpet.afzalrah997.workers.dev/', github: '#' },
  },
  {
    title: 'AI-Powered Java Version Migration Assistant',
    description: 'Automated Java code migration tool powered by LLMs. Analyzes compilation errors, suggests fixes, and automates version upgrades across large codebases.',
    tags: ['React', 'FastAPI', 'LLM', 'Java', 'OpenAI'],
    gradient: 'from-indigo-600 to-purple-600',
    links: { demo: 'https://javaapex-frontend-r4sl.onrender.com/', github: '#' },
  },
  {
    title: 'AI-Powered PLSQL-Java Version Migration Assistant',
    description: 'Automated Java code migration tool from PL/SQL powered by LLMs. Analyzes compilation errors, suggests fixes, and automates version upgrades across large codebases.',
    tags: ['React', 'FastAPI', 'LLM', 'Java', 'OpenAI'],
    gradient: 'from-indigo-600 to-purple-600',
    links: { demo: 'https://javaapex-frontend-r4sl.onrender.com/', github: '#' },
  },
  {
    title: 'Enterprise Employee Management System',
    description: 'Comprehensive employee management platform with leave tracking, timesheets, payroll processing, and document management for enterprise use.',
    tags: ['Spring Boot', 'React TSX', 'PostgreSQL', 'Docker'],
    gradient: 'from-teal-600 to-emerald-600',
    links: { demo: '#', github: '#' },
  },
  {
    title: 'AI Powered Hospital-Appointment-Booking-System',
    description: 'Intelligent resume analysis tool using LLMs to evaluate ATS compatibility, provide improvement suggestions, and score resumes against job descriptions.',
    tags: ['FastAPI', 'LLM', 'Python', 'NLP'],
    gradient: 'from-purple-600 to-pink-600',
    links: { demo: 'https://wellnessdev-csgl.onrender.com/', github: '#' },
  },
  {
    title: 'ANI-VOXA AI-Voice-Powered-ChatBot',
    description: 'Retrieval-Augmented Generation system that answers questions from documents using vector databases and OpenAI/Gemini APIs for accurate context-aware responses.',
    tags: ['Vector DB', 'FastAPI', 'OpenAI', 'Gemini', 'RAG'],
    gradient: 'from-cyan-600 to-blue-600',
    links: { demo: 'https://ani-voxaa.onrender.com', github: '#' },
  },
]

function ProjectCard({ project, index, isVisible }: { project: typeof projects[0]; index: number; isVisible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 * index }}
      className="group relative"
    >
      <div className="glass rounded-2xl overflow-hidden h-full flex flex-col">
        <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

        <div className="p-6 md:p-8 flex flex-col flex-1">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500/50" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <span className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <div className="flex gap-2">
                <a
                  href={project.links.demo}
                  className="p-2 rounded-lg hover:bg-white/5 text-gray-500 hover:text-white transition-all"
                  aria-label="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={project.links.github}
                  className="p-2 rounded-lg hover:bg-white/5 text-gray-500 hover:text-white transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-5`} />
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing enterprise applications and AI-powered solutions
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400" />
          </div>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

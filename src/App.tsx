import { lazy, Suspense, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, Code2 } from 'lucide-react'

const Particles = lazy(() => import('./components/ui/Particles'))
const CustomCursor = lazy(() => import('./components/ui/CustomCursor'))
const Navbar = lazy(() => import('./components/Navbar/Navbar'))
const Hero = lazy(() => import('./components/Hero/Hero'))
const About = lazy(() => import('./components/About/About'))
const Skills = lazy(() => import('./components/Skills/Skills'))
const Experience = lazy(() => import('./components/Experience/Experience'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const AIJourney = lazy(() => import('./components/AIJourney/AIJourney'))
const Certifications = lazy(() => import('./components/Certifications/Certifications'))
const Contact = lazy(() => import('./components/Contact/Contact'))
const Footer = lazy(() => import('./components/Footer/Footer'))

function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => Math.min(p + Math.random() * 20, 100))
    }, 200)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-[#0a0a0f] flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-500 to-teal-400 flex items-center justify-center"
        >
          <Code2 className="w-8 h-8 text-white" />
        </motion.div>
        <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden mx-auto mb-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-indigo-500 to-teal-400 rounded-full"
          />
        </div>
        <p className="text-gray-500 text-sm font-mono">Loading portfolio...</p>
      </div>
    </motion.div>
  )
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" />
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <div className="min-h-screen bg-[#0a0a0f] text-white">
        <Suspense fallback={null}>
          <Particles />
          <CustomCursor />
        </Suspense>

        <Suspense fallback={null}>
          <Navbar />
        </Suspense>

        <main>
          <Suspense fallback={<SectionLoader />}>
            <Hero />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <AIJourney />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Certifications />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>

        <ScrollToTop />
      </div>
    </>
  )
}

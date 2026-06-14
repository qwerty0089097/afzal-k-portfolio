import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }

    const handleMouseLeave = () => setVisible(false)
    const handleMouseEnter = () => setVisible(true)

    window.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [visible])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] transition-[width,height] duration-150 ease-out"
        style={{
          left: position.x - 4,
          top: position.y - 4,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#818cf8',
          boxShadow: '0 0 10px rgba(99, 102, 241, 0.5), 0 0 20px rgba(99, 102, 241, 0.3)',
          opacity: visible ? 1 : 0,
        }}
      />
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          opacity: visible ? 0.6 : 0,
        }}
      />
    </>
  )
}

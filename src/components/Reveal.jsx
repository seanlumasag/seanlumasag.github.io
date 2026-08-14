import { useEffect, useRef } from 'react'

const Reveal = ({ as: Component = 'div', children, className = '', delay = 0 }) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current

    if (!element) return undefined

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      element.classList.add('reveal-visible')
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        element.classList.add('reveal-visible')
        observer.unobserve(element)
      },
      { threshold: 0.14, rootMargin: '0px 0px -32px' },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const revealClassName = `reveal ${className}`.trim()
  const revealStyle = { '--reveal-delay': `${delay}ms` }

  if (Component === 'h1') {
    return (
      <h1 ref={elementRef} className={revealClassName} style={revealStyle}>
        {children}
      </h1>
    )
  }

  if (Component === 'section') {
    return (
      <section ref={elementRef} className={revealClassName} style={revealStyle}>
        {children}
      </section>
    )
  }

  if (Component === 'article') {
    return (
      <article ref={elementRef} className={revealClassName} style={revealStyle}>
        {children}
      </article>
    )
  }

  return (
    <div ref={elementRef} className={revealClassName} style={revealStyle}>
      {children}
    </div>
  )
}

export default Reveal

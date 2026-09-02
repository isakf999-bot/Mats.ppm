import { useEffect, useRef } from 'react'

/**
 * Lägger till klassen `is-visible` på elementet när det scrollas in i vy.
 * Innehållet är synligt direkt om reduced-motion är valt (CSS sköter det),
 * så viktig information göms aldrig bakom en interaktion.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15 },
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ref
}

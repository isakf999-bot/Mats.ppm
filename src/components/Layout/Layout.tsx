import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import SeoHead from '../SeoHead/SeoHead'

/** Scrollar till toppen vid sidbyte (men respekterar #ankarlänkar). */
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  return null
}

export default function Layout() {
  return (
    <>
      <SeoHead />
      <a className="skip-link" href="#main-content">
        Hoppa till innehållet
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

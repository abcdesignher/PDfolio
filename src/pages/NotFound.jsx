import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ThreeCircles from '../components/ThreeCircles'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page not found — Valerie Osuamkpe'
  }, [])

  return (
    <main id="main" className="notfound">
      <div className="container notfound-inner">
        <ThreeCircles size={64} className="notfound-circles" aria-hidden="true" />
        <p className="eyebrow">404</p>
        <h1 className="display-serif">This page doesn’t exist.</h1>
        <p className="lede">
          The link may be broken, or the project may have moved. The portfolio
          still has all the work.
        </p>
        <Link className="btn btn-primary" to="/">
          Back to the homepage
        </Link>
      </div>
    </main>
  )
}
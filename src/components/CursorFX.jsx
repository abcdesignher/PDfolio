import { useEffect, useRef } from 'react'

const MAX_STARS = 150
const MAX_RINGS = 36
const TRAIL_LEN = 9
const STROKE = '172, 214, 254'
const CORE = '7, 54, 122'

function starPath(ctx, x, y, r) {
  const spikes = 4
  const rot = Math.PI / 2
  ctx.beginPath()
  for (let i = 0; i < spikes * 2; i++) {
    const radius = i % 2 === 0 ? r : r * 0.42
    const a = (i * Math.PI) / spikes + rot
    const px = x + Math.cos(a) * radius
    const py = y + Math.sin(a) * radius
    if (i === 0) ctx.moveTo(px, py)
    else ctx.lineTo(px, py)
  }
  ctx.closePath()
}

function makeSprites() {
  const glow = document.createElement('canvas')
  glow.width = glow.height = 64
  const g = glow.getContext('2d')
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32)
  grad.addColorStop(0, `rgba(${STROKE}, 1)`)
  grad.addColorStop(0.3, `rgba(${STROKE}, 0.5)`)
  grad.addColorStop(1, `rgba(${STROKE}, 0)`)
  g.fillStyle = grad
  g.fillRect(0, 0, 64, 64)

  const star = document.createElement('canvas')
  star.width = star.height = 56
  const s = star.getContext('2d')
  const sgrad = s.createRadialGradient(28, 28, 0, 28, 28, 28)
  sgrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)')
  sgrad.addColorStop(0.35, `rgba(${STROKE}, 0.6)`)
  sgrad.addColorStop(1, `rgba(${STROKE}, 0)`)
  s.fillStyle = 'rgba(255,255,255,0.25)'
  s.beginPath()
  s.arc(28, 28, 26, 0, Math.PI * 2)
  s.fill()
  s.fillStyle = sgrad
  starPath(s, 28, 28, 17)
  s.fill()

  return { glow, star, size: 64, starSize: 56 }
}

export default function CursorFX() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (reduceMotion || !finePointer) return

    const ctx = canvas.getContext('2d')
    const sprites = makeSprites()
    let w = 0
    let h = 0
    const stars = []
    const rings = []
    const pointer = { x: 0, y: 0, active: false }
    let lastSpawn = { x: 0, y: 0 }
    let lastRing = { x: 0, y: 0 }
    let raf = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    function resize() {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      stars.length = 0
      rings.length = 0
    }

    function spawnStar(x, y) {
      const angle = Math.random() * Math.PI * 2
      const speed = 0.25 + Math.random() * 0.6
      stars.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.15,
        life: 1,
        trail: [],
      })
      if (stars.length > MAX_STARS) stars.shift()
    }

    function spawnRing(x, y) {
      rings.push({ x, y, r: 8, life: 1 })
      if (rings.length > MAX_RINGS) rings.shift()
    }

    function onMove(e) {
      pointer.x = e.clientX
      pointer.y = e.clientY
      pointer.active = true
      const dx = e.clientX - lastSpawn.x
      const dy = e.clientY - lastSpawn.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist > 14) {
        spawnStar(e.clientX, e.clientY)
        if (dist > 40) spawnStar(e.clientX, e.clientY)
        lastSpawn = { x: e.clientX, y: e.clientY }
      }
      const rdx = e.clientX - lastRing.x
      const rdy = e.clientY - lastRing.y
      const rdist = Math.sqrt(rdx * rdx + rdy * rdy)
      if (rdist > 34) {
        spawnRing(e.clientX, e.clientY)
        lastRing = { x: e.clientX, y: e.clientY }
      }
    }

    function onDown(e) {
      pointer.x = e.clientX
      pointer.y = e.clientY
      pointer.active = true
      spawnRing(e.clientX, e.clientY)
      spawnRing(e.clientX, e.clientY)
    }

    function isDark() {
      return document.documentElement.getAttribute('data-theme') === 'dark'
    }

    function frame() {
      const dark = isDark()
      const t = performance.now()
      ctx.clearRect(0, 0, w, h)

      if (dark) {
        ctx.globalCompositeOperation = 'lighter'

        for (let s = 0; s < stars.length; s++) {
          const star = stars[s]
          star.life -= 0.03
          star.vx *= 0.985
          star.vy = star.vy * 0.985 + 0.008
          star.x += star.vx
          star.y += star.vy
          star.trail.push({ x: star.x, y: star.y })
          if (star.trail.length > TRAIL_LEN) star.trail.shift()

          const lifeFrac = Math.max(star.life, 0)

          for (let k = 1; k < star.trail.length; k++) {
            const prev = star.trail[k - 1]
            const cur = star.trail[k]
            const grad = k / star.trail.length
            ctx.strokeStyle = `rgba(${STROKE}, ${lifeFrac * grad * 0.6})`
            ctx.lineWidth = 0.25 + grad * 1.4
            ctx.beginPath()
            ctx.moveTo(prev.x, prev.y)
            ctx.lineTo(cur.x, cur.y)
            ctx.stroke()
          }

          if (star.life > 0) {
            const scale = 10 + 30 * lifeFrac
            ctx.globalAlpha = lifeFrac * 0.9
            ctx.drawImage(
              sprites.star,
              0,
              0,
              sprites.starSize,
              sprites.starSize,
              star.x - scale / 2,
              star.y - scale / 2,
              scale,
              scale,
            )
          }
        }
        ctx.globalAlpha = 1

        if (pointer.active) {
          const pulse = 0.5 + 0.18 * Math.sin(t * 0.004)
          ctx.globalAlpha = pulse
          ctx.drawImage(
            sprites.glow,
            0,
            0,
            sprites.size,
            sprites.size,
            pointer.x - 9,
            pointer.y - 9,
            18,
            18,
          )
          ctx.globalAlpha = 1
        }

        for (let s = stars.length - 1; s >= 0; s--) {
          if (stars[s].life <= 0) stars.splice(s, 1)
        }
      } else {
        ctx.globalCompositeOperation = 'source-over'

        for (let r = rings.length - 1; r >= 0; r--) {
          const ring = rings[r]
          ring.r += 2.4
          ring.life -= 0.018
          if (ring.life <= 0) {
            rings.splice(r, 1)
            continue
          }
          ctx.strokeStyle = `rgba(${CORE}, ${ring.life * 0.4})`
          ctx.lineWidth = 1.3
          ctx.beginPath()
          ctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2)
          ctx.stroke()
          ctx.strokeStyle = `rgba(${STROKE}, ${ring.life * 0.5})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.arc(ring.x, ring.y, Math.max(1, ring.r - 6), 0, Math.PI * 2)
          ctx.stroke()
        }

        if (pointer.active) {
          ctx.globalAlpha = 0.7
          ctx.drawImage(
            sprites.glow,
            0,
            0,
            sprites.size,
            sprites.size,
            pointer.x - 20,
            pointer.y - 20,
            40,
            40,
          )
          ctx.globalAlpha = 1
          ctx.fillStyle = `rgba(${CORE}, 0.95)`
          ctx.beginPath()
          ctx.arc(pointer.x, pointer.y, 4, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      raf = requestAnimationFrame(frame)
    }

    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown, { passive: true })
    resize()
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="cursor-fx"
      aria-hidden="true"
      tabIndex={-1}
    />
  )
}
const circleClasses = ['tc-circle-1', 'tc-circle-2', 'tc-circle-3']

export default function ThreeCircles({
  size = 56,
  opacity = 1,
  className = '',
  animated = false,
  ariaHidden = true,
}) {
  const base = 1.62 * size
  const height = 1.16 * size
  const r = {
    width: size,
    height: size,
    borderRadius: '50%',
  }

  const rings = circleClasses.map((c, i) => {
    const isOutline = i === 2
    const style = { ...r }
    if (i === 1) {
      style.left = `${0.62 * size}px`
      style.top = `${0.34 * size}px`
    } else if (i === 2) {
      style.left = `${1.02 * size}px`
    } else {
      style.top = `${0.08 * size}px`
    }
    style.opacity = opacity
    if (isOutline) {
      style.background = 'transparent'
      style.border = `${Math.max(2, size * 0.045)}px solid var(--accent-strong)`
    }
    const cls = [
      'tc-circle',
      `tc-circle-${i + 1}`,
      isOutline ? 'tc-circle-outline' : '',
      animated ? 'tc-drifting' : '',
    ]
      .filter(Boolean)
      .join(' ')

    return <span key={c} className={cls} style={style} />
  })

  return (
    <span
      className={`three-circles ${className}`}
      style={{ width: base, height }}
      aria-hidden={ariaHidden || undefined}
    >
      {rings}
    </span>
  )
}
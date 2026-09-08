import { useTheme } from '../hooks/useTheme'

const OPTIONS = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
]

export default function ThemeToggle({ id = 'theme', className = '' }) {
  const { preference, setTheme } = useTheme()

  return (
    <div
      className={`theme-toggle ${className}`}
      role="group"
      aria-label="Color theme"
    >
      {OPTIONS.map((opt) => {
        const active = preference === opt.value
        return (
          <button
            key={opt.value}
            type="button"
            className={`theme-toggle-btn${active ? ' is-active' : ''}`}
            aria-pressed={active}
            aria-label={`${opt.label} theme`}
            title={`${opt.label} theme`}
            onClick={() => setTheme(opt.value)}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
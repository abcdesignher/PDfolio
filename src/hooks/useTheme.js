import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'vo-theme'

function getInitialPreference() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      return stored
    }
  } catch (e) {}
  return 'system'
}

export function useTheme() {
  const [preference, setPreference] = useState(getInitialPreference)
  const [resolved, setResolved] = useState(() =>
    resolveTheme(getInitialPreference()),
  )

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const update = () => {
      if (preference === 'system') {
        setResolved(media.matches ? 'dark' : 'light')
      } else {
        setResolved(preference)
      }
      document.documentElement.setAttribute(
        'data-theme',
        preference === 'system'
          ? media.matches
            ? 'dark'
            : 'light'
          : preference,
      )
      try {
        localStorage.setItem(STORAGE_KEY, preference)
      } catch (e) {}
    }

    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [preference])

  const setTheme = useCallback((next) => {
    setPreference(next)
  }, [])

  return { theme: resolved, preference, setTheme }
}

function resolveTheme(pref) {
  if (pref === 'system') {
    return typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }
  return pref
}
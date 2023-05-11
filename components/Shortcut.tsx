import { useState, useEffect } from 'react'
import { useKBar } from 'kbar'
import PrimaryButton from './PrimaryButton'

export default function ShortcutHome() {
  const { query } = useKBar()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
    const isMac = /(Mac)/i.test(navigator.userAgent)
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)

    if (isMobile) {
      return (
        <PrimaryButton
          type="button"
          onClick={query.toggle}
          data-testid="kbar-mobile"
          title="kbar mobile button"
        >
          Tap to start →
        </PrimaryButton>
      )
    } else if (isMac) {
      return (
        <PrimaryButton
          type="button"
          onClick={query.toggle}
          data-testid="kbar-mac"
          title="kbar mac button"
        >
          Press <kbd>⌘</kbd> <kbd>K</kbd> to start →
        </PrimaryButton>
      )
    } else {
      return (
        <PrimaryButton
          type="button"
          onClick={query.toggle}
          data-testid="kbar-desktop"
          title="kbar desktop button"
        >
          Press <kbd>ctrl</kbd> <kbd>K</kbd> to start →
        </PrimaryButton>
      )
    }
  }

  return <div />
}

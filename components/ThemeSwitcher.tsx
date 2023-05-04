import { useCallback, useEffect, useState } from 'react'

export function SwitchTheme() {
  const [enabled, setEnabled] = useState(false)

  const changeTheme = useCallback(
    (isEnable: boolean) => {
      setEnabled(isEnable)
      document.querySelector('html')?.classList.toggle('dark')
      saveTheme(isEnable ? 'light' : 'dark')
    },
    [setEnabled, enabled]
  )

  const saveTheme = (theme: string) => {
    localStorage.setItem('cjunnior-theme', theme)
    setEnabled(theme === 'light' ? true : false)
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('cjunnior-theme') || 'dark'
    saveTheme(localTheme)
    if (localTheme === 'dark')
      document.querySelector('html')?.classList.add('dark')
    else document.querySelector('html')?.classList.remove('dark')
  }, [])

  return (
    <button
      aria-label="Switch theme"
      type="button"
      onClick={() => changeTheme(!enabled)}
    >
      <span className="flex justify-center items-center w-12 h-12 rounded-lg cursor-pointer delay-75 transition-transform hover:scale-105 text-lg">
        {enabled ? (
          <i className="ri-sun-line"></i>
        ) : (
          <i className="ri-moon-line"></i>
        )}
      </span>
    </button>
  )
}

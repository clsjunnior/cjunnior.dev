import { render, screen } from '@testing-library/react'
import { useKBar } from 'kbar'
import ShortcutHome from '../components/Shortcut'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

jest.mock('kbar')

describe('Home page - Desktop Kbar Button', () => {
  it('Ensure Kbar button has rendering at Desktop with the correct label', async () => {
    ;(useKBar as jest.Mock).mockImplementation(() => ({
      query: jest.fn().mockResolvedValue([]),
    }))
    render(<ShortcutHome />)
    const button = await screen.findByTestId('kbar-desktop')
    expect(button.title).toBe('kbar desktop button')
  })
})

describe('Home page - MacOS Kbar Button', () => {
  beforeEach(() => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
      writable: true,
      configurable: true,
    })
  })

  it('Ensure Kbar button has rendering at MacOS with the correct label', async () => {
    ;(useKBar as jest.Mock).mockImplementation(() => ({
      query: jest.fn().mockResolvedValue([]),
    }))
    render(<ShortcutHome />)
    const button = await screen.findByTestId('kbar-mac')
    expect(button.title).toBe('kbar mac button')
  })

  afterEach(() => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: '',
      writable: true,
      configurable: true,
    })
  })
})

describe('Home page - Mobile Kbar Button', () => {
  beforeEach(() => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (Linux; Android 11; SM-G991U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36',
      writable: true,
      configurable: true,
    })
  })

  it('Ensure Kbar button has rendering at Mobile with the correct label', async () => {
    ;(useKBar as jest.Mock).mockImplementation(() => ({
      query: jest.fn().mockResolvedValue([]),
    }))
    render(<ShortcutHome />)
    const button = await screen.findByTestId('kbar-mobile')
    expect(button.title).toBe('kbar mobile button')
  })

  afterEach(() => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: '',
      writable: true,
      configurable: true,
    })
  })
})

import { render, screen } from '@testing-library/react'
import { useKBar } from 'kbar'
import { useRouter } from 'next/router'
import Header from '../components/Header'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

jest.mock('kbar')

describe('Header links', () => {
  it('Ensure menu links are internal links started with `/`', async () => {
    ;(useRouter as jest.Mock).mockReturnValue({})
    ;(useKBar as jest.Mock).mockImplementation(() => ({
      query: jest.fn().mockResolvedValue([]),
    }))

    render(<Header />)
    const links = screen.getAllByRole('link')

    links.forEach((link) => {
      expect(link.getAttribute('href')).toMatch(/^\/.*/g)
      expect(link.getAttribute('href')).not.toMatch(/^https?:\/\//)
    })
  })
})

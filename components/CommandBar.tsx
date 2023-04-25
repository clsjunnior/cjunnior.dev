import React, { CSSProperties, useRef } from 'react'
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
} from 'kbar'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { useRouter } from 'next/router'

import contactIcon from '../public/static/icons/contact.json'
import aboutIcon from '../public/static/icons/about.json'
import workIcon from '../public/static/icons/work.json'
import projectsIcon from '../public/static/icons/projects.json'
import homeIcon from '../public/static/icons/home.json'

type Props = {
  children?: React.ReactNode
}

const CommandBar: React.FC<Props> = (props) => {
  const aboutRef = useRef<LottieRefCurrentProps>(null)
  const workRef = useRef<LottieRefCurrentProps>(null)
  const projectsRef = useRef<LottieRefCurrentProps>(null)
  const contactRef = useRef<LottieRefCurrentProps>(null)
  const homeRef = useRef<LottieRefCurrentProps>(null)
  const router = useRouter()

  const actions = [
    {
      id: 'home',
      name: 'Home',
      shortcut: ['h'],
      keywords: 'go-home',
      section: 'Pages',
      perform: () => router.push('/'),
      icon: (
        <Lottie
          lottieRef={homeRef}
          style={iconStyle}
          animationData={homeIcon}
          loop={false}
          autoplay={false}
        />
      ),
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['a'],
      keywords: 'go-about',
      section: 'Pages',
      perform: () => router.push('/about'),
      icon: (
        <Lottie
          lottieRef={aboutRef}
          style={iconStyle}
          animationData={aboutIcon}
          loop={false}
          autoplay={false}
        />
      ),
    },
    {
      id: 'career',
      name: 'My Career',
      shortcut: ['w'],
      keywords: 'go-work',
      section: 'Pages',
      perform: () => router.push('/career'),
      icon: (
        <Lottie
          lottieRef={workRef}
          style={iconStyle}
          animationData={workIcon}
          loop={false}
          autoplay={false}
        />
      ),
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['p'],
      keywords: 'go-projects',
      section: 'Pages',
      perform: () => router.push('/projects'),
      icon: (
        <Lottie
          lottieRef={projectsRef}
          style={iconStyle}
          animationData={projectsIcon}
          loop={false}
          autoplay={false}
        />
      ),
    },
    {
      id: 'contact',
      name: 'Contact',
      shortcut: ['c'],
      keywords: 'go-contact',
      section: 'Pages',
      perform: () => router.push('/contact'),
      icon: (
        <Lottie
          lottieRef={contactRef}
          style={iconStyle}
          animationData={contactIcon}
          loop={false}
          autoplay={false}
        />
      ),
    },
    {
      id: 'linkedin',
      name: 'Linkedin',
      keywords: 'go-linkedin',
      section: 'Follow me',
      perform: () =>
        window.open('https://www.linkedin.com/in/celso-junior', '_blank'),
      icon: <i className="ri-linkedin-line" style={iconStyle}></i>,
    },
    {
      id: 'git',
      name: 'Github',
      keywords: 'go-giy',
      section: 'Follow me',
      perform: () => window.open('https://github.com/clsjunnior', '_blank'),
      icon: <i className="ri-github-line" style={iconStyle}></i>,
    },
  ]

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner style={positionerStyle}>
          <KBarAnimator className="kbar-blur" style={animatorStyle}>
            <KBarSearch
              style={searchStyle}
              placeholder="Type a command or search…"
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>

      {props.children}
    </KBarProvider>
  )
}

export default CommandBar

function RenderResults() {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div style={groupNameStyle}>{item}</div>
        ) : (
          //@ts-ignore
          <ResultItem action={item} active={active} />
        )
      }
    />
  )
}

/* eslint-disable react/display-name */
const ResultItem = React.forwardRef<HTMLDivElement>(
  ({ action, active }: any, ref: any) => {
    if (active) {
      action?.icon?.props.lottieRef &&
        action?.icon?.props.lottieRef.current?.play()
    } else {
      action?.icon?.props.lottieRef &&
        action?.icon?.props.lottieRef.current?.stop()
    }

    return (
      <div
        ref={ref as any}
        style={getResultStyle(active)}
        onMouseEnter={() =>
          action?.icon?.props.lottieRef &&
          action?.icon?.props.lottieRef.current?.play()
        }
        onMouseLeave={() =>
          action?.icon?.props.lottieRef &&
          action?.icon?.props.lottieRef.current?.stop()
        }
      >
        <div style={actionStyle}>
          {action.icon && action.icon}
          <div style={actionRowStyle}>
            <span>{action.name}</span>
          </div>
        </div>
        {action.shortcut?.length ? (
          <div aria-hidden style={shortcutStyle}>
            {action.shortcut.map((shortcut: any) => (
              <kbd key={shortcut} style={kbdStyle}>
                {shortcut}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    )
  }
)

const positionerStyle: CSSProperties = {
  position: 'fixed',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  inset: '0px',
  padding: '14vh 16px 16px',
  background: 'rgba(0, 0, 0, .52)',
  boxSizing: 'border-box',
}

const animatorStyle: CSSProperties = {
  maxWidth: '600px',
  width: '100%',
  color: 'var(--primaryColor)',
  borderRadius: '8px',
  overflow: 'hidden',
}

const searchStyle: CSSProperties = {
  padding: '12px 16px',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  margin: 0,
  background: 'var(--commandColor)',
  color: 'var(--primaryColor)',
}

const groupNameStyle: CSSProperties = {
  padding: '8px 16px',
  fontSize: '10px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  background: 'var(--commandColor)',
}

const iconStyle: CSSProperties = {
  width: 24,
  height: 24,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'var(--primaryColor)',
  fontSize: '1.2rem',
}

const kbdStyle: CSSProperties = {
  padding: '4px 8px',
  textTransform: 'uppercase',
  color: '#fff',
  background: 'rgba(255, 255, 255, .1)',
}

const shortcutStyle: CSSProperties = {
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '4px',
}

const actionStyle: CSSProperties = {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
}

const actionRowStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
}

const getResultStyle = (active: any): CSSProperties => {
  return {
    padding: '12px 16px',
    background: active ? 'rgba(255, 255, 255, 0.1)' : 'var(--commandColor)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 0,
    cursor: 'pointer',
    color: active ? 'var(--primaryColor)' : '#fff',
  }
}

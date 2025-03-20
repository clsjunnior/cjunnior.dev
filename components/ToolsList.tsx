import React from 'react'
import Image, { ImageProps } from 'next/image'

import aws from '../public/static/images/aws.png'
import docker from '../public/static/images/docker.png'
import git from '../public/static/images/git.png'
import javascript from '../public/static/images/javascript.png'
import typescript from '../public/static/images/typescript.png'
import react from '../public/static/images/react.png'
import figma from '../public/static/images/figma.png'
import graphql from '../public/static/images/graphql.png'
import jest from '../public/static/images/jest.png'
import node from '../public/static/images/node.png'
import webpack from '../public/static/images/webpack.png'
import next from '../public/static/images/next.png'
import tailwindcss from '../public/static/images/tailwindcss.png'
import sass from '../public/static/images/sass.png'
import postman from '../public/static/images/postman.png'
import gatsby from '../public/static/images/gatsby.webp'
import redux from '../public/static/images/redux.png'
import drupal from '../public/static/images/drupal.png'
import php from '../public/static/images/php.png'
import postgress from '../public/static/images/postgresql.png'

type toolsListType = {
  icon: React.ReactElement
  title: string
}

function ToolIcon(props: ImageProps) {
  return (
    <Image {...props} className="w-5 h-5 sm:w-8 sm:h-8" alt={props.alt || ''} />
  )
}

const ToolsList: React.FC = () => {
  const toolsList: toolsListType[] = [
    {
      icon: <ToolIcon src={react} alt="react icon" />,
      title: 'React',
    },
    {
      icon: <ToolIcon src={redux} alt="redux icon" />,
      title: 'Redux',
    },
    {
      icon: <ToolIcon src={next} alt="next icon" />,
      title: 'NextJS',
    },
    {
      icon: <ToolIcon src={gatsby} alt="gatsby icon" />,
      title: 'Gatsby',
    },
    {
      icon: <ToolIcon src={javascript} alt="javascript icon" />,
      title: 'Javascript',
    },
    {
      icon: <ToolIcon src={typescript} alt="typescript icon" />,
      title: 'Typescript',
    },
    {
      icon: <ToolIcon src={tailwindcss} alt="tailwindcss icon" />,
      title: 'Tailwindcss',
    },
    {
      icon: <ToolIcon src={sass} alt="sass icon" />,
      title: 'Sass',
    },
    {
      icon: <ToolIcon src={node} alt="node icon" />,
      title: 'NodeJs',
    },
    {
      icon: <ToolIcon src={postman} alt="postman icon" />,
      title: 'Postman',
    },
    {
      icon: <ToolIcon src={webpack} alt="webpack icon" />,
      title: 'Webpack',
    },
    {
      icon: <ToolIcon src={git} alt="git icon" />,
      title: 'Git + GitFlow',
    },
    {
      icon: <ToolIcon src={docker} alt="docker icon" />,
      title: 'Docker',
    },
    {
      icon: (
        <ToolIcon
          src={aws}
          alt="aws icon"
          className="contrast-50 dark:contrast-100 w-5 h-5 sm:w-8 sm:h-8"
        />
      ),
      title: 'AWS Cloud',
    },
    {
      icon: <ToolIcon src={graphql} alt="graphql icon" />,
      title: 'GraphQl',
    },
    {
      icon: <ToolIcon src={jest} alt="jest icon" />,
      title: 'Jest',
    },
    {
      icon: <ToolIcon src={figma} alt="figma icon" />,
      title: 'Figma',
    },
    {
      icon: <ToolIcon src={drupal} alt="drupal icon" />,
      title: 'Drupal',
    },
    {
      icon: <ToolIcon src={php} alt="php icon" />,
      title: 'PHP',
    },
    {
      icon: <ToolIcon src={postgress} alt="postgress icon" />,
      title: 'PostgreSQL',
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <p className="block flex-auto text-sm font-medium">
        These are some of the tools I use in my day-to-day work as a
        <span className="font-bold text-highlight"> developer</span> and some
        that I have used in my career.
      </p>
      <div className="flex flex-wrap gap-4 items-center max-h-[250px] sm:max-h-max overflow-y-auto sm:overflow-hidden">
        {toolsList.map((tool) => (
          <div
            key={tool.title}
            className="flex gap-2 items-center bg-background dark:bg-gray-50 rounded-lg py-2 px-4 border-gray-700 dark:border-gray-200 border-2"
          >
            {tool.icon}
            <span className="text-gray-300 dark:text-gray-600 text-xs font-bold">
              {tool.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToolsList

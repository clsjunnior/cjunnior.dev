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

type toolsListType = {
  icon: React.ReactElement
  title: string
}

function NextImage(props: ImageProps) {
  return <Image className="w-8 h-8" {...props} />
}

const ToolsList: React.FC = () => {
  const toolsList: toolsListType[] = [
    {
      icon: <NextImage src={react} alt="react icon" />,
      title: 'React',
    },
    {
      icon: <NextImage src={next} alt="next icon" />,
      title: 'NextJS',
    },
    {
      icon: <NextImage src={javascript} alt="javascript icon" />,
      title: 'Javascript',
    },
    {
      icon: <NextImage src={typescript} alt="typescript icon" />,
      title: 'Typescript',
    },
    {
      icon: <NextImage src={tailwindcss} alt="tailwindcss icon" />,
      title: 'Tailwindcss',
    },
    {
      icon: <NextImage src={sass} alt="sass icon" />,
      title: 'Sass',
    },
    {
      icon: <NextImage src={node} alt="node icon" />,
      title: 'NodeJs',
    },
    {
      icon: <NextImage src={postman} alt="postman icon" />,
      title: 'Postman',
    },
    {
      icon: <NextImage src={webpack} alt="webpack icon" />,
      title: 'Webpack',
    },
    {
      icon: <NextImage src={git} alt="git icon" />,
      title: 'Git + GitFlow',
    },
    {
      icon: <NextImage src={docker} alt="docker icon" />,
      title: 'Docker',
    },
    {
      icon: (
        <NextImage
          src={aws}
          alt="aws icon"
          style={{ filter: 'contrast(0.5)' }}
        />
      ),
      title: 'AWS Cloud',
    },
    {
      icon: <NextImage src={graphql} alt="graphql icon" />,
      title: 'GraphQl',
    },
    {
      icon: <NextImage src={jest} alt="jest icon" />,
      title: 'Jest',
    },
    {
      icon: <NextImage src={figma} alt="figma icon" />,
      title: 'Figma',
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <p className="block flex-auto text-sm font-medium">
        These are some of the tools I use in my day-to-day work as a
        <span className="font-bold text-highlight"> developer</span> and some
        that I have used in my career.
      </p>
      <div className="flex flex-wrap gap-4 items-center">
        {toolsList.map((tool) => (
          <div
            key={tool.title}
            className="flex gap-2 items-center bg-background rounded-lg py-2 px-4 border-gray-700 border-2"
          >
            {tool.icon}
            <span className="text-gray-300 text-xs font-bold">
              {tool.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToolsList

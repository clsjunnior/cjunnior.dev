import { PropsWithChildren } from 'react'

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const PrimaryButton: React.FC<PropsWithChildren<PrimaryButtonProps>> = (
  props
) => {
  const { children, ...rest } = props
  return (
    <button
      className="text-white bg-background border border-gray-700 focus:outline-none hover:bg-background-dark font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition-all"
      {...rest}
    >
      {children}
    </button>
  )
}
export default PrimaryButton

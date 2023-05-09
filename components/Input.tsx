import { PropsWithChildren } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputLabel: string
  inputType?: 'text' | 'textarea'
}

const Input: React.FC<PropsWithChildren<InputProps>> = (props) => {
  const { children, inputLabel, inputType, ...rest } = props

  function Label() {
    return (
      <label
        htmlFor={rest.id}
        className="block mb-2 text-sm font-medium text-gray-50 dark:text-gray-900"
      >
        {inputLabel}
      </label>
    )
  }

  if (inputType === 'textarea') {
    return (
      <div>
        <Label />
        <textarea
          rows={4}
          className="block p-3 w-full text-sm bg-background border border-gray-800 placeholder:text-gray-400 text-gray-100 outline-none rounded-lg  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white"
          placeholder={rest.placeholder}
          id={rest.id}
          name={rest.name}
          value={rest.value}
          onChange={rest.onChange as any}
        ></textarea>
      </div>
    )
  }

  return (
    <div>
      <Label />
      <input
        {...rest}
        className="bg-background border border-gray-800 placeholder:text-gray-400 text-gray-100 text-sm rounded-lg ring-transparent outline-none block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white"
      />
    </div>
  )
}

Input.defaultProps = {
  inputType: 'text',
}

export default Input

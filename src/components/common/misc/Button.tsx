import { ReactNode, useEffect, useState } from 'react'

import Loading from '../../../assets/icons/loading'

interface ButtonProps {
  type?: 'button' | 'reset' | 'submit'
  label?: string
  loading?: boolean
  disabled?: boolean
  icon?: boolean
  className?: string
  children?: ReactNode
  handleClick?: () => void
}

const Button = ({
  type = 'button',
  label = '',
  loading = false,
  disabled = false,
  icon = false,
  className = '',
  children,
  handleClick = () => {}
}: ButtonProps) => {
  const [classList, setClassList] = useState<string>(className)

  const clickedEvent = () => {
    if (loading || disabled) return
    handleClick()
  }

  useEffect(() => {
    if (loading || disabled) {
      setClassList(`${classList} opacity-50 cursor-not-allowed`)
    } else {
      setClassList(`${classList} cursor-pointer after:content-[''] after:inline-block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-800 after:active:opacity-100`)
    }
  }, [])

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={clickedEvent}
      className={`${classList} bg-cyan-400 hover:bg-cyan-500 after:bg-cyan-300 text-white relative rounded py-2 px-5 text-sm capitalize shadow`}
    >
      {loading ? (
        <Loading />
      ) : icon ? (
        icon && (
          <div className="flex items-center">
            <div className="fill-current mr-2">{children}</div>
            {label}
          </div>
        )
      ) : (
        label
      )}
    </button>
  )
}

export default Button

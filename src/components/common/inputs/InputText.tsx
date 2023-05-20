/* eslint-disable operator-linebreak */
import { useEffect, useState } from 'react'

import Eye from '../../../assets/icons/Eye'
import CrossEye from '../../../assets/icons/CrossEye'

interface InputTextProps {
  value?: string
  label?: string
  placeholder?: string
  className?: string
  error?: string
  type?: 'text' | 'password' | 'number' | 'email'
  orientation?: 'vertical' | 'horizontal'
  size?: 'sm' | 'md' | 'lg'
  required?: boolean
  disabled?: boolean
  min?: number
  max?: number
  maxLength?: number
  handleChange?: () => void
  handleBlur?: () => void
  handleFocus?: () => void
  handleCopy?: () => void
  handleCut?: () => void
  handlePaste?: () => void
}

const InputText = ({
  value = '',
  label = '',
  placeholder = '',
  className = '',
  error = '',
  type = 'text',
  orientation = 'vertical',
  size = 'md',
  required = false,
  disabled = false,
  min = 0,
  max,
  maxLength,
  handleChange,
  handleBlur,
  handleFocus,
  handleCopy,
  handleCut,
  handlePaste
}: InputTextProps) => {
  const [containerClass, setContainerClass] = useState<string>('')
  const [inputClass, setInputClass] = useState<string>('')
  const [iconClass, setIconClass] = useState<string>('')
  const [inputType, setInputType] = useState<string>(type)

  useEffect(() => {
    if (label !== '') {
      if (orientation === 'vertical') {
        setContainerClass(`${className} flex-col space-y-2`)
      } else {
        setContainerClass(`${className} items-start space-x-3`)
      }
    }

    if (size === 'sm') {
      setInputClass(`${type === 'password' ? 'pr-5' : ''} h-7 pl-2 text-sm`)
      setIconClass('pr-1')
    } else if (size === 'md') {
      setInputClass(`${type === 'password' ? 'pr-6' : ''} h-8 pl-2 text-base`)
      setIconClass('pr-1.5')
    } else {
      setInputClass(`${type === 'password' ? 'pr-7' : ''} h-10 pl-2 text-lg`)
      setIconClass('pr-1.5')
    }
  }, [])

  return (
    <div className={`flex ${containerClass}`}>
      {label !== '' && (
        <span className="flex">
          {label}
          {required && <strong className="text-red-500 ml-1">*</strong>}
        </span>
      )}
      <div className="flex flex-col items-start">
        <div className="flex relative items-center w-full">
          <input
            type={inputType}
            value={value}
            className={`${inputClass} w-full border rounded-md border-gray-200 focus:outline-none focus:border focus:border-green-500 focus:invalid:border-red-500`}
            placeholder={placeholder}
            disabled={disabled}
            min={min}
            max={max}
            maxLength={maxLength}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onCopy={handleCopy}
            onCut={handleCut}
            onPaste={handlePaste}
          />
          {type === 'password' &&
            (inputType === 'password' ? (
              <button
                type="button"
                onClick={() => setInputType('text')}
                className={`${iconClass} absolute right-0 hover:cursor-pointer`}
              >
                <Eye size={size} />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setInputType('password')}
                className={`${iconClass} absolute right-0 hover:cursor-pointer`}
              >
                <CrossEye size={size} />
              </button>
            ))}
        </div>
        {error !== '' && (
          <span id="error" className="text-red-500 text-xs break-all">
            {error}
          </span>
        )}
      </div>
    </div>
  )
}

export default InputText

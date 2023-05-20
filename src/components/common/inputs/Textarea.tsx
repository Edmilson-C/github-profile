import React, { useEffect, useState } from 'react'

interface TextareaProps {
  value?: string
  label?: string
  placeholder?: string
  className?: string
  error?: string
  comment?: string
  orientation?: 'vertical' | 'horizontal'
  required?: boolean
  disabled?: boolean
  rows?: number
  handleChange?: () => void
  handleBlur?: () => void
  handleFocus?: () => void
  handleCopy?: () => void
  handleCut?: () => void
  handlePaste?: () => void
}

const Textarea = ({
  value = '',
  label = '',
  placeholder = '',
  className = '',
  error = '',
  comment = '',
  orientation = 'vertical',
  required = false,
  disabled = false,
  rows = 5,
  handleChange,
  handleBlur,
  handleFocus,
  handleCopy,
  handleCut,
  handlePaste
}: TextareaProps) => {
  const [containerClass, setContainerClass] = useState<string>('')

  useEffect(() => {
    if (label !== '') {
      if (orientation === 'vertical') {
        setContainerClass(`${className} flex-col space-y-2`)
      } else {
        setContainerClass(`${className} items-start space-x-2`)
      }
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
          <textarea
            value={value}
            className="w-full border rounded-md border-gray-200 focus:outline-none focus:border focus:border-green-500 focus:invalid:border-red-500"
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onCopy={handleCopy}
            onCut={handleCut}
            onPaste={handlePaste}
          />
        </div>
        {comment !== '' && (
          <p className="text-sm italic break-all text-gray-500">
            {comment}
          </p>
        )}
        {error !== '' && (
          <span id="error" className="text-red-500 text-xs break-all">
            {error}
          </span>
        )}
      </div>
    </div>
  )
}

export default Textarea

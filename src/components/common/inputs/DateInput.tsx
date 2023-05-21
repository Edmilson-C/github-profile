/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/flatpickr.css'

interface DateInputProps {
  value?: string
  label?: string
  className?: string
  error?: string
  orientation?: 'vertical' | 'horizontal'
  size?: 'sm' | 'md' | 'lg'
  required?: boolean
  options?: object
  handleChange?: (selectedDates: Date[], dateStr: string, instance: object) => void
  handleOpen?: (selectedDates: Date[], dateStr: string, instance: object) => void
  handleClose?: (selectedDates: Date[], dateStr: string, instance: object) => void
  handleMonthChange?: (selectedDates: Date[], dateStr: string, instance: object) => void
  handleYearChange?: (selectedDates: Date[], dateStr: string, instance: object) => void
  handleReady?: (selectedDates: Date[], dateStr: string, instance: object) => void
  handleValueUpdate?: (selectedDates: Date[], dateStr: string, instance: object) => void
  handleDayCreate?: (selectedDates: Date[], dateStr: string, instance: object) => void
}

const DateInput = ({
  value = '',
  label = '',
  className = '',
  error = '',
  orientation = 'vertical',
  size = 'md',
  required = false,
  options = {},
  handleChange = () => {},
  handleOpen = () => {},
  handleClose = () => {},
  handleMonthChange = () => {},
  handleYearChange = () => {},
  handleReady = () => {},
  handleValueUpdate = () => {},
  handleDayCreate = () => {}
}: DateInputProps) => {
  const [containerClass, setContainerClass] = useState<string>('')

  const inputClass = () => {
    if (size === 'sm') {
      return 'h-7 pl-2 text-sm'
    }
    if (size === 'md') {
      return 'h-8 pl-2 text-base'
    }
    return 'h-10 pl-2 text-lg'
  }

  useEffect(() => {
    if (label !== '') {
      if (orientation === 'vertical') {
        setContainerClass(`${className} flex-col space-y-2`)
      } else {
        setContainerClass(`${className} items-start space-x-3`)
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
          <Flatpickr
            value={value}
            className={`${inputClass()} w-full border rounded-md border-gray-200 focus:outline-none focus:border focus:border-green-500 focus:invalid:border-red-500`}
            options={{
              altInput: true,
              altFormat: 'd/m/Y',
              dateFormat: 'd-m-y',
              ...options
            }}
            onChange={handleChange}
            onOpen={handleOpen}
            onClose={handleClose}
            onMonthChange={handleMonthChange}
            onYearChange={handleYearChange}
            onReady={handleReady}
            onValueUpdate={handleValueUpdate}
            onDayCreate={handleDayCreate}
          />
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

export default DateInput

import { useRef } from 'react'

/**
 * Debounces the function passed a parameter
 * @param {Function} fn function to debounce
 * @param {number} delay debounce time
 * @returns {Function} cleanup function
 */
export default function useDebounce(fn: Function, delay: number): Function {
  const timeoutRef = useRef<any>(null)
  function debounceFn(...args: any[]) {
    window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => {
      fn(...args)
    }, delay)
  }
  return debounceFn
}

import { useCallback, useRef } from 'react'

/**
 * Throttles the function passed a parameter
 * @param {Function} fn function to throttled
 * @param {number} delay throttle time
 * @returns {Function} cleanup function
 */
export default function useThrottle(fn: Function, delay: number): Function {
  const lastExecutedRef = useRef<number>(0)

  const throttledCallback = useCallback(
    (...args: any[]) => {
      const currentTime = Date.now()

      if (currentTime - lastExecutedRef.current >= delay) {
        fn(...args)
        lastExecutedRef.current = currentTime
      }
    },
    [fn, delay]
  )

  return throttledCallback
}

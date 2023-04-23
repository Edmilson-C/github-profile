import { useEffect, useState } from 'react'

const Loading = ({ size = 'sm', className = '' }) => {
  const [loadingSize, setLoadingSize] = useState<string>(className)

  useEffect(() => {
    switch (size) {
      case 'sm':
        setLoadingSize(`${className} h-6 w-6 border-2`)
        break

      case 'md':
        setLoadingSize(`${className} h-12 w-12 border-4`)
        break

      case 'lg':
        setLoadingSize(`${className} h-20 w-20 border-8`)
        break

      default:
        setLoadingSize(`${className} h-6 w-6 border-2`)
    }
  }, [])

  return <div className={`animate-spin rounded-full divide-x-8 border-dotted ${loadingSize}`} />
}

export default Loading

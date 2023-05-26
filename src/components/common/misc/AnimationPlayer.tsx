import { useRef } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

interface AnimationPlayerProps {
  src: string
  height?: string
  width?: string
}

const AnimationPlayer = ({ src, height = '10rem', width = '10rem' }: AnimationPlayerProps) => {
  const containerRef = useRef(null)

  return (
    <Player
      ref={containerRef.current}
      autoplay
      loop
      src={`/src/assets/animations/${src}.json`}
      style={{ height, width }}
    />
  )
}

export default AnimationPlayer

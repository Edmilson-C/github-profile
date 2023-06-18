interface DoubleArrowRightProps {
  height?: string
  width?: string
}

const DoubleArrowRight = ({ height = '48', width = '48' }: DoubleArrowRightProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 -960 960 960">
    <path d="m255-241-42-42 198-198-198-198 42-42 240 240-240 240Zm253 0-42-42 198-198-198-198 42-42 240 240-240 240Z" />
  </svg>
)

export default DoubleArrowRight

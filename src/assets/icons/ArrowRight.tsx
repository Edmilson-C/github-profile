interface ArrowRightProps {
  height?: string
  width?: string
}

const ArrowRight = ({ height = '48', width = '48' }: ArrowRightProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 -960 960 960">
    <path d="m375-240-43-43 198-198-198-198 43-43 241 241-241 241Z" />
  </svg>
)

export default ArrowRight

interface ArrowLeftProps {
  height?: string
  width?: string
}

const ArrowLeft = ({ height = '48', width = '48' }: ArrowLeftProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width}>
    <path d="M561-240 320-481l241-241 43 43-198 198 198 198-43 43Z" />
  </svg>
)

export default ArrowLeft

interface ImageContainerProps {
  image: string
  name: string
  className?: string
}

const ImageContainer = ({ image, name, className }: ImageContainerProps) => (
  <div className={`${className} w-36 h-36 border-gray-dark border-8 rounded-3xl`}>
    <img className="rounded-2xl w-full h-full" src={image} alt={`${name} profile pic`} />
  </div>
)

export default ImageContainer

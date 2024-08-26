interface ImageContainerProps {
  image: string
  name: string
  className?: string
}

const ImageContainer = ({ image, name, className }: ImageContainerProps) => (
  <div className={`${className} w-40 h-40 border-gray-dark border-8 rounded-2xl`}>
    <img className="rounded-lg w-full h-full" src={image} alt={`${name} profile pic`} />
  </div>
)

export default ImageContainer

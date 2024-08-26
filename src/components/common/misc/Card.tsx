interface CardProps {
  label: string
  description: string | number
  className?: string
}

const Card = ({ label, description, className }: CardProps) => (
  <div className={`${className} flex items-center justify-between rounded-xl bg-blue-dark py-2 px-6 h-14`}>
    <span className="text-gray-light text-base">{label}</span>
    <div className="h-full w-px bg-light-default opacity-50 mx-6" />
    <span className="text-light-default text-base">{description}</span>
  </div>
)

export default Card

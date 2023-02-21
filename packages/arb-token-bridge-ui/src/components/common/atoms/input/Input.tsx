/*
   Zero-styling abstraction of HTML Input tag used in our projects
*/

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = (props: InputProps) => {
  const { className, ...rest } = props

  return (
    <input
      className={`h-full w-full bg-transparent font-light placeholder:text-gray-9 ${className}`}
      {...rest}
    />
  )
}

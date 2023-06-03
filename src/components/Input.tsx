import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

interface IInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  cla?: ''
}
export const Input = ({ className, ...props }: IInput) => {
  return (
    <input
      {...props}
      className={` outline-0  text-black ${className}`}
      type="text"
    />
  )
}

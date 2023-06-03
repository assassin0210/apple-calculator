import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

interface IButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  buttonType: 'orange' | 'gray' | 'darkGray'
  isActive?: boolean
}

export const Button = ({
  children,
  className,
  buttonType,
  isActive,
  ...rest
}: IButton) => {
  const buttonTypes = useButtonTypes(isActive)
  return (
    <button
      {...rest}
      className={`w-[88px] transition duration-300  text-[36px] uppercase text-black font-medium h-[88px] rounded-full  ${className} ${buttonTypes[buttonType]}`}
    >
      {children}
    </button>
  )
}
const useButtonTypes = (isActive?: boolean) => {
  return {
    orange: `bg-orange-500 hover:opacity-90 text-black text-white  active:bg-orange-300 ${
      isActive ? '!bg-orange-300' : ''
    }`,
    gray: `bg-gray-300 hover:opacity-90  active:bg-white ${
      isActive ? '!bg-gray-300' : ''
    }`,
    darkGray: `bg-gray-500 hover:opacity-90 text-white active:bg-gray-300 ${
      isActive ? '!bg-gray-300' : ''
    }`,
  }
}

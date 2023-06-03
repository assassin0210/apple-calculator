import { useEffect, useRef } from 'react'

import { useAppSelector } from '@/hooks/hooks'

export const ResultValue = ({ className }: { className: string }) => {
  // useEffect(() => {
  //   const handleResize = () => {
  //     const contentWrapperWidth = document.getElementById('content-wrapper')
  //     // Делайте что-то с новой шириной блока content-wrapper
  //     console.log('Ширина блока:', contentWrapperWidth?.offsetWidth)
  //   }
  //
  //   // Вызывайте handleResize сразу после монтирования компонента
  //   handleResize()
  //
  //   // Подписывайтесь на событие изменения размера окна
  //   window.addEventListener('resize', handleResize)
  //
  //   // Отписывайтесь от события при размонтировании компонента
  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [])

  const textRef = useRef<HTMLParagraphElement | null>(null)
  const { value, saveValue } = useAppSelector((state) => state.slice)

  useEffect(() => {
    const adjustFontSize = () => {
      const textElement = textRef.current
      if (textElement) {
        const containerWidth = (textElement.parentNode as any)?.offsetWidth
        const textWidth = textElement?.offsetWidth

        if (textWidth > containerWidth && textElement) {
          const fontSize = parseFloat(getComputedStyle(textElement).fontSize)
          const lineHeight = parseFloat(
            getComputedStyle(textElement).lineHeight
          )
          const minHeight = parseFloat(getComputedStyle(textElement).minHeight)
          const newFontSize = fontSize - 1
          const newLineHeight = lineHeight - 2
          const newMinHeight = minHeight - 1
          textElement.style.fontSize = newFontSize + 'px'
          textElement.style.lineHeight = newLineHeight + 'px'
          textElement.style.minHeight = newMinHeight + 'px'
          adjustFontSize()
        }
      }
    }
    adjustFontSize()
  }, [value])

  return (
    <div className={` ${className} flex items-end w-[400px] min-h-[120px]`}>
      <p
        ref={textRef}
        className={`ml-auto text-[80px] min-h-[120px] flex items-center w-fit mt-auto `}
      >
        {value === null ? saveValue || '0' : value || saveValue || '0'}
      </p>
    </div>
  )
}

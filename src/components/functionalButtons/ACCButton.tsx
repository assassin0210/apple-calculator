import { Button } from '@/components/Button'
import { useAppSelector } from '@/hooks/hooks'
import { useActions } from '@/hooks/useActions'
import { isActiveCancelSelector } from '@/store/selectors'

export const ACCButton = () => {
  const action = useActions()

  const isActive = useAppSelector(isActiveCancelSelector)
  return (
    <Button onClick={action} buttonType={'gray'}>
      {isActive ? 'c' : 'ac'}
    </Button>
  )
}

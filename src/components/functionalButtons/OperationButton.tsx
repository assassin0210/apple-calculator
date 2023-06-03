import { Button } from '@/components/Button'
import { useAppSelector } from '@/hooks/hooks'
import { useActions } from '@/hooks/useActions'
import { isOperationActive } from '@/store/selectors'

export const OperationButton = ({ operation }: { operation: string }) => {
  const action = useActions()
  const isActive = useAppSelector((state) =>
    isOperationActive(state, operation)
  )

  return (
    <Button isActive={isActive} onClick={action} buttonType={'orange'}>
      {operation}
    </Button>
  )
}

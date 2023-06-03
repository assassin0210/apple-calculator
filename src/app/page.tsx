'use client'
import { Button } from '@/components/Button'
import { ACCButton } from '@/components/functionalButtons/ACCButton'
import { OperationButton } from '@/components/functionalButtons/OperationButton'
import { ResultValue } from '@/components/ResultValue'
import { useAppSelector } from '@/hooks/hooks'
import { useActions } from '@/hooks/useActions'

export default function Home() {
  const action = useActions()
  const state = useAppSelector((state) => state.slice)
  console.log(state)
  return (
    <main className="container w-[500px]">
      <div
        id={'content-wrapper'}
        className={
          'grid  grid-cols-[auto_auto_auto_auto] w-fit  gap-3.5 overflow-hidden max-w-[400px]'
        }
      >
        <ResultValue className={'col-span-4'} />
        <ACCButton />
        <Button onClick={action} buttonType={'gray'}>
          +/-
        </Button>
        <OperationButton operation={'%'} />
        <OperationButton operation={'/'} />
        <Button onKeyDown={(e) => e} onClick={action} buttonType={'darkGray'}>
          7
        </Button>
        <Button onClick={action} buttonType={'darkGray'}>
          8
        </Button>
        <Button onClick={action} buttonType={'darkGray'}>
          9
        </Button>

        <OperationButton operation={'*'} />

        <Button onClick={action} buttonType={'darkGray'}>
          4
        </Button>
        <Button onClick={action} buttonType={'darkGray'}>
          5
        </Button>
        <Button onClick={action} buttonType={'darkGray'}>
          6
        </Button>
        <OperationButton operation={'-'} />
        <Button onClick={action} buttonType={'darkGray'}>
          1
        </Button>
        <Button onClick={action} buttonType={'darkGray'}>
          2
        </Button>
        <Button onClick={action} buttonType={'darkGray'}>
          3
        </Button>
        <OperationButton operation={'+'} />

        <Button
          onClick={action}
          buttonType={'darkGray'}
          className={'col-span-2 w-full'}
        >
          0
        </Button>
        <Button onClick={action} buttonType={'darkGray'}>
          ,
        </Button>
        <Button onClick={action} buttonType={'orange'}>
          =
        </Button>
      </div>
    </main>
  )
}

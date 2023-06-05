'use client'
import { Button } from '@/components/Button'
import { ACCButton } from '@/components/functionalButtons/ACCButton'
import { OperationButton } from '@/components/functionalButtons/OperationButton'
import { ResultValue } from '@/components/ResultValue'
import { useActions } from '@/hooks/useActions'

export default function Home() {
  const onClick = useActions()

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
        <Button onClick={onClick} buttonType={'gray'}>
          +/-
        </Button>
        <OperationButton operation={'%'} />
        <OperationButton operation={'/'} />
        <Button onClick={onClick} buttonType={'darkGray'}>
          7
        </Button>
        <Button onClick={onClick} buttonType={'darkGray'}>
          8
        </Button>
        <Button onClick={onClick} buttonType={'darkGray'}>
          9
        </Button>

        <OperationButton operation={'*'} />

        <Button onClick={onClick} buttonType={'darkGray'}>
          4
        </Button>
        <Button onClick={onClick} buttonType={'darkGray'}>
          5
        </Button>
        <Button onClick={onClick} buttonType={'darkGray'}>
          6
        </Button>
        <OperationButton operation={'-'} />
        <Button onClick={onClick} buttonType={'darkGray'}>
          1
        </Button>
        <Button onClick={onClick} buttonType={'darkGray'}>
          2
        </Button>
        <Button onClick={onClick} buttonType={'darkGray'}>
          3
        </Button>
        <OperationButton operation={'+'} />

        <Button
          onClick={onClick}
          buttonType={'darkGray'}
          className={'col-span-2 w-full'}
        >
          0
        </Button>
        <Button onClick={onClick} buttonType={'darkGray'}>
          .
        </Button>
        <Button onClick={onClick} buttonType={'orange'}>
          =
        </Button>
      </div>
    </main>
  )
}

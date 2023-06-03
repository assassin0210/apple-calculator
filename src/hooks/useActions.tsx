import React, { useCallback, useEffect, useMemo } from 'react'

import { useAppDispatch } from '@/hooks/hooks'
import {
  onChangeValue,
  onWrap,
  setOperation,
  setResult,
  setState,
} from '@/store/slice'

export const useActions = () => {
  const dispatch = useAppDispatch()

  const onClick = useCallback(
    (v: TSymbols) => {
      dispatch(onChangeValue(v))
    },
    [dispatch]
  )

  const map = useMemo(
    () =>
      new Map([
        [
          'c',
          () => {
            console.log('click')
            dispatch(setState({ value: null, isActiveACC: false }))
          },
        ],
        [
          'ac',
          () => {
            console.log('click')
            dispatch(
              setState({ value: null, operationSymbol: null, saveValue: null })
            )
          },
        ],
        ['+/-', () => dispatch(onWrap())],
        ['%', () => null],
        [
          '/',
          (operationSymbol: TSymbols) =>
            dispatch(setOperation(operationSymbol)),
        ],
        [
          '*',
          (operationSymbol: TSymbols) =>
            dispatch(setOperation(operationSymbol)),
        ],
        [
          '-',
          (operationSymbol: TSymbols) =>
            dispatch(setOperation(operationSymbol)),
        ],
        [
          '+',
          (operationSymbol: TSymbols) =>
            dispatch(setOperation(operationSymbol)),
        ],
        ['=', () => dispatch(setResult())],
        [',', () => null],
        ['0', onClick],
        ['1', onClick],
        ['2', onClick],
        ['3', onClick],
        ['4', onClick],
        ['5', onClick],
        ['6', onClick],
        ['7', onClick],
        ['8', onClick],
        ['9', onClick],
      ]),
    [dispatch, onClick]
  )

  useEffect(() => {
    const listner = (e: KeyboardEvent) => {
      map.has(e.key) && map.get(e.key)?.(e.key as TSymbols)
    }

    document.body.addEventListener('keydown', (e) => listner(e))

    return document.body.removeEventListener('keydown', (e) => listner(e))
  }, [map])

  return useCallback(
    (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent> & {
        target: { innerText: TSymbols }
      }
    ) => {
      const symbol = e.target.innerText.toLowerCase()
      map.get(symbol)?.(symbol as TSymbols)
    },
    [map]
  )
}

export type TSymbols =
  | 'c'
  | 'ac'
  | '+/-'
  | '%'
  | '/'
  | '*'
  | '-'
  | '+'
  | '='
  | ','
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'

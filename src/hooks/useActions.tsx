import React, { useCallback, useMemo } from 'react'

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

  const map = useMemo(
    () =>
      new Map([
        [
          'c',
          (_: TSymbols) => {
            dispatch(setState({ value: null, isActiveACC: false }))
          },
        ],
        [
          'ac',
          (_: TSymbols) => {
            dispatch(
              setState({ value: null, operationSymbol: null, saveValue: null })
            )
          },
        ],
        ['+/-', (_: TSymbols) => dispatch(onWrap())],
        ['%', (_: TSymbols) => null],
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
        ['=', (_: TSymbols) => dispatch(setResult())],
        ['.', (v: TSymbols) => dispatch(onChangeValue(v))],
        ['0', (v: TSymbols) => dispatch(onChangeValue(v))],
        ['1', (v: TSymbols) => dispatch(onChangeValue(v))],
        ['2', (v: TSymbols) => dispatch(onChangeValue(v))],
        ['3', (v: TSymbols) => dispatch(onChangeValue(v))],
        ['4', (v: TSymbols) => dispatch(onChangeValue(v))],
        ['5', (v: TSymbols) => dispatch(onChangeValue(v))],
        ['6', (v: TSymbols) => dispatch(onChangeValue(v))],
        ['7', (v: TSymbols) => dispatch(onChangeValue(v))],
        ['8', (v: TSymbols) => dispatch(onChangeValue(v))],
        ['9', (v: TSymbols) => dispatch(onChangeValue(v))],
      ]),
    [dispatch]
  )

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
  | '.'
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

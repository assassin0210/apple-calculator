import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TSymbols } from '@/hooks/useActions'

interface IInitialState {
  value: null | string
  saveValue: null | string
  operationSymbol: null | TSymbols
  isActiveACC: boolean
}
const slice = createSlice({
  name: 'slice',
  initialState: {
    value: null,
    saveValue: null,
    operationSymbol: null,
    isActiveACC: false,
  } as IInitialState,
  reducers: {
    setState: (state, { payload }: PayloadAction<Partial<IInitialState>>) => ({
      ...state,
      ...payload,
    }),
    setOperation: (state, { payload }: PayloadAction<TSymbols>) => {
      if (
        state.saveValue === null &&
        (state.value !== null || state.value !== '0')
      ) {
        state.operationSymbol = payload
        state.saveValue = state.value
        state.value = null
      } else if (state.value && state.saveValue && state.operationSymbol) {
        state.saveValue = String(
          calculate(state.saveValue || '0', state.value, state.operationSymbol)
        )
        state.value = null
        state.operationSymbol = payload
      } else if (state.value === null && state.operationSymbol) {
        state.operationSymbol = payload
      }
    },
    onWrap: (state) => {
      if (!state.value || state.value === '0') {
        return
      } else if (Number(state.value) > 0 && state.value) {
        state.value = '-' + state.value
      } else if (Number(state.value) < 0 && state.value) {
        state.value = state.value.replaceAll('-', '')
      }
    },
    onChangeValue: (state, { payload }: PayloadAction<string>) => {
      if (state.value === null && payload === '0') {
        return
      } else if ((state.value || '0').length <= limit) {
        if (!state.isActiveACC) {
          state.isActiveACC = true
        }
        if (state.value === null || state.value === '0') {
          state.value = payload
        } else {
          state.value += payload
        }
      }
    },
    setResult: (state) => {
      if (
        state.value &&
        state.value !== '0' &&
        state.operationSymbol &&
        state.saveValue
      ) {
        state.value = String(
          calculate(state.saveValue, state.value, state.operationSymbol)
        )
        state.saveValue = null
        state.operationSymbol = null
      } else if (
        state.value === null &&
        state.saveValue &&
        state.operationSymbol
      ) {
        state.saveValue = String(
          calculate(state.saveValue, state.saveValue, state.operationSymbol)
        )
        state.operationSymbol = null
      }
    },
  },
})
export const sliceReducer = slice.reducer
export const { onChangeValue, setResult, setOperation, setState, onWrap } =
  slice.actions

export const limit = 15

const calculate = (
  firstValue: string,
  secondValue: string,
  symbol: TSymbols
) => {
  const nFirst = Number(firstValue)
  const nSecond = Number(secondValue)
  switch (symbol) {
    case '+':
      return nFirst + nSecond
    case '-':
      return nFirst - nSecond
    case '*':
      return nFirst * nSecond
    case '/':
      return nFirst / nSecond
  }
}

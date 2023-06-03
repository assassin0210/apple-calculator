import { createSelector } from 'reselect'

import { RootStateType } from '@/store/store'

const slice = (state: RootStateType) => state.slice

export const isActiveCancelSelector = createSelector(
  slice,
  ({ value, isActiveACC, saveValue, operationSymbol }) => {
    return isActiveACC
  }
)

export const isOperationActive = createSelector(
  [slice, (state, operation) => operation],
  ({ value, operationSymbol }, operation) => {
    return operation === operationSymbol && value === null
  }
)

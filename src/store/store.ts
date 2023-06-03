import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { sliceReducer } from '@/store/slice'

const reducers = { slice: sliceReducer }
export const rootReducer = combineReducers(reducers)

export const store = configureStore({ reducer: rootReducer })
export type AppDispatch = typeof store.dispatch
export type RootStateType = ReturnType<typeof rootReducer>

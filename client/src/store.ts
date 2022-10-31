import { configureStore } from '@reduxjs/toolkit'
import savingsReducer from './components/pages/savings/savingsSlice'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'

export const store = configureStore({
    reducer: { savings: savingsReducer },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

import { configureStore } from '@reduxjs/toolkit'
import savingsReducer from './components/pages/savings/savingsSlice'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { savingsApi } from './services/savingsApi'

export const store = configureStore({
    reducer: { savings: savingsReducer, [savingsApi.reducerPath]: savingsApi.reducer },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(savingsApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

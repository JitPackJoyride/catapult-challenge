import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { roundToNumberOfDecimalPlaces } from '../../../utils'

export interface SavingsState {
    initialSavings: number
    monthlyDeposit: number
    interestRate: number
}

const initialState: SavingsState = {
    initialSavings: 1000.0,
    monthlyDeposit: 100.0,
    interestRate: 5.0,
}

export const savingsSlice = createSlice({
    name: 'savings',
    initialState,
    reducers: {
        setInitialSavings: (state, action: PayloadAction<string>) => {
            // Handle edge case where user deletes all characters
            if (action.payload === '') {
                state.initialSavings = 0.0
                return
            }
            // Always round to 2 decimal places to remain consistent with the number input field
            state.initialSavings = roundToNumberOfDecimalPlaces(action.payload, 2)
        },
        setMonthlyDeposit: (state, action: PayloadAction<string>) => {
            // Handle edge case where user deletes all characters
            if (action.payload === '') {
                state.monthlyDeposit = 0.0
                return
            }
            // Always round to 2 decimal places to remain consistent with the number input field
            state.monthlyDeposit = roundToNumberOfDecimalPlaces(action.payload, 2)
        },
        setInterestRate: (state, action: PayloadAction<string>) => {
            // Handle edge case where user deletes all characters
            if (action.payload === '') {
                state.interestRate = 0.0
                return
            }
            // Always round to 1 decimal place to remain consistent with the number input field
            state.interestRate = roundToNumberOfDecimalPlaces(action.payload, 1)
        },
    },
})

export const { setInitialSavings, setMonthlyDeposit, setInterestRate } = savingsSlice.actions

export default savingsSlice.reducer

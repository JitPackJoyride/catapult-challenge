import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SavingsIntervalsResult } from '../components/pages/savings/savings'

interface SavingsRequest {
    initialSavings: number
    monthlyDeposit: number
    annualInterestRate: number
}

interface SavingsResponse {
    totalSavings: number
    savingsAtIntervals: SavingsIntervalsResult
}

const savingsApi = createApi({
    reducerPath: 'savingsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        calculateTotalSavings: builder.query<SavingsResponse, SavingsRequest>({
            query: (payload) => ({
                url: 'savings',
                method: 'POST',
                body: payload,
            }),
        }),
    }),
})

export type { SavingsResponse }
export { savingsApi }
export const { useCalculateTotalSavingsQuery } = savingsApi

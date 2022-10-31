export interface SavingsApiBody {
    initialSavings: number
    monthlyDeposit: number
    annualInterestRate: number
}

export interface SavingsAtIntervals {
    xAxis: Array<number>
    yAxis: Array<number>
}

export interface SavingsResponse {
    totalSavings: number
    savingsAtIntervals: SavingsAtIntervals
}

import { SavingsAtIntervals } from './savings'

const calculateTotalSavings = (
    totalNumberOfMonths: number,
    initialSavings: number,
    monthlyDeposit: number,
    annualInterestRate: number
): number => {
    const monthlyInterestRate = annualInterestRate / 100 / 12
    const totalSavings =
        initialSavings * Math.pow(1 + monthlyInterestRate, totalNumberOfMonths) +
        (monthlyDeposit * (Math.pow(1 + monthlyInterestRate, totalNumberOfMonths) - 1)) /
            monthlyInterestRate

    return parseFloat(totalSavings.toFixed(2))
}

const calculateSavingsAtIntervals = (
    totalNumberOfMonths: number,
    initialSavings: number,
    monthlyDeposit: number,
    annualInterestRate: number,
    interval: number
): SavingsAtIntervals => {
    const intervalsInMonths = interval * 12
    const savingsAtIntervals: SavingsAtIntervals = {
        xAxis: [],
        yAxis: [],
    }

    for (let i = 0; i <= totalNumberOfMonths; i += intervalsInMonths) {
        const totalSavings = calculateTotalSavings(
            i,
            initialSavings,
            monthlyDeposit,
            annualInterestRate
        )
        savingsAtIntervals.xAxis.push(i / 12)
        savingsAtIntervals.yAxis.push(totalSavings)
    }

    return savingsAtIntervals
}

export { calculateTotalSavings, calculateSavingsAtIntervals }

import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import SavingsPercentageInput from './SavingsPercentageInput'
import SavingsMoneyInput from './SavingsMoneyInput'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../store'
import { setAnnualInterestRate, setInitialSavings, setMonthlyDeposit } from '../../savingsSlice'

interface Props {
    label: 'Initial Savings' | 'Monthly Deposit' | 'Annual Interest Rate'
}

const SavingsInputType = ({ label }: Props) => {
    const { initialSavings, monthlyDeposit, annualInterestRate } = useSelector(
        (state: RootState) => state.savings
    )

    switch (label) {
        case 'Initial Savings':
            return (
                <SavingsMoneyInput
                    reduxAction={setInitialSavings}
                    defaultValue={initialSavings.toFixed(2)}
                />
            )
        case 'Monthly Deposit':
            return (
                <SavingsMoneyInput
                    reduxAction={setMonthlyDeposit}
                    defaultValue={monthlyDeposit.toFixed(2)}
                    step={100}
                />
            )
        case 'Annual Interest Rate':
            return (
                <SavingsPercentageInput
                    reduxAction={setAnnualInterestRate}
                    defaultValue={annualInterestRate.toFixed(1)}
                    min={0.1}
                    max={100}
                />
            )
    }
}

const SavingsInputItem = ({ label }: Props) => {
    return (
        <Flex direction={'column'}>
            <Text fontWeight={'semibold'} color={'white'}>
                {label}
            </Text>
            <SavingsInputType label={label} />
        </Flex>
    )
}

export default SavingsInputItem

import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import SavingsPercentageInput from './SavingsPercentageInput'
import SavingsMoneyInput from './SavingsMoneyInput'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../store'
import { setInitialSavings, setInterestRate, setMonthlyDeposit } from '../../savingsSlice'

interface Props {
    label: 'Initial Savings' | 'Monthly Deposit' | 'Interest Rate'
}

const SavingsInputType = ({ label }: Props) => {
    const { initialSavings, monthlyDeposit, interestRate } = useSelector(
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
        case 'Interest Rate':
            return (
                <SavingsPercentageInput
                    reduxAction={setInterestRate}
                    defaultValue={interestRate.toFixed(1)}
                    min={0}
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

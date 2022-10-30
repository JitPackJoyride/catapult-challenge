import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import SavingsPercentageInput from './SavingsPercentageInput'
import SavingsMoneyInput from './SavingsMoneyInput'

interface Props {
    label: 'Initial Savings' | 'Monthly Deposit' | 'Interest Rate'
}

const SavingsInputType = ({ label }: Props) => {
    switch (label) {
        case 'Initial Savings':
            return <SavingsMoneyInput defaultValue={'1000.00'} />
        case 'Monthly Deposit':
            return <SavingsMoneyInput defaultValue={'100.00'} step={100} />
        case 'Interest Rate':
            return <SavingsPercentageInput defaultValue={'1.0'} min={0} max={100} />
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

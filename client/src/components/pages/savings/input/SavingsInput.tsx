import React from 'react'
import { StackProps, VStack } from '@chakra-ui/react'
import SavingsInputItem from './components/SavingsInputItem'

const SavingsInput = ({ ...stackProps }: StackProps) => {
    return (
        <VStack
            {...stackProps}
            spacing={8}
            p={8}
            borderRadius={'xl'}
            bg={'blue.600'}
            align={'flex-start'}
        >
            <SavingsInputItem label={'Initial Savings'} />
            <SavingsInputItem label={'Monthly Deposit'} />
            <SavingsInputItem label={'Interest Rate'} />
        </VStack>
    )
}

export default SavingsInput

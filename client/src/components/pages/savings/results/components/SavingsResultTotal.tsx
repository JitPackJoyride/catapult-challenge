import React from 'react'
import { Box, Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'
import '@fontsource/bowlby-one-sc'

const SavingsResultTotal = () => {
    return (
        <Box w={'full'} p={4} textAlign={'center'}>
            <Stat>
                <StatLabel fontFamily={`'Bowlby One SC', sans-serif`} fontSize={'2xl'}>
                    Total Savings
                </StatLabel>
                <StatNumber fontSize={'2xl'}>£{'0.00'}</StatNumber>
                <StatHelpText fontSize={'md'} mb={0}>
                    After {50} years
                </StatHelpText>
            </Stat>
        </Box>
    )
}

export default SavingsResultTotal

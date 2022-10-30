import React from 'react'
import SavingsResultChart from './results/SavingsResultChart'
import { Container } from '@chakra-ui/react'

// Note: This is just for example purposes
// should be replaced with real data from the server
const tempData = {
    xAxis: [0, 1, 2, 3, 4, 5],
    yAxis: [100, 150, 180, 210, 240, 350],
}

const Savings = () => {
    return (
        <Container>
            <SavingsResultChart savingsResult={tempData} />
        </Container>
    )
}

export default Savings

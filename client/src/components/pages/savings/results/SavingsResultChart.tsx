import LineChart, { LineChartProps } from '../../../LineChart'
import { Container } from '@chakra-ui/react'
import React from 'react'

interface Props {
    savingsResult: {
        xAxis: LineChartProps['xAxisData']
        yAxis: LineChartProps['yAxisData']
    }
}

const SavingsResultChart = ({ savingsResult }: Props) => {
    return (
        <Container>
            <LineChart
                title="Savings Over time"
                xAxisData={savingsResult.xAxis}
                yAxisData={savingsResult.yAxis}
                xLabel="Years"
                yLabel="Amount"
            />
        </Container>
    )
}

export default SavingsResultChart

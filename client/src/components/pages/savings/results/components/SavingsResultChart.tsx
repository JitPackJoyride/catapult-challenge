import LineChart, { LineChartProps } from '../../../../LineChart'
import { Box } from '@chakra-ui/react'
import React from 'react'

interface Props {
    savingsResult: {
        xAxis: LineChartProps['xAxisData']
        yAxis: LineChartProps['yAxisData']
    }
}

const SavingsResultChart = ({ savingsResult }: Props) => {
    return (
        // Note: This must be relatively positioned to allow the chart to resize responsively
        // For more details refer to: https://www.chartjs.org/docs/latest/configuration/responsive.html#important-note
        <Box position={'relative'} w={{ base: 'sm', sm: 'md', md: 'xl', lg: '2xl', xl: '4xl' }}>
            <LineChart
                title="Savings Over time"
                xAxisData={savingsResult.xAxis}
                yAxisData={savingsResult.yAxis}
                xLabel="Years"
                yLabel="Amount"
            />
        </Box>
    )
}

export default SavingsResultChart

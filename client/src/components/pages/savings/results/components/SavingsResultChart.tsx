import LineChart from '../../../../LineChart'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { SavingsIntervalsResult } from '../../savings'

interface Props {
    savingsIntervalsResult?: SavingsIntervalsResult
}

const SavingsResultChart = ({ savingsIntervalsResult }: Props) => {
    if (savingsIntervalsResult?.xAxis.length === 0 || savingsIntervalsResult?.yAxis[0] === null) {
        return (
            <Box
                w={{ base: 'sm', sm: 'md', md: 'xl', lg: '2xl', xl: '4xl' }}
                p={4}
                textAlign={'center'}
            >
                {/* TODO: Use an illustration for this empty state */}
                <p>No data to display</p>
            </Box>
        )
    }

    return (
        // Note: This must be relatively positioned to allow the chart to resize responsively
        // For more details refer to: https://www.chartjs.org/docs/latest/configuration/responsive.html#important-note
        <Box position={'relative'} w={{ base: 'sm', sm: 'md', md: 'xl', lg: '2xl', xl: '4xl' }}>
            <LineChart
                title="Savings Over time"
                xAxisData={savingsIntervalsResult!.xAxis}
                yAxisData={savingsIntervalsResult!.yAxis}
                xLabel="Years"
                yLabel="Amount"
            />
        </Box>
    )
}

export default SavingsResultChart

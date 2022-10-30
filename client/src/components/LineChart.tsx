import React from 'react'
import { Chart, ChartOptions, registerables } from 'chart.js'
import { Line } from 'react-chartjs-2'

Chart.register(...registerables)

type LineChartProps = {
    xAxisData: number[]
    yAxisData: number[]
    title?: string
    xLabel?: string
    yLabel?: string
}

const LineChart = ({ xAxisData, yAxisData, title, xLabel, yLabel }: LineChartProps) => {
    const options: ChartOptions<'line'> = {
        plugins: {
            title: {
                display: !!title,
                text: title,
            },
            legend: {
                display: false,
            },
        },
        scales: {
            gridLines: { display: false },
            y: {
                title: { display: !!yLabel, text: yLabel },
                grid: { display: false },
            },
            x: {
                title: { display: !!xLabel, text: xLabel },
                ticks: { display: true },
                grid: { display: false },
            },
        },
    }

    return (
        <Line
            data={{
                labels: xAxisData,
                datasets: [
                    {
                        data: yAxisData,
                    },
                ],
            }}
            options={options}
        />
    )
}

export type { LineChartProps }
export default LineChart

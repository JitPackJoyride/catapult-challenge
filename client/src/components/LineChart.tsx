import React from 'react'
import { Chart, ChartOptions, registerables } from 'chart.js'
import { Line } from 'react-chartjs-2'
import '@fontsource/roboto'

Chart.register(...registerables)

interface LineChartProps {
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
                font: {
                    family: "'Roboto', sans-serif",
                    size: 18,
                },
            },
            legend: {
                display: false,
            },
            tooltip: {
                titleFont: {
                    family: "'Inter', sans-serif",
                    size: 16,
                },
                bodyFont: {
                    family: "'Inter', sans-serif",
                    size: 16,
                },
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

import {
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
} from '@chakra-ui/react'
import React from 'react'

interface Props {
    defaultValue: string
    min: number
    max: number
}

const SavingsPercentageInput = ({ defaultValue, min, max }: Props) => {
    const format = (val: string) => `${val}%`
    const parse = (val: string) => val.replace(/%$/, '')

    const [value, setValue] = React.useState(`${defaultValue}`)

    return (
        <NumberInput
            size={'sm'}
            bg={'white'}
            defaultValue={defaultValue}
            min={min}
            max={max}
            precision={1}
            step={0.1}
            allowMouseWheel
            onChange={(valueString) => setValue(parse(valueString))}
            value={format(value)}
        >
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
    )
}

export default SavingsPercentageInput

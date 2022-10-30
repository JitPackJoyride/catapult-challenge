import React from 'react'
import {
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
} from '@chakra-ui/react'

interface Props {
    defaultValue: string
    step?: number
    precision?: number
}

const SavingsMoneyInput = ({ defaultValue }: Props) => {
    const format = (val: string): string => `£${val}`
    const parse = (val: string): string => val.replace(/^£/, '')

    const [value, setValue] = React.useState(`${defaultValue}`)

    return (
        <NumberInput
            size={'sm'}
            bg={'white'}
            defaultValue={defaultValue}
            precision={2}
            step={1000}
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

export default SavingsMoneyInput

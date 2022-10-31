import {
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
} from '@chakra-ui/react'
import React from 'react'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useAppDispatch } from '../../../../../store'

interface Props {
    reduxAction: ActionCreatorWithPayload<string, string>
    defaultValue: string
    min: number
    max: number
}

const SavingsPercentageInput = ({ reduxAction, defaultValue, min, max }: Props) => {
    const formatAsPercent = (val: string) => `${val}%`
    const parseAsPercent = (val: string) => {
        // Handle edge case where user deletes all characters
        if (val === '') return '0.0'
        return val.replace(/%/, '')
    }

    const [value, setValue] = React.useState(`${defaultValue}`)
    const dispatch = useAppDispatch()

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
            onChange={(valueString) => {
                dispatch(reduxAction(parseAsPercent(valueString)))
                setValue(parseAsPercent(valueString))
            }}
            value={formatAsPercent(value)}
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

import React from 'react'
import {
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
} from '@chakra-ui/react'
import { useAppDispatch } from '../../../../../store'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

interface Props {
    reduxAction: ActionCreatorWithPayload<string, string>
    defaultValue: string
    step?: number
    precision?: number
}

const SavingsMoneyInput = ({ reduxAction, defaultValue }: Props) => {
    const formatAsCurrency = (val: string): string => `£${val}`
    const parseFromCurrency = (val: string): string => {
        // Handle edge case where user deletes all characters
        if (val === '') return '0.00'
        return val.replace(/£/, '')
    }

    const [valueString, setValueString] = React.useState<string>(`${defaultValue}`)
    const dispatch = useAppDispatch()

    return (
        <NumberInput
            size={'sm'}
            bg={'white'}
            defaultValue={defaultValue}
            precision={2}
            step={1000}
            allowMouseWheel
            onChange={(valueString) => {
                dispatch(reduxAction(parseFromCurrency(valueString)))
                setValueString(parseFromCurrency(valueString))
            }}
            value={formatAsCurrency(valueString)}
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

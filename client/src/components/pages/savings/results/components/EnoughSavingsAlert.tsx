import { Alert, AlertDescription, AlertIcon, Container } from '@chakra-ui/react'
import React from 'react'

interface Props {
    totalSavings?: number
}

const EnoughSavingsAlert = ({ totalSavings }: Props) => {
    if (!totalSavings) return null
    return (
        <Container maxW={'fit-content'}>
            {/* Recommended retirement savings are found from:
                https://frazerjames.co.uk/how-much-do-i-need-to-retire-at-60/ */}
            {totalSavings < 750000 && (
                <Alert status="warning" variant={'subtle'}>
                    <AlertIcon />
                    <AlertDescription>
                        You should try to save more money for retirement. The recommended amount is
                        at least £750,000.
                    </AlertDescription>
                </Alert>
            )}
            {totalSavings >= 750000 && (
                <Alert status="success" variant={'subtle'}>
                    <AlertIcon />
                    <AlertDescription>
                        This will be enough money for retirement. The recommended amount is at least
                        £750,000.
                    </AlertDescription>
                </Alert>
            )}
        </Container>
    )
}

export default EnoughSavingsAlert

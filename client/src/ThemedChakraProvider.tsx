import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const theme = extendTheme({
    fonts: {
        heading: `'Bowlby One SC', sans-serif`,
        body: `'Inter', sans-serif`,
    },
})

function ThemedChakraProvider({ children }: Props) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default ThemedChakraProvider

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import '@fontsource/roboto'
import '@fontsource/inter/variable.css'

interface Props {
    children: React.ReactNode
}

const theme = extendTheme({
    fonts: {
        heading: `'Roboto', sans-serif`,
        body: `'InterVariable', sans-serif`,
    },
})

function ThemedChakraProvider({ children }: Props) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default ThemedChakraProvider

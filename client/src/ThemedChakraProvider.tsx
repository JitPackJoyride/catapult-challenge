import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import '@fontsource/bowlby-one-sc'
import '@fontsource/inter/variable.css'

interface Props {
    children: React.ReactNode
}

const theme = extendTheme({
    fonts: {
        heading: `'Bowlby One SC', sans-serif`,
        body: `'InterVariable', sans-serif`,
    },
    colors: {
        white: '#f5f5f5',
    },
})

function ThemedChakraProvider({ children }: Props) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default ThemedChakraProvider

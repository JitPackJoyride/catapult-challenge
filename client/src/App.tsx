import React from 'react'
import DefaultLayout from './components/layouts/Default'
import ThemedChakraProvider from './ThemedChakraProvider'
import Savings from './components/pages/savings/Savings'

function App() {
    return (
        <ThemedChakraProvider>
            <DefaultLayout>
                <Savings />
            </DefaultLayout>
        </ThemedChakraProvider>
    )
}

export default App

import React from 'react'
import DefaultLayout from './components/layouts/DefaultLayout'
import ThemedChakraProvider from './ThemedChakraProvider'
import SavingsPage from './components/pages/savings/SavingsPage'

function App() {
    return (
        <ThemedChakraProvider>
            <DefaultLayout>
                <SavingsPage />
            </DefaultLayout>
        </ThemedChakraProvider>
    )
}

export default App

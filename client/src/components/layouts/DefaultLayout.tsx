import React from 'react'
import { Flex } from '@chakra-ui/react'
import NavHeader from './components/NavHeader'

type LayoutProps = {
    children: React.ReactNode
}

const DefaultLayout = ({ children }: LayoutProps) => (
    <Flex minH="100vh" h="100%" direction="column" bg={'gray.200'}>
        <NavHeader />
        <>{children}</>
    </Flex>
)

export default DefaultLayout

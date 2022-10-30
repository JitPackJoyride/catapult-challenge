import React from 'react'
import SavingsInput from './input/SavingsInput'
import { Grid, GridItem, Heading, VStack } from '@chakra-ui/react'
import SavingsResultChart from './results/components/SavingsResultChart'
import SavingsResultTotal from './results/components/SavingsResultTotal'

// Note: This is just for example purposes
// should be replaced with real data from the server
const tempData = {
    xAxis: [0, 10, 20, 30, 40, 50],
    yAxis: [100, 150, 180, 210, 240, 350],
}

const SavingsPage = () => {
    return (
        <VStack spacing={10} w={'full'} maxW={'8xl'} mx={'auto'} px={4} py={10}>
            <Heading as={'h1'} textAlign={'center'}>
                Calculate total savings
            </Heading>
            <Grid
                justifyItems={{ base: 'center', lg: 'stretch' }}
                alignItems={'center'}
                templateColumns={{ base: '1fr', lg: 'auto 1fr' }}
                templateRows={{ base: 'auto auto 1fr', lg: '1fr auto' }}
                gap={{ base: 2, lg: 8 }}
            >
                <GridItem colSpan={1}>
                    <SavingsInput />
                </GridItem>
                <GridItem rowSpan={{ base: 1, lg: 2 }} colSpan={1}>
                    <SavingsResultChart savingsResult={tempData} />
                </GridItem>
                <GridItem>
                    <SavingsResultTotal />
                </GridItem>
            </Grid>
        </VStack>
    )
}

export default SavingsPage

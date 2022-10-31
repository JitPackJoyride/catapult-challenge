import React, { useEffect } from 'react'
import SavingsInput from './input/SavingsInput'
import {
    Alert,
    AlertDescription,
    AlertIcon,
    Center,
    CircularProgress,
    Container,
    Grid,
    GridItem,
    Heading,
    useToast,
    VStack,
} from '@chakra-ui/react'
import SavingsResultChart from './results/components/SavingsResultChart'
import SavingsResultTotal from './results/components/SavingsResultTotal'
import { useCalculateTotalSavingsQuery } from '../../../services/savingsApi'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

const SavingsPage = () => {
    const toast = useToast()

    const { initialSavings, monthlyDeposit, annualInterestRate } = useSelector(
        (state: RootState) => state.savings
    )
    // Using a query hook automatically fetches data and returns query values
    const { data, error, isLoading } = useCalculateTotalSavingsQuery({
        initialSavings,
        monthlyDeposit,
        annualInterestRate,
    })

    useEffect(() => {
        if (error) {
            // @ts-ignore
            for (const apiError of error.data.errors) {
                let id = apiError.field
                if (!toast.isActive(id)) {
                    toast({
                        id,
                        title: apiError.message,
                        status: 'error',
                        duration: 2000,
                        isClosable: true,
                    })
                }
            }
        }
    }, [error])

    if (isLoading)
        return (
            <Center flex={1}>
                <CircularProgress isIndeterminate color="blue.300" />
            </Center>
        )

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
                    <SavingsResultChart
                        savingsIntervalsResult={
                            error ? { xAxis: [], yAxis: [] } : data!.savingsAtIntervals
                        }
                    />
                </GridItem>
                <GridItem>
                    <SavingsResultTotal totalSavings={error ? 0 : data!.totalSavings} />
                </GridItem>
            </Grid>
            {(error || data?.savingsAtIntervals.xAxis.length === 0) && (
                <Container>
                    <Alert status="error">
                        <AlertIcon />
                        <AlertDescription>Fix your data to view the results</AlertDescription>
                    </Alert>
                </Container>
            )}
        </VStack>
    )
}

export default SavingsPage

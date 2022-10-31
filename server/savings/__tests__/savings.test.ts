import request from 'supertest'
import { app } from '../../app'

describe('Successfully calculate total savings and get savings at different intervals', () => {
    it('should return a 200 status code and the total savings and savings at intervals', async () => {
        const { body } = await request(app)
            .post('/savings')
            .send({
                initialSavings: 1000,
                monthlyDeposit: 100,
                annualInterestRate: 5,
            })
            .expect(200)

        // expect the total savings to be 278984.58
        expect(body.totalSavings).toMatchInlineSnapshot(`278984.58`)
        expect(body.totalSavings).toEqual(
            body.savingsAtIntervals['yAxis'][body.savingsAtIntervals['yAxis'].length - 1]
        )

        // the number of elements in the xAxis array should be equal to the number of elements in the yAxis array
        expect(body.savingsAtIntervals['xAxis'].length).toEqual(
            body.savingsAtIntervals['yAxis'].length
        )
        expect(body.savingsAtIntervals['xAxis']).toEqual([0, 10, 20, 30, 40, 50])
    })

    it('should be able to handle different interval period', async () => {
        const { body } = await request(app)
            .post('/savings')
            .query({ interval: 5 })
            .send({
                initialSavings: 1000,
                monthlyDeposit: 100,
                annualInterestRate: 5,
            })
            .expect(200)

        // expect the total savings to be 278984.58
        expect(body.totalSavings).toMatchInlineSnapshot(`278984.58`)
        expect(body.totalSavings).toEqual(
            body.savingsAtIntervals['yAxis'][body.savingsAtIntervals['yAxis'].length - 1]
        )

        // the number of elements in the xAxis array should be equal to the number of elements in the yAxis array
        expect(body.savingsAtIntervals['xAxis'].length).toEqual(
            body.savingsAtIntervals['yAxis'].length
        )
        expect(body.savingsAtIntervals['xAxis']).toEqual([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50])
    })

    it('should be able to handle different number of years', async () => {
        const { body } = await request(app)
            .post('/savings')
            .query({ numberOfYears: 20 })
            .send({
                initialSavings: 1000,
                monthlyDeposit: 100,
                annualInterestRate: 5,
            })
            .expect(200)

        // expect the total savings to be 43816.01
        expect(body.totalSavings).toMatchInlineSnapshot(`43816.01`)
        expect(body.totalSavings).toEqual(
            body.savingsAtIntervals['yAxis'][body.savingsAtIntervals['yAxis'].length - 1]
        )

        // the number of elements in the xAxis array should be equal to the number of elements in the yAxis array
        expect(body.savingsAtIntervals['xAxis'].length).toEqual(
            body.savingsAtIntervals['yAxis'].length
        )
        expect(body.savingsAtIntervals['xAxis']).toEqual([0, 10, 20])
    })
})

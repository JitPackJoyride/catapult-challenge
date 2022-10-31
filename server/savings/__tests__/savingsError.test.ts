import request from 'supertest'
import { app } from '../../app'

describe('Errors when calling the savings endpoint', () => {
    it('should return a 400 error if the initialSavings is not a number', async () => {
        const { body } = await request(app)
            .post('/savings')
            .send({
                initialSavings: 'not a number',
                monthlyDeposit: 100,
                annualInterestRate: 5,
            })
            .expect(400)

        expect(body.errors[0].message).toMatchInlineSnapshot(
            `"Initial savings must be a number and greater than or equal to 0"`
        )
    })

    it('should return a 400 error if the initialSavings is less than 0', async () => {
        const { body } = await request(app)
            .post('/savings')
            .send({
                initialSavings: -1,
                monthlyDeposit: 100,
                annualInterestRate: 5,
            })
            .expect(400)

        expect(body.errors[0].message).toMatchInlineSnapshot(
            `"Initial savings must be a number and greater than or equal to 0"`
        )
    })

    it('should return a 400 error if the monthlyDeposit is not a number', async () => {
        const { body } = await request(app)
            .post('/savings')
            .send({
                initialSavings: 1000,
                monthlyDeposit: 'not a number',
                annualInterestRate: 5,
            })
            .expect(400)

        expect(body.errors[0].message).toMatchInlineSnapshot(
            `"Monthly deposit must be a number and greater than or equal to 0"`
        )
    })

    it('should return a 400 error if the monthlyDeposit is less than 0', async () => {
        const { body } = await request(app)
            .post('/savings')
            .send({
                initialSavings: 1000,
                monthlyDeposit: -1,
                annualInterestRate: 5,
            })
            .expect(400)

        expect(body.errors[0].message).toMatchInlineSnapshot(
            `"Monthly deposit must be a number and greater than or equal to 0"`
        )
    })

    it('should return a 400 error if the annualInterestRate is not a number', async () => {
        const { body } = await request(app)
            .post('/savings')
            .send({
                initialSavings: 1000,
                monthlyDeposit: 100,
                annualInterestRate: 'not a number',
            })
            .expect(400)

        expect(body.errors[0].message).toMatchInlineSnapshot(
            `"Annual Interest rate must be a number between 0 and 100"`
        )
    })

    it('should return a 400 error if the annualInterestRate is less than 0', async () => {
        const { body } = await request(app)
            .post('/savings')
            .send({
                initialSavings: 1000,
                monthlyDeposit: 100,
                annualInterestRate: -1,
            })
            .expect(400)

        expect(body.errors[0].message).toMatchInlineSnapshot(
            `"Annual Interest rate must be a number between 0 and 100"`
        )
    })
})

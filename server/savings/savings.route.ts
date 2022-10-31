import express, { Request, Response } from 'express'
import { body, query } from 'express-validator'
import { validateRequestMiddleware } from '../middlewares/validateRequest.middleware'
import { calculateSavingsAtIntervals, calculateTotalSavings } from './savings.service'
import { SavingsApiBody, SavingsResponse } from './savings'

const router = express.Router()

router.post(
    '/savings',
    [
        query('interval')
            .isInt({ min: 1, max: 50 })
            .optional()
            .withMessage('Interval must be a number between 1 and 20'),
        query('numberOfYears')
            .isInt({ min: 1, max: 80 })
            .optional()
            .withMessage('Number of years must be a number between 1 and 80'),
        body('initialSavings')
            .exists()
            .isFloat({ min: 0 })
            .withMessage('Initial savings must be a number and greater than or equal to 0'),
        body('monthlyDeposit')
            .exists()
            .isFloat({ min: 0 })
            .withMessage('Monthly deposit must be a number and greater than or equal to 0'),
        body('annualInterestRate')
            .exists()
            .isFloat({ min: 0.1, max: 100 })
            .withMessage('Annual Interest rate must be a number between 0 and 100'),
    ],
    validateRequestMiddleware,
    (req: Request<{}, {}, SavingsApiBody>, res: Response) => {
        const { initialSavings, monthlyDeposit, annualInterestRate } = req.body
        const interval = req.query.interval ? parseInt(req.query.interval as string) : 10
        const totalNumberOfYears = req.query.numberOfYears
            ? parseInt(req.query.numberOfYears as string)
            : 50

        const totalSavings = calculateTotalSavings(
            totalNumberOfYears * 12,
            initialSavings,
            monthlyDeposit,
            annualInterestRate
        )

        const savingsAtIntervals = calculateSavingsAtIntervals(
            totalNumberOfYears * 12,
            initialSavings,
            monthlyDeposit,
            annualInterestRate,
            interval
        )

        const savingsResponse: SavingsResponse = {
            totalSavings,
            savingsAtIntervals,
        }

        res.send(savingsResponse)
    }
)

export { router as savingsRouter }

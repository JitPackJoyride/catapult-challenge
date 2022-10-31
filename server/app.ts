import express, { json } from 'express'
import { savingsRouter } from './savings/savings.route'
import { errorHandlerMiddleware } from './middlewares/errorHandler.middleware'
import { NotFoundError } from './errors/notFound.error'

const app = express()

app.set('port', process.env.PORT || 3001)

// Express will handle JSON body parsing
app.use(json())

// The savings router handles requests to the /savings endpoint
app.use(savingsRouter)

// Catch-all route handler for any requests to an unknown route
app.all('*', (req, res, next) => {
    throw new NotFoundError('Route not found')
})

// Express will use this middleware to handle any errors that occur
app.use(errorHandlerMiddleware)

export { app }

import express, { json } from 'express'
import { savingsRouter } from './savings/savings.route'
import { errorHandlerMiddleware } from './middlewares/errorHandler.middleware'

const app = express()

app.set('port', process.env.PORT || 3001)

// Express will handle JSON body parsing
app.use(json())

// The savings router handles requests to the /savings endpoint
app.use(savingsRouter)

// Catch-all route handler for any requests to an unknown route
app.get('*', async (req, res, next) => {
    res.status(404).send('Route not found')
})

app.use(errorHandlerMiddleware)

export { app }

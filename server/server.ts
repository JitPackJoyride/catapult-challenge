import express from 'express'
import { app } from './app'

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'))
}

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`) // eslint-disable-line no-console
})

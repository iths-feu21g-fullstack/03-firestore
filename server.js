// Importera npm-paket och moduler
// Allmänna inställningar
import express from 'express'
import cors from 'cors'
// import path from 'path'
const app = express()
const PORT = process.env.PORT || 1178
import animals from './routes/animals.js'
// const staticFolder = path.join(__dirname, 'public')


// Middleware
// CORS öppnar vårt projekt så det kan användas från andra domäner
app.use( cors() )

// Parse request body
app.use( express.urlencoded({ extended: true }) )

// Logger - skriv ut information om inkommande request
app.use( (req, res, next) => {
	console.log(`Logger: ${req.method}  ${req.url} `, req.body)
	next()
})

// Serve static files in this folder
// app.use( express.static(staticFolder) )



// Routes
app.use('/animals', animals)


// Starta server
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}.`)
})
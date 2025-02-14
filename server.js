import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoute.js'

// configure env
dotenv.config()

// database config
connectDB()

// rest object
const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use('/api/v1/auth', authRoutes)

// rest api
app.get('/', (req, res) =>{
    res.send({ message: 'Welcome to E-Commerce App'})
})

// PORT
const PORT = process.env.PORT || 8080

// run listen
app.listen(PORT, () => console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white))

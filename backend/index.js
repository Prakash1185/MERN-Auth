import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import connectDB from './db/db.js';
import authRouter from "./routes/auth_routes.js"


dotenv.config()

const app = express()
const port = process.env.PORT || 5000

// Setting up cors 
const corsOptions = {
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}


// USING MIDDLEWARES
app.use(cors(corsOptions))
app.use(express.json())

// ROUTES
app.get('/ping', (req, res) => {
    res.send("pong")
})
app.use('/api/auth', authRouter)


// RUNNING THE SERVER
const MONGO_URI = process.env.MONGO_URI
connectDB(MONGO_URI).then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
})
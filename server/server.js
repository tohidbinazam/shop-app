import express from "express";
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import productRouter from "./routers/productRouter.js";
import categoryRouter from "./routers/categoryRouter.js";
import tagRouter from "./routers/tagRouter.js";
import brandRouter from "./routers/brandRouter.js";
import storeRouter from "./routers/storeRouter.js";
import connectMongoDB from "./config/db.js";
import errorHandler from "./utility/error/errorHandler.js";

// Dotenv config
dotenv.config()

// Express init
const app = express()

app.use(cors())

// Dotenv variable
const app_name = process.env.APP_NAME
const port = process.env.PORT || 5000

// Req Body init
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static('server/public'))

// Product router
app.use('/api/v1/product', productRouter)

// Category router
app.use('/api/v1/category', categoryRouter)

// Tag router
app.use('/api/v1/tag', tagRouter)

// Brand router
app.use('/api/v1/brand', brandRouter)

// Brand router
app.use('/api/v1/store', storeRouter)

// Error handler
app.use(errorHandler)

app.listen(port, () => {
    connectMongoDB()
    console.log(`${app_name} running on port ${port}`.bgCyan);
})



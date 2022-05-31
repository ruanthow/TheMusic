import express from 'express';
import cors from 'cors'
import { router } from './router';

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.LOCAL_CONECTION)
    app.use(cors())
    next()
})

app.use(router)

export {app}
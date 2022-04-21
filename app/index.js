import express, { json } from 'express'

/* cors */
import cors from './middlewares/cors'

const app = express()

app.use(json())
app.use(cors())

app.listen(5000, () => console.log('app running in port 5000 🚀🚀🚀🚀'))
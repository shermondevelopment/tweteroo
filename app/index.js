import express, { json } from 'express'
import cors from 'cors'

/* router */
import router from './routes/index.js'

/* server */
const app = express()

app.use(json())
app.use(cors())
app.use(router)

app.listen(5000, () => console.log('app running in port 5000 🚀🚀🚀🚀'))
import express from 'express'
import { router } from './routes/app.route'

const app = express()

app.get('/', router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`)
})

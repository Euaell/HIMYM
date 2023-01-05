import express from 'express'
import errorHandler from './middleware/ErrorHandler'
import router from './routes'

const app = express()

app.use(express.json())


app.use("/api/v1/user", router.UserRoute)
app.use("/api/v1/character", router.CharacterRoutes)

app.use(errorHandler)

export default app 
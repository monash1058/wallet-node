import express from 'express'
import { userRoute } from './user'

const route = express()

route.use('/user', userRoute)

export default route

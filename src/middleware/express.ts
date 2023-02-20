import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import route from '../routes'
import { ErrorHandler } from '../helpers/handlers/error'
const path = require('path')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use(morgan('combined'))
app.use('/api', route)
app.use(ErrorHandler)

export default app

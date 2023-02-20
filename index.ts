import http from 'http'
import express from './src/middleware/express'
import { config } from './src/config'
import { connectDb } from './src/connection/mongoose'

const server = http.createServer(express)

server.listen(config.PORT, () => {
  console.log(`Server is running on PORT ${config.PORT}`)
  connectDb()
})

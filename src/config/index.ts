import dotenv from 'dotenv'
dotenv.config()
import { devConfig } from './dev'
import { prodConfig } from './prod'

const NODE_ENV = process.env.NODE_ENV

export const config = NODE_ENV === 'development' ? devConfig : prodConfig

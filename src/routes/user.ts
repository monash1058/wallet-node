import express from 'express'
import { UserController } from '../controller/user'
import {upload} from '../helpers/utils/file-upload'
const userRoute = express()

const user = new UserController()

userRoute.post('/register', user.register)
userRoute.get('/verifyNumber/:phone', user.verifyNumber)
userRoute.post('/getAllLists', user.getData)
userRoute.post('/getUser', user.getDashboardData)
userRoute.post('/amount', user.addAmount)
userRoute.post('/login', user.login)
userRoute.post('/editProfile', upload.single('profileImage'), user.editProfile)
userRoute.post('/transfer', user.transferMoney)
userRoute.post('/historyList', user.getAllHistory)


export { userRoute }

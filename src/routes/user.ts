import express from 'express'
import { UserController } from '../controller/user'
import { upload } from '../helpers/utils/file-upload'
import { verifyToken } from '../middleware/tokenValidator'
const userRoute = express()

const user = new UserController()

userRoute.post('/register', user.register)
userRoute.get('/verifyNumber/:phone', user.verifyNumber)
userRoute.post('/getAllLists', verifyToken, user.getData)
userRoute.post('/getUser', verifyToken, user.getDashboardData)
userRoute.post('/amount', verifyToken, user.addAmount)
userRoute.post('/login', user.login)
userRoute.post('/editProfile', upload.single('profileImage'), verifyToken, user.editProfile)
userRoute.post('/transfer', verifyToken, user.transferMoney)
userRoute.post('/historyList', verifyToken, user.getAllHistory)


export { userRoute }

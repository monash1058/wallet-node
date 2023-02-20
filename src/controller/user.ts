import { Request, Response, NextFunction } from 'express'
import { UserService } from '../services/user'

const userService = new UserService()

export class UserController {
  async register(req: Request, res: Response, next: any) {
    try {
      const data = await userService.register(req.body)
      res.json(data)
    } catch (err) {
      next(err)
    }
  }
  async verifyNumber(req: Request, res: Response, next: any) {
    try {
      const data = await userService.verifyNumber(req.params)
      res.json(data)
    } catch (err) {
      next(err)
    }
  }
  async login(req: Request, res: Response, next: any) {
    try {
      const data = await userService.login(req.body)
      res.json(data)
    } catch (err) {
      next(err)
    }
  }
  async getData(req: Request, res: Response, next: any) {
    try {
      const data = await userService.getData(req.body)
      res.json(data)
    } catch (err) {
      next(err)
    }
  }
  async getDashboardData(req: Request, res: Response, next: any) {
    try {
      const data = await userService.getDashboardData(req.body)
      res.json(data)
    } catch (err) {
      next(err)
    }
  }
  async addAmount(req: Request, res: Response, next: any) {
    try {
      const data = await userService.getAmount(req.body)
      res.json(data)
    } catch (err) {
      next(err)
    }
  }
  async editProfile(req: Request, res: Response, next: any) {
    try {
      const data = await userService.editProfile(req)
      res.json(data)
    } catch (err) {
      next(err)
    }
  }
  async transferMoney(req: Request, res: Response, next: any) {
    try {
      const data = await userService.transferMoney(req.body)
      res.json(data)
    } catch (err) {
      next(err)
    }
  }
  async getAllHistory(req: Request, res: Response, next: any) {
    try {
      const data = await userService.getAllHistory(req.body)
      res.json(data)
    } catch (err) {
      next(err)
    }
  }
}

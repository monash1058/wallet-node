import { userModel } from '../models/user'

export class UserDataLayer {
  async insert(payload: any) {
    try {
      const userSchema = new userModel(payload)
      const user = await userSchema.save()
      return user
    } catch (e: any) {
      throw new Error(e)
    }
  }
  async find(payload: any) {
    try {
      const user = await userModel.find(payload)
      return user
    } catch (e: any) {
      throw new Error(e)
    }
  }
  async findOne(payload: any) {
    try {
      const user = await userModel.findOne(payload)
      return user
    } catch (e: any) {
      throw new Error(e)
    }
  }
  async updateProfile(query:any, vary:any, payload: any) {
    try {
      const user = await userModel.findOneAndUpdate(query,vary,payload)
      return user
    } catch (e: any) {
      throw new Error(e)
    }
  }
  async update(query:any, payload: any) {
    try {
      const user = await userModel.findOneAndUpdate(query,payload,{new:true})
      return user
    } catch (e: any) {
      throw new Error(e)
    }
  }
}

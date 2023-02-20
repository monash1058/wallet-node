import { historyModel } from '../models/history'

export class HistoryDataLayer {
  async insert(payload: any) {
    try {
      const historySchema = new historyModel(payload)
      const history = await historySchema.save()
      return history
    } catch (e: any) {
      throw new Error(e)
    }
  }
  async find(payload: any) {
    try {
      const history = await historyModel.find(payload).sort({createdAt: 'desc'})
      return history
    } catch (e: any) {
      throw new Error(e)
    }
  }
  async recentHistory(payload: any) {
    try {
      const history = await historyModel.find(payload).sort({createdAt: 'desc'}).limit(5)
      return history
    } catch (e: any) {
      throw new Error(e)
    }
  }
}

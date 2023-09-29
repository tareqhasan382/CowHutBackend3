import { Model } from 'mongoose'

export type IUser = {
  _id: string
  password: string
  role: 'buyer' | 'seller'
  name: {
    firstName: string
    lastName: string
  }
  phoneNumber: string
  address: string
  budget: number
  income: number
}

export type IUserModel = Model<IUser, Record<string, unknown>>

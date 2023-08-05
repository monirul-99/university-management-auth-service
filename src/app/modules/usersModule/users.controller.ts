import { Request, Response } from 'express'
import usersServices from './users.services'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await usersServices.createUser(user)
    res.status(200).json({
      success: true,
      message: 'User Account Created Successfully',
      data: result,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Failed To Create User',
    })
  }
}

export default {
  createUser,
}
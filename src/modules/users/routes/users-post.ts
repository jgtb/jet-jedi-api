import { Request, Response } from 'express'

import UserSchema from '../models/users-schema'

const createUser = async (req: Request, res: Response) => {
  const payload = req.body
  const user: any = await new UserSchema(payload).save()
  res.status(200).json(user)
}

export default createUser
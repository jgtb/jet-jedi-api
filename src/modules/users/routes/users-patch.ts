import { Request, Response } from 'express'

import UserSchema from '../models/users-schema'

const updateUser = async (req: Request, res: Response) => {
  const id = req.params.id
  const update = { $set: req.body }
  const options = { new: true }

  const user = await UserSchema.findByIdAndUpdate(id, update, options)
  res.status(200).json(user)
}

export default updateUser
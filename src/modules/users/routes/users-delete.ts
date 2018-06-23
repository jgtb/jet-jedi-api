import { Request, Response } from 'express'

import UserSchema from '../models/users-schema'

const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id
  const user: any = await UserSchema.findByIdAndRemove(id)
  res.status(200).json(user)
}

export default deleteUser
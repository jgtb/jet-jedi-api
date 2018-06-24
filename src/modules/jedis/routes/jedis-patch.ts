import { Request, Response } from 'express'

import JedisSchema from '../models/jedis-schema'

const updateJedi = async (req: Request, res: Response) => {
  const id = req.params.id
  const update = { $set: req.body }
  const options = { new: true }

  const jedi = await JedisSchema.findByIdAndUpdate(id, update, options)
  res.status(200).json(jedi)
}

export default updateJedi
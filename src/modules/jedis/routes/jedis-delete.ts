import { Request, Response } from 'express'

import JedisSchema from '../models/jedis-schema'

const deleteJedi = async (req: Request, res: Response) => {
  const id = req.params.id
  const jedi: any = await JedisSchema.findByIdAndRemove(id)
  res.status(200).json(jedi)
}

export default deleteJedi
import { Request, Response } from 'express'

import JedisSchema from '../models/jedis-schema'

const getJediById = async (req: Request, res: Response) => {
  const id = req.params.id
  const jedi: any = await JedisSchema.findById(id)
  res.status(200).json(jedi)
}

export default getJediById
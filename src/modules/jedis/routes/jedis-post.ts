import { Request, Response } from 'express'

import JedisSchema from '../models/jedis-schema'

const createJedi = async (req: Request, res: Response) => {
  const payload = req.body
  const jedi: any = await new JedisSchema(payload).save()
  res.status(200).json(jedi)
}

export default createJedi
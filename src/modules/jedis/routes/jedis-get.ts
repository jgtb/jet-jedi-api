import { Request, Response } from 'express'

import JedisSchema from '../models/jedis-schema'

import generateFilters from '../../../helpers/generateFilters'

const getAllJedis = async (req: Request, res: Response) => {
  const filters: any = generateFilters(req.query)
  const paginate = {
    page: parseInt(req.query.page) || 1,
    limit: parseInt(req.query.limit) || 10,
    sort: { createdAt: -1 },
    lean: true
  }
  const jedis: any = await JedisSchema.paginate(filters, paginate)
  res.status(200).json(jedis)
}

export default getAllJedis
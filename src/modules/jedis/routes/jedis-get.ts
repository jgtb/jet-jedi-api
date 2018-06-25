import { Request, Response } from 'express'

import JedisSchema from '../models/jedis-schema'

import generateFilters from '../../../helpers/generateFilters'
import responseHandler from '../../../helpers/responseHandler'

const getAllJedis = async (req: Request, res: Response) => {
  try {
    const filters = generateFilters(req.query)
    const paginate = {
      page: parseInt(req.query.page) || 1,
      limit: parseInt(req.query.limit) || 10,
      sort: { createdAt: -1 },
      lean: true
    }
    const jedis: any = await JedisSchema.paginate(filters, paginate)
    return res.status(200).json(
      responseHandler.responseSuccessHandler(200, 'Jedis encontrados com sucesso.', jedis)
    )
  } catch (err) {
    return res.status(409).json(
      responseHandler.responseErrorHandler(409, 'Não foi possível encontrars os Jedis.')
    )
  }
}

export default getAllJedis
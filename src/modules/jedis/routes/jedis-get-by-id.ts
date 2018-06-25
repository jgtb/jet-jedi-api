import { Request, Response } from 'express'

import JedisSchema from '../models/jedis-schema'

import responseHandler from '../../../helpers/responseHandler'

const getJediById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const jedi: any = await JedisSchema.findById(id)
    return res.status(200).json(
      responseHandler.responseSuccessHandler(200, 'Jedi encontrado com sucesso.', jedi)
    )
  } catch (err) {
    return res.status(409).json(
      responseHandler.responseErrorHandler(409, 'Não foi possível encontrar este Jedi.')
    )
  }
}

export default getJediById

import { Request, Response } from 'express'

import JedisSchema from '../models/jedis-schema'

import responseHandler from '../../../helpers/responseHandler'

const createJedi = async (req: Request, res: Response) => {
  try {
    const payload = req.body
    const jedi: any = await new JedisSchema(payload).save()
    return res.status(200).json(
      responseHandler.responseSuccessHandler(200, 'Jedis cadastrado com sucesso.', jedi)
    )
  } catch (err) {
    return res.status(409).json(
      responseHandler.responseErrorHandler(409, 'Não foi possível cadastrar este Jedi.')
    )
  }
}

export default createJedi
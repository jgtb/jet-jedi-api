import { Request, Response } from 'express'

import JedisSchema from '../models/jedis-schema'

import responseHandler from '../../../helpers/responseHandler'

const updateJedi = async (req: Request, res: Response) => {
  const id = req.params.id
  const update = { $set: req.body }
  const options = { new: true }
  try {
    const jedi: any = await JedisSchema.findByIdAndUpdate(
      id,
      update,
      options
    )
    return res.status(200).json(
      responseHandler.responseSuccessHandler(200, 'Jedi alterado com sucesso.', jedi)
    )
  } catch (err) {
    return res.status(409).json(
      responseHandler.responseErrorHandler(409, 'Não foi possível alterar este Jedi.')
    )
  }
}

export default updateJedi
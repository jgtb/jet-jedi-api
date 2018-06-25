import { Request, Response } from 'express'

import JedisSchema from '../../jedis/models/jedis-schema'

import { chartsData } from '../helpers/charts'

import responseHandler from '../../../helpers/responseHandler'

const getDashboardReport = async (req: Request, res: Response) => {
  try {
    const jedis: any = await JedisSchema.find({ isActive: true })
    const response = {
      statues: chartsData(jedis, 'status'),
      planets: chartsData(jedis, 'planet')
    }
    return res.status(200).json(
      responseHandler.responseSuccessHandler(200, 'Relatório concluído com sucesso.', response)
    )
  } catch (err) {
    return res.status(409).json(
      responseHandler.responseErrorHandler(409, 'Não foi possível concluír este Relatório.')
    )
  }
}

export default getDashboardReport
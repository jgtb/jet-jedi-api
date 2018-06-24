import { Request, Response } from 'express'

import JedisSchema from '../../jedis/models/jedis-schema'

import { chartsData } from '../helpers/charts'

const getDashboardReport = async (req: Request, res: Response) => {
  try {
    const jedis: any = await JedisSchema.find({})
    res.status(200).json({
      statues: chartsData(jedis, 'status'),
      planets: chartsData(jedis, 'planet')
    })
  } catch (err) {
    res.send(400)
  }
}

export default getDashboardReport
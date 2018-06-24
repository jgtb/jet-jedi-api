import { Request, Response } from 'express'

import { statues } from '../helpers/enums'

const getAllStatues = async (req: Request, res: Response) => {
  res.status(200).json(statues)
}

export default getAllStatues
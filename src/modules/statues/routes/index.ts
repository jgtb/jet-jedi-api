import { Router } from 'express'

import getAllStatues from './statues-get'

const StatuesRoutes = Router()

StatuesRoutes
  .get('/', getAllStatues)

export default StatuesRoutes

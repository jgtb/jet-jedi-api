import { Application } from 'express'

import JedisRoutes from './modules/jedis/routes/index'
import ReportsRoutes from './modules/reports/routes/index'
import StatuesRoutes from './modules/statues/routes/index'

const ROUTES: any = [
  {
    component: JedisRoutes,
    module: 'jedis'
  },
  {
    component: ReportsRoutes,
    module: 'reports'
  },
  {
    component: StatuesRoutes,
    module: 'statues'
  }
]

const urlBase = '/api/v1/'

const allRoutes = (server: Application) => {
  ROUTES.forEach((route: any) => server.use(`${urlBase}${route.module}`, route.component))

  server.use((req, res, next) => {
    res.status(500).json({
      status: 500,
      message: `Invalid Route`,
      route: req.originalUrl
    })
    next()
  })
}

export default allRoutes

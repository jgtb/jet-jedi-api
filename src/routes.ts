import { Application } from 'express'

import UsersRoutes from './modules/users/routes/index'

const ROUTES: any = [
  {
    component: UsersRoutes,
    module: 'users'
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

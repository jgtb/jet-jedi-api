import { Router } from 'express'

import getDashboardReport from './dashboard'

const ReportsRoutes = Router()

ReportsRoutes
  .get('/dashboard', getDashboardReport)

export default ReportsRoutes

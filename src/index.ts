import { Application, NextFunction, Request, Response } from 'express'

import * as BodyParser from 'body-parser'
import * as compression from 'compression'
import * as cors from 'cors'
import * as express from 'express'
import * as jwt from 'express-jwt'
import * as session from 'express-session'
import * as helmet from 'helmet'
import * as mongoose from 'mongoose'
import * as passport from 'passport'

import { unlessPath } from './config/unlessPath'
import allRoutes from './routes'

const server: Application = express()
const PORT = process.env.PORT || 3000

const config = require('./config')

server.use(BodyParser.urlencoded({ extended: true }))
server.use(BodyParser.json())

server.use(cors())

server.use(compression())

server.use(session({ secret: config.jwtSecret, resave: true, saveUninitialized: true })))

server.use(passport.initialize())
server.use(passport.session())

server.use(helmet());

(<any>mongoose).Promise = global.Promise
mongoose
  .connect(config.mongoDB)
  .then(
    () => console.log('Conected on MongoDB'),
    err => console.log({ error: err.message })
  )

if (process.env.NODE_ENV !== 'production') {
  const morgan = require('morgan')
  server.use(morgan('dev'))

  server.use('/doc', express.static('src/public/doc'))
  server.use('/', express.static('src/public/app'))
  server.use('/app', express.static('src/public/app'))
} else {
  server.use('/doc', express.static('build/public/doc'))
  server.use('/', express.static('build/public/app'))
  server.use('/app', express.static('build/public/app'))

  server.use(jwt({ secret: config.jwtSecret }).unless(unlessPath))
}

server.use(
  (err: ErrorEventHandler, req: Request, res: Response, next: NextFunction) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('Unauthorized')
    }
  }
)

allRoutes(server)

server.listen(PORT, () => console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode.`))

export default server

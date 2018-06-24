import { Router } from 'express'

import getAllJedis from './jedis-get'
import getJediById from './jedis-get-by-id'
import createJedi from './jedis-post'
import updateJedi from './jedis-patch'
import deleteJedi from './jedis-delete'

const JedisRoutes = Router()

JedisRoutes
  .get('/', getAllJedis)
  .get('/:id', getJediById)
  .post('/', createJedi)
  .patch('/:id', updateJedi)
  .delete('/:id', deleteJedi)

export default JedisRoutes

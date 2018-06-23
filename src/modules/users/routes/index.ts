import { Router } from 'express'

import getAllUsers from './users-get'
import getUserById from './users-get-by-id'
import createUser from './users-post'
import updateUser from './users-patch'
import deleteUser from './users-delete'

const UsersRoutes = Router()

UsersRoutes
  .get('/', getAllUsers)
  .get('/:id', getUserById)
  .post('/', createUser)
  .patch('/:id', updateUser)
  .delete('/:id', deleteUser)

export default UsersRoutes

import { Router } from 'express'
import UserController from '../../app/controllers/UserControllers'

import authMiddleware from '../../app/middleware/auth'

const routes = new Router()

routes.get('/', (req, res) => UserController.index(req, res))
routes.post('/', (req, res) => UserController.store(req, res))
routes.use(authMiddleware)
routes.get('/:id', (req, res) => UserController.show(req, res))

export { routes }

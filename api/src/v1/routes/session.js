import { Router } from 'express'
import SessionController from '../../app/controllers/SessionController'

const routes = new Router()

routes.post('/', (req, res) => SessionController.store(req, res))

export { routes }

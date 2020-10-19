import { Router } from 'express'

import EndressController from '../../app/controllers/EndressController'

const routes = new Router()

routes.post('/', (req, res) => EndressController.store(req, res))

export { routes }

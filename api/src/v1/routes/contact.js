import { Router } from 'express'

import ContactController from '../../app/controllers/ContactController'

const routes = new Router()

routes.post('/', (req, res) => ContactController.store(req, res))

export { routes }

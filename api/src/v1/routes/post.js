import { Router } from 'express'

import PostController from '../../app/controllers/PostController'

const routes = new Router()

routes.get('/', (req, res) => PostController.index(req, res))
routes.get('/:id', (req, res) => PostController.show(req, res))
routes.get('/userid/:user_id', (req, res) =>
  PostController.showPostsUserId(req, res)
)
routes.post('/', (req, res) => PostController.store(req, res))

export { routes }

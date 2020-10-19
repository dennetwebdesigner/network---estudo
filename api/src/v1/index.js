import { Router } from 'express'
import authMiddleware from '../app/middleware/auth'
// importa todos os arquivos na pasta routes, atraves da index, e cria ou importa contantes com o nome dos respectivos arquivos atribuindo seus respectivos comportamentos as mesma
import group from './routes'

const router = new Router()

// caso o export seja default cada constante terá uma propriedade com o nome defaul (como usado em database/index), porém se não é só passar a variavel exportada diretamente
router.use('/sessions', group.session.routes)
router.use('/users', group.user.routes)
router.use(authMiddleware)
router.use('/contacts', group.contact.routes)
router.use('/endresses', group.endress.routes)
router.use('/posts', group.post.routes)

export { router }

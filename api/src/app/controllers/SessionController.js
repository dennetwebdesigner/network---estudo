import jwt from 'jsonwebtoken'
import * as Yup from 'yup'
import User from '../models/User'

import authConfig from '../../config/auth'

class SessionController {
  async store(req, res) {
    const Schema = Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string().required(),
    })

    if (!(await Schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro na validação!' })
    }

    const { username, password } = req.body
    const user = await User.findOne({ where: { username } })

    if (!(await user.checkPassword(password))) {
      return res.status(400).json({ error: 'Senha inválida!' })
    }

    const { id } = user

    return res.json({
      user: { id },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    })
  }
}

export default new SessionController()

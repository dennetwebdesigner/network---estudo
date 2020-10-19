import Profile from '../models/Profile'
import * as Yup from 'yup'
import User from '../models/User'

class UserController {
  async index(req, res) {
    const users = await User.findAll({
      attributes: ['id', 'username'],
      order: [['username', 'ASC']],
      include: [
        {
          association: 'profile',
        },
      ],
    })

    return res.json(users)
  }

  async show(req, res) {
    const { id } = req.params
    const user = await User.findOne({
      where: { id },
      attributes: ['id', 'username'],
      include: [
        {
          association: 'profile',
          attributes: ['first_name', 'last_name', 'avatar'],
        },
        {
          association: 'contacts',
          attributes: ['type', 'content'],
        },
        {
          association: 'endresses',
          attributes: [
            'country',
            'state',
            'city',
            'district',
            'street',
            'number',
            'cep',
          ],
        },
      ],
    })

    return res.json(user)
  }

  async store(req, res) {
    const { username, password, first_name, last_name } = req.body

    const Schema = Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string().required(),
      first_name: Yup.string().required(),
      last_name: Yup.string().required(),
    })

    if (!(await Schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Erro ao validar dados, tente novamente!' })
    }

    const hasUser = await User.findOne({
      where: { username },
      attributes: ['id'],
    })

    if (hasUser) return res.status(400).json({})

    try {
      const user = await User.create({ username, password_hash: password })

      await Profile.create({
        user_id: user.id,
        first_name,
        last_name,
      })

      return res.json({})
    } catch (error) {
      return res.status(502).json({})
    }
  }
}

export default new UserController()

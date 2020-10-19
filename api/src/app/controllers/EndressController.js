import Endress from '../models/Endress'

class EndressController {
  async store(req, res) {
    try {
      Endress.create(req.body)
      return res.json({})
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}

export default new EndressController()

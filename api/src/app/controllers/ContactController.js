import Contact from '../models/Contact'

class ContactController {
  async store(req, res) {
    try {
      Contact.create(req.body)
      return res.json({})
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}

export default new ContactController()

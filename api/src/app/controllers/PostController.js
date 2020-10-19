import Post from '../models/Post'

class PostController {
  async index(req, res) {
    const posts = await Post.findAll({
      order: [['updatedAt', 'DESC']],
      include: [
        {
          association: 'user',
          attributes: ['id'],
          include: [
            {
              association: 'profile',
              attributes: ['first_name', 'last_name', 'avatar'],
            },
          ],
        },
      ],
    })

    return await res.json(posts)
  }

  async show(req, res) {
    const { id } = req.params
    const post = await Post.findOne({
      where: { id },
      order: [['updatedAt', 'DESC']],
      include: [
        {
          association: 'user',
          attributes: ['id'],
          include: [
            {
              association: 'profile',
              attributes: ['first_name', 'last_name', 'avatar'],
            },
          ],
        },
      ],
    })

    return await res.json(post)
  }

  async store(req, res) {
    const post = await Post.create(req.body)
    return res.json({ id: post.id })
  }

  async showPostsUserId(req, res) {
    const { user_id } = req.params
    const post = await Post.findAll({
      where: { user_id },
      order: [['created_at', 'DESC']],
      include: [
        {
          association: 'user',
          attributes: ['id'],
          include: [
            {
              association: 'profile',
              attributes: ['first_name', 'last_name', 'avatar'],
            },
          ],
        },
      ],
    })

    return await res.json(post)
  }
}

export default new PostController()

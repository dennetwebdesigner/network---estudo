import Sequelize from 'sequelize'
import dbConfig from '../config/database'

import model from '../app/models'

const models = [
  model.User.default,
  model.Profile.default,
  model.Post.default,
  model.Contact.default,
  model.Endress.default,
]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(dbConfig)

    models.map((model) => model.init(this.connection))

    models.forEach((model) => {
      if (model.associate) {
        model.associate(this.connection.models)
      }
    })
  }
}

export default new Database()

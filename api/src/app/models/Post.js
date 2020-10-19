import { Model, DataTypes } from 'sequelize'

class Post extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: DataTypes.INTEGER,
        text: DataTypes.STRING,
        status: DataTypes.ENUM('public', 'private'),
      },
      { sequelize }
    )
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  }
}

export default Post

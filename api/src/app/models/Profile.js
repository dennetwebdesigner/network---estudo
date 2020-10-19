import { Model, DataTypes } from 'sequelize'

class Profile extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: DataTypes.INTEGER,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        avatar: DataTypes.STRING,
      },
      { sequelize }
    )
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  }
}

export default Profile

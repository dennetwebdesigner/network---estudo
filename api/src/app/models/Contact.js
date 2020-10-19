import { Model, DataTypes } from 'sequelize'
class Contact extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: DataTypes.INTEGER,
        type: DataTypes.ENUM('email', 'phone'),
        content: DataTypes.STRING,
      },
      { sequelize }
    )
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  }
}

export default Contact

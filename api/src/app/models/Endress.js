import { Model, DataTypes } from 'sequelize'

class Endress extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: DataTypes.INTEGER,
        country: DataTypes.STRING,
        state: DataTypes.STRING,
        city: DataTypes.STRING,
        district: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.STRING,
        cep: DataTypes.STRING,
      },
      { sequelize, tableName: 'endresses' }
    )
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  }
}

export default Endress

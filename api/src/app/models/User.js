import { Model, DataTypes } from 'sequelize'
import bcrypt from 'bcrypt'
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        username: DataTypes.STRING,
        password_hash: DataTypes.VIRTUAL,
        password: DataTypes.STRING,
      },
      { sequelize }
    )

    this.addHook('beforeSave', async (user) => {
      if (user.password_hash)
        user.password = await bcrypt.hash(user.password_hash, 8)

      return this
    })
  }

  async checkPassword(passwordCurrent) {
    const allow = await bcrypt.compare(passwordCurrent, this.password)
    return allow
  }

  static associate(models) {
    this.hasOne(models.Profile, { foreignKey: 'user_id', as: 'profile' })
    this.hasMany(models.Post, { foreignKey: 'user_id', as: 'posts' })
    this.hasMany(models.Contact, { foreignKey: 'user_id', as: 'contacts' })
    this.hasMany(models.Endress, { foreignKey: 'user_id', as: 'endresses' })
  }
}

export default User

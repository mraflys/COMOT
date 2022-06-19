'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Profile, {
        foreignKey: 'user_id',
        as: 'profile',
      });
      User.hasMany(models.Notification);
      User.hasMany(models.Posting);
      User.hasMany(models.Project_experience);
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    verification: DataTypes.BOOLEAN,
    hash: DataTypes.STRING,
    role: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
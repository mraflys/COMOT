'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profile.belongsTo(models.User, { 
        foreignKey: 'user_id',
        as: 'user'});
      Profile.hasOne(models.Address, {
        foreignKey: 'profile_id',
        as: 'profile',
      });
    }
  }
  Profile.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    img_path: DataTypes.STRING,
    img_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};
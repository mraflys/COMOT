'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Address.belongsTo(models.Profile, { foreignKey: 'profile_id' });
    }
  }
  Address.init({
    profile_id: DataTypes.INTEGER,
    user_address_country: DataTypes.STRING,
    user_address_city: DataTypes.STRING,
    user_address_detail: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};
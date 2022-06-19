'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Notification.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Notification.init({
    user_id: DataTypes.INTEGER,
    user_from_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    read_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Notification',
  });
  return Notification;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project_experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project_experience.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Project_experience.init({
    user_id: DataTypes.INTEGER,
    project_name: DataTypes.STRING,
    project_description: DataTypes.TEXT,
    project_git_url: DataTypes.TEXT,
    project_start: DataTypes.DATE,
    project_end: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Project_experience',
  });
  return Project_experience;
};
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Project_experiences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      project_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      project_description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      project_git_url: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      project_start: {
        allowNull: false,
        type: Sequelize.DATE
      },
      project_end: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Project_experiences');
  }
};
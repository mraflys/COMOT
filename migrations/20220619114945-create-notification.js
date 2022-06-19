'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Notifications', {
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
      user_from_id: {
        type: Sequelize.INTEGER
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      content: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      read_at: {
        allowNull: true,
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
    await queryInterface.dropTable('Notifications');
  }
};
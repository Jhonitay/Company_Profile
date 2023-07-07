/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      user_id: {
        type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
          unique: true,
          field: "user_id",
      },
      first_name: {
        type: Sequelize.STRING,
          allowNull: true,
          field: "first_name",
      },
      last_name: {
        type: Sequelize.STRING,
          allowNull: true,
          field: "last_name",
      },
      username: {
        type: Sequelize.STRING,
          allowNull: true,
          unique: true,
          field: "username",
      },
      account_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        unique: true,
        field: "account_id",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        field: "updated_at",
      },
    });

    await queryInterface.addConstraint("users", {
      fields: ["account_id"],
      type: "foreign key",
      references: {
        table: "accounts",
        field: "account_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
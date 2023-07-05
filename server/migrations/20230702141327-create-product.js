/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      product_id: {
        type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
          unique: true,
          field: "product_id",
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "name",
      },
      dimensi: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "dimensi",
      },
      berat: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "berat",
      },
      stok: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "stock",
      },
      jenis: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "jenis",
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};
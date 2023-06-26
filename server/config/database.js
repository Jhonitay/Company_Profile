import {Sequelize} from "sequelize";

const db = new Sequelize('fp_pemrogweb', 'root', '',{
    host: "localhost",
    dialect: "mysql"
});

export default db;

const sequelize = require("../config/db.connections");
const Sequelize = require("sequelize");

module.exports = sequelize.define("users", {
        user_id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        isAdmin: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        img: {
            type: Sequelize.STRING,
            allowNull: true
        },
        telephone: {
            type: Sequelize.STRING,
            allowNull: true
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
});

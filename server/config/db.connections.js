const Sequelize = require("sequelize");

const MYSQL_CONFIG = {
    APP: process.env.APP || "development",
    PORT: process.env.PORT || "4001",
    DB_CONNECTION: {
        host: process.env.DB_HOST || "localhost",
        database: process.env.DB_NAME || "bookstoredb",
        user: process.env.DB_USER || "root",
        port: process.env.DB_PORT || "3306",
        password: process.env.DB_PASSWORD || "root"
    },
    JWT_ENCRYPTION: process.env.JWT_ENCRYPTION || "jwt_please_change",
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || "1h",
    SALT_ROUNDS: process.env.SALT_ROUNDS || 10
};

module.exports =  new Sequelize(
    MYSQL_CONFIG.DB_CONNECTION.database,
    MYSQL_CONFIG.DB_CONNECTION.user,
    MYSQL_CONFIG.DB_CONNECTION.password,
    {
        host: MYSQL_CONFIG.DB_CONNECTION.host,
        port: (MYSQL_CONFIG.DB_CONNECTION.port),
        dialect: "mysql",
        define: {
           timestamps: false
        }
   }
);


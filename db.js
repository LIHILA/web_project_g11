const mysql = require("mysql2");
const dbConfig = require("./db.config.js");

//����� ����� ����
const connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    port: dbConfig.port,
    database: dbConfig.database,
    multipleStatements: true,
    insecureAuth: true,
});

connection.connect(error => {
	if (error) throw error;
	console.log("Successfully connected to the database");
});

module.exports = connection;


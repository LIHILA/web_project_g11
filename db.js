const mysql = require("mysql2");
const dbConfig = require("./db.config.js");

//����� ����� ����
const connection = mysql.createConnection({
	host: '127.0.0.1',
    user: 'root',
    password: 'yT3mrpev@',
    port: 3306,
    database: 'web_project_g11',
    multipleStatements: true,
    insecureAuth: true,
});

connection.connect(error => {
	if (error) throw error;
	console.log("Successfully connected to the database");
});

module.exports = connection;
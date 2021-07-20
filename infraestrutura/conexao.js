const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'test',
    password: 'Mprr123@',
    database: 'dbagenda_petshop'
});

module.exports = conexao;
const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'usuario',
    password: 'senha',
    database: 'dbagenda_petshop'
});

module.exports = conexao;
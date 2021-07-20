const moment = require('moment');
const conexao = require('../infraestrutura/conexao');


class Atendimento{
    adicionar(atendimento){
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        const atendimentoDatado = {...atendimento, dataCriacao, data};
        const sql = 'INSERT INTO Atendimento SET ?';

        conexao.query(sql, atendimentoDatado, (err, result) => {
            if(err){
                console.log(err);
            } else {
                console.log(result);
            }
        })
    }
}

module.exports = new Atendimento
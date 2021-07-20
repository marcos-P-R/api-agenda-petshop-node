const moment = require('moment');
const conexao = require('../infraestrutura/conexao');


class Atendimento{
    adicionar(atendimento, res){
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        const atendimentoDatado = {...atendimento, dataCriacao, data};
        const sql = 'INSERT INTO Atendimento SET ?';

        conexao.query(sql, atendimentoDatado, (err, result) => {
            if(err){
                res.status(400).json(err);
            } else {
                res.status(201).json(result);
            }
        })
    }
}

module.exports = new Atendimento
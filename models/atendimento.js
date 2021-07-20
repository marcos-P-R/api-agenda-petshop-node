const moment = require('moment');
const conexao = require('../infraestrutura/conexao');


class Atendimento{
    adicionar(atendimento, res){
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');

        const dateIsValid = moment(data).isSameOrAfter(dataCriacao);
        const clientIsValid = atendimento.cliente.length >= 5;

        const validacoes = [
            {
                nome: 'data',
                valido: dateIsValid,
                mensagem: `Data deve ser igual ou maior a ${moment()}`
            },
            {
                nome: 'cliente',
                valido: clientIsValid,
                mensagem: 'cliente deve ter pelo menos 5 caracteres'
            }
        ];

        const erros = validacoes.filter(campo => !campo.valido);
        const existeErro = erros.length;

        if (existeErro) {
            res.status(400).json(erros);
        } else {
            const atendimentoDatado = {...atendimento, dataCriacao, data};
            const sql = 'INSERT INTO Atendimento SET ?';
    
            conexao.query(sql, atendimentoDatado, (err, result) => {
                if(err){
                    res.status(400).json(err);
                } else {
                    res.status(201).json(result);
                }
            });
        }

        
    }

    listAll(res){
        const sql = "SELECT * FROM Atendimento";

        conexao.query(sql, (err, result) => {
            if(err){
                res.status(404).json(err);
            } else {
                res.status(200).json(result);
            }
        })
    }

    buscaById(id, res){
        const sql = `SELECT * FROM Atendimento WHERE id=${id}`;

        conexao.query(sql, (err, result)=> {
            if (err){
                res.status(404).json(err);
            } else {
                res.status(200).json(result);
            }
        });
    }
}

module.exports = new Atendimento
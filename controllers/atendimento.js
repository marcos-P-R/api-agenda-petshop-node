const Atendimento = require('../models/atendimento');

module.exports = app => {
    app.get('/atendimento', (req, res)=>{
        Atendimento.listAll(res);
    });

    app.get('/atendimento/:id', (req, res)=>{
        const id = parseInt(req.params.id);
        Atendimento.buscaById(id, res);
    });

    app.post('/atendimento', (req, res) => {
        const atendimento = req.body;
        Atendimento.adicionar(atendimento, res);
    });
}
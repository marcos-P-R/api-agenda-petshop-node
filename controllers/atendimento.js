const Atendimento = require('../models/atendimento');

module.exports = app => {
    app.get('/atendimento', (req, res)=>{
        res.send("Via Get");
    });

    app.post('/atendimento', (req, res) => {
        const atendimento = req.body;
        Atendimento.adicionar(atendimento);
        res.send("Via Post");
    });
}
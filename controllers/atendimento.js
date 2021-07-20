module.exports = app => {
    app.get('/atendimento', (req, res)=>{
        res.send("Via Get");
    });

    app.post('/atendimento', (req, res) => {
        console.log(req.body);
        res.send("Via Post");
    });
}
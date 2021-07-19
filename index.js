const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("Ola Gostaria de Adicionar um Lembrente!");
});

app.listen(3000, ()=> console.log("rodando na porta 3000"));
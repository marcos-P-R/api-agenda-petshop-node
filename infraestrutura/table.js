class Table{
    init(conexao){
        this.conexao = conexao;
        this.criandoAtendimento();
    }

    criandoAtendimento(){
        const sql = `CREATE TABLE IF NOT EXISTS Atendimento(
            id int NOT NULL AUTO_INCREMENT,
            cliente varchar(50) NOT NULL,
            pet varchar(20),
            servico varchar(20) NOT NULL,
            status varchar(20) NOT NULL,
            observarcoes text,
            PRIMARY KEY(ID)
        )`;

        this.conexao.query(sql, (erro)=>{
            if(erro){
                console.log(erro);
            } else {
                console.log("Tabela Atendimento criado com sucesso");
            }
        });
    }
}

module.exports = new Table
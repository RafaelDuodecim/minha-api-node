const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "cadastro",
    "root",
    "4509R",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

sequelize.authenticate().then((function(){
    console.log("Banco de ddos conectado com sucesso!")
})).catch(function(erro){
    console.log("Erro ao se conectar com o banco de dados" + erro)
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

// parei 01:33

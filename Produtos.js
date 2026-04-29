const db = require("./db")

const Produto = db.sequelize.define("produtos", {
   nome: {
    type: db.Sequelize.STRING,
    allowNull: false
   },
   preco: {
    type: db.Sequelize.DOUBLE,
    allowNull: false
   },
   descricao: {
    type: db.Sequelize.TEXT,
    allowNull: false
   }
});

Produto.create({
    nome: "Core i5 12400F",
    preco: "950.99",
    descricao: "Processador da 12th geração."
});


Produto.sync({force: false});
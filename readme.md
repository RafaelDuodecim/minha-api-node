# 🚀 API Node.js + MySQL

API REST desenvolvida com **Node.js**, **Express** e **MySQL**, utilizando o ORM **Sequelize** para gerenciamento do banco de dados.

---

## 📌 Sobre o Projeto

Esta API foi criada com o objetivo de:

* Gerenciar produtos
* Praticar integração entre backend e banco de dados
* Aplicar boas práticas de desenvolvimento com Node.js

---

## 🎓 Créditos

Este projeto foi desenvolvido com base nos aprendizados adquiridos em um curso/canal de ensino de desenvolvimento web, aplicado e adaptado para fins de prática e evolução profissional. Link: https://www.youtube.com/watch?v=6Y1cMlTPEaE

---

## 🛠️ Tecnologias Utilizadas

* Node.js
* Express
* MySQL
* Sequelize
* dotenv

---

## ⚙️ Configuração do Ambiente

### 1. Clone o repositório

```bash
git clone https://github.com/RafaelDuodecim/minha-api-node.git
cd minha-api-node
```

---

### 2. Instale as dependências

```bash
npm install
```

---

### 3. Configure o arquivo `.env`

Crie um arquivo `.env` na raiz do projeto:

```env
MYSQLHOST=localhost
MYSQLPORT=3306
MYSQLUSER=root
MYSQLPASSWORD=sua_senha
MYSQLDATABASE=cadastro
```

---

### 4. Rodar o projeto

```bash
node app.js
```

ou com nodemon:

```bash
nodemon app.js
```

---

## 📡 Endpoints

### 🔹 Inserir produto

```
GET /teste
```

Cria um produto de teste no banco de dados.

---

## 🗄️ Estrutura do Projeto

```
📁 minha-api-node
 ┣ 📁 models
 ┃ ┗ 📄 Produtos.js
 ┣ 📄 app.js
 ┣ 📄 package.json
 ┣ 📄 .env
 ┗ 📄 README.md
```

---

## 💡 Melhorias Futuras

* [ ] Criar CRUD completo (Create, Read, Update, Delete)
* [ ] Implementar validações
* [ ] Separ

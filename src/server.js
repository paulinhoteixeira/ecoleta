const express = require("express");
const server = express();

//BANCO DE DADOS
const db = require("./database/db");

//CONFIGURAR PASTA PUBLICA
server.use(express.static("public"));

// UTILIZANDO TEMPLATE ENGINE
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

// CONFIGURAR CAMINHOS DA APLICAÇÃO
// PÁGINA INICIAL
// REQ: REQUISIÇÃO
// RES: RESPOSTA
server.get("/", (req, res) => {
  return res.render("index.html");
});
server.get("/create-point", (req, res) => {
  return res.render("create-point.html");
});
server.get("/search", (req, res) => {
  db.all(`SELECT * FROM places`, function (err, rows) {
    if (err) {
      return console.log(err);
    }
   
    const total = rows.length

    return res.render("search-results.html", {places: rows, total});
    
  });

});

// LIGAR O SERVIDOR
server.listen(3000);

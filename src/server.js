const express = require("express");
const server = express();

//BANCO DE DADOS
const db = require("./database/db");

//CONFIGURAR PASTA PUBLICA
server.use(express.static("public"));

//HABILITAR O USO DO REQ.BODY NA APLICAÇÃO
server.use(express.urlencoded({extended: true}))

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

server.post("/savepoint", (req, res) => {

  const query = `
    INSERT INTO places (
      image,
      name,
      address,
      address2,
      state,
      city,
      items
    ) VALUES (?,?,?,?,?,?,?)
  `

  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
  ]

  function afterInsertData(err){
    if(err) {
      return console.log(err)
    }

    console.log("Cadastrado com sucesso")
    console.log(this)

    return res.render("create-point.html", { saved: true })
  }

  db.run(query, values, afterInsertData)

})


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

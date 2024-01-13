const express = require('express')
const server = express()

//CONFIGURAR PASTA PUBLICA
server.use(express.static("public"))

// UTILIZANDO TEMPLATE ENGINE
const nunjucks = require('nunjucks')
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})


// CONFIGURAR CAMINHOS DA APLICAÇÃO
// PÁGINA INICIAL
// REQ: REQUISIÇÃO
// RES: RESPOSTA
server.get('/', (req, res) => {
  return res.render("index.html")  
})
server.get('/create-point', (req, res) => {
  return res.render("create-point.html")  
})
server.get('/search', (req, res) => {
  return res.render("search-results.html")  
})

// LIGAR O SERVIDOR
server.listen(3000)
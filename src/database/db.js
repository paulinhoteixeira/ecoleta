//importar a dependencia do sqlite
const sqlite3 = require('sqlite3').verbose()

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o objeto de banco de dados paara as operações
// db.serialize(() => {
//   // criar uma tabela
//   db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT,
//       address TEXT,
//       address2 TEXT,
//       state TEXT,
//       city TEXT,
//       items TEXT
//     );
//   `)

//   // inserir dados na tabela
//   const query = `
//     INSERT INTO places (
//       image,
//       name,
//       address,
//       address2,
//       state,
//       city,
//       items
//     ) VALUES (?,?,?,?,?,?,?)
//   `

//   const values = [
//     "https://media.istockphoto.com/id/1754458637/pt/foto/earth-day-2024-concept.jpg?s=612x612&w=0&k=20&c=5YQ43w6gKW1NSWeOdfti6K93qxlxCYTD8NPr_xaLvWo=",
//     "Papersider",
//     "Guilherme Genballa, Jardim América",
//     "N° 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Resíduos Eletrônicos, Lâmpadas"
//   ]

//   function afterInsertData(err){
//     if(err) {
//       return console.log(err)
//     }

//     console.log("Cadastrado com sucesso")
//     console.log(this)
//   }

//   db.run(query, values, afterInsertData)

  //consultar dados
  // db.all(`SELECT name FROM places`, function(err, rows){
  //   if(err){
  //     return console.log(err)
  //   }

  //   console.log("Aqui estão seus registros: ")
  //   console.log(rows)
  // })


  //deletar um dado da tabela
//   db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
//     if(err){
//       return console.log(err)
//     }

//     console.log("Registro deletado com sucesso.")
//   })

    

// })
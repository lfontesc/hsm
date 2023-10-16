const chronos = require('./historyScrapper.js');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const mockItensAnalyse = [
  { id: 6635, name: "Bênção do Ferreiro", preco: 395 },
  { id: 38072, name: "[Extreme] Cristal de Bio 5",  preco: 12}
]

app.listen(port, () => {
  console.log(`Servidor rodando na porta de conexão ${port}.`)
})

app.get('/itens', (request, response) => {
    return Promise.all(
    mockItensAnalyse.map((item) => {
      return chronos(item)
      
    })).then(function (itens) {
      console.log(itens)
      response.json({ itens: itens, app: "Olá mundo" })
    })
  
})


// function main() {
//   // console.log(mockItensAnalyse)

//   return Promise.all(
//     mockItensAnalyse.map((item) => {
//       return chronos(item)
      
//     })).then(function (itens) {
//       console.log(itens)
//     })
// }

// main()
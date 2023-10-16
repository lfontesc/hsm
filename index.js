const chronos = require('./historyScrapper.js');


const mockItensAnalyse = [
  { id: 6635, name: "Bênção do Ferreiro", preco: 395 },
  { id: 38072, name: "[Extreme] Cristal de Bio 5",  preco: 12}
]

function main() {
  // console.log(mockItensAnalyse)

  return Promise.all(
    mockItensAnalyse.map((item) => {
      return chronos(item)
      
    })).then(function (itens) {
      console.log(itens)
    })
}

main()
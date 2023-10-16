const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://historyreborn.net/?module=item&action=view&id=6635';

const chronos = function (item) {
      const url = `https://historyreborn.net/?module=item&action=view&id=${item.id}`
 return rp(url)
    .then(function (html) {
      //success!
      const cheerio = $.load(html)
      const itemExtractor = {...item, img: `https://static.divine-pride.net/images/items/collection/${item.id}.png`}
      cheerio('#nova-sale-table').toArray().map(item => {
      const regex = /(\d+,\d+|\d+)c/g;
        const matches = cheerio(item).text().match(regex);
        if (matches) {
          itemExtractor.precos = matches.map(match => Number(match.replace('c', '').replace(',','.'))).filter((item, index) => index < 3)
        }
        // else {
        //   // return [];
        // }
      })
     return itemExtractor
    })
    .catch(function(err){
      //handle error
      console.log("err", err)
    });
}

module.exports = chronos
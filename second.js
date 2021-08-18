const fs = require('fs')

let pokemons  = ''


try {
  const data = fs.readFileSync('data.json', JSON)
  pokemons=JSON.parse(data)
  console.log(pokemons)
} catch (err) {
  console.error(err)
}




let writeData =  JSON.stringify(pokemons,null,2)
console.log(writeData)


fs.writeFile('pokemons.txt', writeData, { flag: 'a+' } , err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})

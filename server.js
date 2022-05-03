const express = require('express')
const app = express()
const cors = require('cors')


app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})


const PORT = 3000

const db = require("./pokedex.json")

// console.log(db)

const poke = require("./routes/pokemons")

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/pokemons', (req, res) => {
//     res.send(db)
// })

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/pokemons", poke)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
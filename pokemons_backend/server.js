const cors = require('cors')
const express = require('express')
const app = express()
const PORT = 3000

const db = require("./pokedex.json")




const poke = require("./routes/pokemons")


app.use(cors()) 
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/pokemons", poke)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
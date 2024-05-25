var express = require('express')

var app = express()
app.use(express.json())

function obtenerClabe(depositoId) {
    var banco = "659" //Opciones empresariales del norte
    var plaza = "180" //Cdmx    
    var pad = '00000000000'
    depositoId = (pad + depositoId).substring(depositoId.length)
    var clabe = banco + plaza + depositoId;
    clabe = clabe + Math.floor(Math.random() * 10)

    return clabe
}

app.get('/', (req, res) => {
    res.send('Hola mundo')
})

app.get('/api/clabe', (req, res) => {
    console.log(req.query)
    //res.send('Hola mundo en clabe 2')
    clabe = obtenerClabe(req.query.ahorroId)
    res.status(201).json({ clabe })
})

var server = app.listen(3002, () => {
    console.log("http://localhost:3002")
    console.log("http://localhost:3002/api/clabe")
})
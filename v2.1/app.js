var express = require('express')
var obtenerClabe = require('./clabe.js')
const path = require('path');

var app = express()
app.use(express.json())

app.get('/', (req, res) => {
    // res.status(200).json(
    //     {
    //         "fesAragonSevice": "Clabe",
    //         "endPoint": "/api/clabe?ahorroId={ahorroId}",
    //         "ahorroId": "Es el número de cuenta",
    //         "creadoPor": "V Martínez"
    //     }
    // )
    //res.status(200).send("<h2>Hola mundo</h2>")
    res.sendFile(path.join(__dirname, '/documentacion.html'));
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
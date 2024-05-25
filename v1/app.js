var http = require('http')
var url = require('url');

function obtnerClabe(depositoId) {
    var banco = "659" //Opciones empresariales del norte
    var plaza = "180" //Cdmx    
    var pad = '00000000000'
    depositoId = (pad + depositoId).substring(depositoId.length)
    var clabe = banco + plaza + depositoId;
    clabe = clabe + Math.floor(Math.random() * 10)

    return clabe
}

http.createServer(function (req, res) {
    console.log(req.url)
    res.writeHead(201, { 'Content-Type': 'application/json' });
    console.log(url.parse(req.url, true).query)
    var data = url.parse(req.url, true).query
    var clabe = obtnerClabe(data.ahorroId)
    res.end('{"clabe":' + clabe + '}');
}).listen(3001);
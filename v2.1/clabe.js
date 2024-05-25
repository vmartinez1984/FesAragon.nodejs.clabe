function obtenerClabe(depositoId) {
    var banco = "659" //Opciones empresariales del norte
    var plaza = "180" //Cdmx    
    var pad = '00000000000'
    depositoId = (pad + depositoId).substring(depositoId.length)
    var clabe = banco + plaza + depositoId;
    clabe = clabe + Math.floor(Math.random() * 10)

    return clabe
}

module.exports = obtenerClabe
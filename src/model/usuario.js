const connection = require('./connectMysql');
const Kudo = require('./kudo');

function updateQtyKudos(data){
	const sql = 'UPDATE usuario SET kudosqty = kudosqty + (?) WHERE id = ? ';

    connection.query(sql,[data.qty, data.idUsuario],error=>{
        if (error) throw error; 

    });
}

function deleteUsuarioKudos(data){
	const removedKudos = Kudo.deleteMany({destino: parseInt(data.destino)},function(error,result){
		console.log(result);
	});
	//console.log(removedKudos);

}

exports.updateQtyKudos = updateQtyKudos;
exports.deleteUsuarioKudos = deleteUsuarioKudos;
const {
	query
} = require("../models/mysql_model")


const getData = async (req, res) => {

	// console.log(req.query) //獲得後方參數
	//keyword input輸入
	//type 類型

	let keyword = req.query.keyword
	let type = req.query.type
	let id = req.query.id
	let sql = ""



	if(!keyword){
		keyword = "%%"
	}else{
		keyword = "%" + keyword + "%"
	}

	if(!type || type == "總覽"){
		type = "%%"
	}else{
		type = "%" + type + "%"
	}

	sql = "SELECT * FROM selfweb.learn_process WHERE (type Like '"+ type +"') AND ( (title Like '" + keyword +"') OR (directions like'"+ keyword +"'));"

	if(id){
		sql = 'SELECT * FROM selfweb.learn_process where id = "'+ id +'"';
	}
	
	
	const data = await query(sql)
	res.json(data)
	
	
}


const patchData = async (req, res) => {

	// console.log(req.body)

	const {
		id,
		time_data,
		title,
		type,
		image,
		directions,
		newId
		
	} = req.body.data


	let sql

	if(id != 'new'){
		sql = "UPDATE `selfweb`.`learn_process` SET `title` = '"+ title +"', `image` = '"+ image +"', `time_date` = '"+ time_data +"', `type` = '"+ type +"',`directions` = '"+ directions +"' WHERE (`id` = '"+ id +"');"
	}else{
		sql = "INSERT INTO `selfweb`.`learn_process` (`id` ,`title`, `image`, `directions`, `type`, `time_date`) VALUES ('"+newId+"', '"+title+"', '"+image+"', '"+directions+"', '"+type+"', '"+time_data+"');"
	}

	await query(sql).then( data => {

		res.send('1')

	}).catch( error => {

		console.log(error)
		res.send('0')

	})
}



const deleteData = async (req, res) => {

	const {id} = req.body

	sql = "DELETE FROM `selfweb`.`learn_process` WHERE (`id` = '"+id+"');"
	await query(sql).then(()=>{
		res.send("1")
	}).catch( error => {
		res.send("0")
	})

}


const test = async (req, res) => {

	console.log(req.body)

	console.log('test')

	res.send("yes good job")
}

module.exports = {
	getData,
	patchData,
	deleteData
};
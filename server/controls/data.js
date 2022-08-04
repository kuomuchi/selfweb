const {
	query
} = require("../models/mysql_model")


const getData = async (req, res) => {

	// console.log(req.query) //獲得後方參數

	//keyword input輸入
	//type 類型

	let keyword = req.query.keyword
	let type = req.query.type

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

	const sql = "SELECT * FROM selfweb.learn_process WHERE (type Like '"+ type +"') AND  (title Like '" + keyword +"') OR (directions like'"+ keyword +"');"
	const data = await query(sql)

	res.json(data)
	
	
}

const test = async (req, res) => {

	console.log(req.body)

	console.log('test')

	res.send("yes good job")
}

module.exports = {
	getData,
	test
};
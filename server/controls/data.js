const {
	query
} = require("../models/mysql_model")


const getData = async (req, res) => {

	// console.log(req.query) 獲得後方參數

	const data = await query("SELECT * FROM learn_process;")
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
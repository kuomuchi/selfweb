require('dotenv').config();

const {PORT_TEST, PORT, NODE_ENV, API_VERSION} = process.env;
const port = NODE_ENV == 'test' ? PORT_TEST : PORT;

const express = require('express');
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false })) //可接收post body
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.use('/api/',
    [
        require('./server/routes/get_route')
    ]
);

app.use(function(req, res, next) {
    res.status(404).sendFile(__dirname + '/public/404.html');
});

// // Error handling
// app.use(function(err, req, res, next) {
//     console.log(err);
//     res.status(500).send('Internal Server Error');
// });

if (NODE_ENV != 'production'){
    app.listen(port, () => {console.log(`Listening on port: ${port}`);});
}

module.exports = app;
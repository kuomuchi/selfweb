require('dotenv').config();

const {PORT_TEST, PORT, NODE_ENV, API_VERSION} = process.env;
const port = NODE_ENV == 'test' ? PORT_TEST : PORT;

const express = require('express');
const app = express();


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.use('/api/',
//     [
//         require('./server/routes/admin_route'),
//         require('./server/routes/product_route'),
//         require('./server/routes/marketing_route'),
//         require('./server/routes/user_route'),
//         require('./server/routes/order_route'),
//         require('./server/routes/test_route'), // for test
//         require('./server/routes/updateMySQL_route'), // for update crawler data to mySQL
//         require('./server/routes/cart_route'), // for cart
//         require('./server/routes/collection_route'), // for collection
//         require('./server/routes/rating_route'), // fot rating
//         require('./server/routes/recommend_route'), // fot rating
//         require('./server/routes/point_route'), // fot rating
//         require('./server/routes/game_route') // fot rating
//     ]
// );

// app.use(function(req, res, next) {
//     res.status(404).sendFile(__dirname + '/public/404.html');
// });

// // Error handling
// app.use(function(err, req, res, next) {
//     console.log(err);
//     res.status(500).send('Internal Server Error');
// });

if (NODE_ENV != 'production'){
    app.listen(port, () => {console.log(`Listening on port: ${port}`);});
}

module.exports = app;
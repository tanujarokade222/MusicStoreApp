const express = require("express");
const session = require('express-session');
const bodyParser = require('body-parser');
const jsonBodyParser = bodyParser.json();
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");
const homeRoutes = require("./routes/home");
const buyNowRoutes = require("./routes/buyNow");
const myOrderRoutes = require("./routes/myOrder");
const myCartRoutes = require("./routes/myCart");
const pageNotFoundRoutes = require("./routes/pageNotFound");
//const apiProductRoutes = require("./routes/api_product");
//const sqliteConfig = require('./config/sqlite');
const mongoConfig = require('./config/mongodb');

const app = express();

app.use(session({ secret: 'ssshhhh', saveUninitialized: true, resave: true }));

app.set('view engine', 'pug');
app.set('views', 'views');
// sqliteConfig.connect();
mongoConfig.connect();
//app.use(jsonBodyParser);
app.use(bodyParser.urlencoded({ extended: false }));

//app.use('/api/Product', apiProductRoutes)
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/home', homeRoutes);
app.use('/buyNow', buyNowRoutes);
app.use('/myOrder', myOrderRoutes);
app.use('/myCart', myCartRoutes);
app.use('/images', express.static(process.cwd() + '/images'))
app.use('/', (req, res) => {
    res.status(200).send("<h1>Page Not Found</h1>");
});

app.listen("8060");
console.log("Express is listening on 8060");
var sess;
console.log("Express session created");
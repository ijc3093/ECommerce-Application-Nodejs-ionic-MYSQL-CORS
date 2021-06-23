const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require("cors");
const app = express();

const db = require("./connection/db");

var corsOptions = {
  //This is from frontend (Angular 8)
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json using postman
app.use(bodyParser.json()); 


// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Chukz application." });
});


// const {getHomePage} = require('./routes/index');
// const {addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');
const port = process.env.PORT || 8080; 

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Import routes Admin only
require("./admin/routes/bus.routes.js")(app);
require("./admin/routes/mission.routes.js")(app);


// import routes
const departmentRoutes = require('./routes/department');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const shippingRoutes = require('./routes/shipping');
const customerRoutes = require('./routes/customer');
const orderRoutes = require('./routes/order');


app.get('/', function (request, response, next) {
  db.query("SELECT * FROM category", function (error, rows) {
        return response.json(rows);
    });
});


app.get("/", (req, res) => {
  res.json({ message: "Welcome to Chukz application." });
});


// set routes to api
app.use('/api/department', departmentRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);
app.use('/api/shipping', shippingRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/order', orderRoutes);

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Server running on port: ${port}`);
});
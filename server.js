const db = require("./models");
const path = require("path");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;

db.sequelize.sync().then(function() {
  console.log('Database connection has been established!');
});



//Parses requests 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Directs server to use "app/public" for static files
app.use(express.static(path.join(__dirname, 'public')));

//Routes for sever requests
require("./routes/api-routes")(app);
require('./routes/html-routes')(app);

//Initiates server listening on port
app.listen(PORT, function(){
  console.log(`Now listening on PORT ${PORT}`)
}); 
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

require('dotenv').config();
require('./utils/mongoose-connect');
// Set port
const port = 8000;
app.set('port', port);

app.use(helmet());
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  cors({
    origin: '*',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  }),
);
app.use(bodyParser.json({limit: '900mb', type:'application/json'}));
app.use(bodyParser.urlencoded({ limit: '900mb', extended: true }));

// Test hello world
app.get('/', function (req, res) {
   res.send("hello success");
})

app.use(function (req, res, next) {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Credentials", "true");
   res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
   res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
   next();
});

// Run server
const router = require ('./routers');
app.use('/', router);
app.listen(port, function () {
  console.log(`Server is listening on ${port}`);
});
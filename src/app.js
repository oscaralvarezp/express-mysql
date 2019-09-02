// requires modules of node_modules
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');

// Importing Routes
const customersRoutes = require('./routes/customer');

// Initializerers
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(morgan('dev'));
const dataConection = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: 3306,
    database: 'crudmysqlnode'
};
app.use(myconnection(mysql, dataConection, 'single'));
app.use(express.urlencoded({extended: false}));
// Routes
app.use('/', customersRoutes);


// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
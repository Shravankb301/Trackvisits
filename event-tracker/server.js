//importing required packages 
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// creating and instance of express
const app = express();
const port = 3000;

app.use(bodyParser.json());

//MySQL connection setup
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'password',
    database: 'Analytics'
});

/*
mysql> create user 'myuser'@'localhost' identified by 'password';
mysql> grant all privileges on analytics.* to 'myuser'@'localhost';
*/
connection.connect((err) => {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});


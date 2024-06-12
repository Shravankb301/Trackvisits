const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

var db = mysql.createConnection({
  host: "localhost",
  user:"root",
  password: "Password@123", 
  database: "analytics",
  
})

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database', err);
    return;
  }
  console.log('Connected to SQL!');
});

app.post('/trackEvent', (req,res) =>{
  const {eventType, eventProperties, sessionId, timestamp} = req.body;
  let date = new Date(timestamp);
  let mysqlFormattedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  const query = 'INSERT INTO events (event_type, event_properties, session_id, timestamp) VALUES (?, ?, ?, ?)';  
  db.query(query, [eventType, JSON.stringify(eventProperties), sessionId, mysqlFormattedDate], (err, result) => {
    if(err){
      console.error('Error saving event to database', err);
      res.status(500).send('Error saving event to database');
      return
    }
    res.send({success: true, id: result.insertId});
  })
})

app.get('/heatMap', (req, res) => {
  const url = req.query.url;
  const query = 'SELECT x, y FROM events WHERE event_type = "click" AND url = ?'; 
  db.query(query, [url], (err, result) => {
    if(err){
      console.error('Error fetching events from database', err);
      res.status(500).send('Error fetching events from database');
      return
    }
    res.send(result);
  });
});

const PORT = 4560;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
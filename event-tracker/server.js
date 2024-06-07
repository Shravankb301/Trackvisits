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

  const query = 'INSERT INTO events (eventType, eventProperties, sessionID, timestamp) VALUES (?, ?, ?, ?)';  
  db.query(query, [eventType, JSON.stringify(eventProperties), sessionID, timestamp], (err, result) => {
    if(err){
      console.error('Error saving event to database', err);
      res.status(500).send('Error saving event to database');
      return
    }
    res.send({success: true, id: result.insertId});
  })
})

const PORT = 4560;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
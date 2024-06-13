const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password@123",
  database: "analytics"
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to database', err);
    return;
  }
  console.log('Connected to database!');
});

app.post('/trackEvent', (req, res) => {
  const { eventType, eventProperties, sessionId, timestamp } = req.body;

  let date = new Date(timestamp);
  let mysqlFormattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  if (eventType !== 'mousemove') {
    const query = 'INSERT INTO analytics.events (event_type, event_properties, session_id, timestamp) VALUES (?, ?, ?, ?)';
    insertEvent(query, [eventType, JSON.stringify(eventProperties), sessionId, mysqlFormattedDate], res);
    console.log(eventType, eventProperties, sessionId, mysqlFormattedDate)
  } else {
    const { x, y } = eventProperties;
    const query = 'INSERT INTO analytics.heat_map (x, y, session_id, timestamp) VALUES (?, ?, ?, ?)';
    insertEvent(query, [x, y, sessionId, mysqlFormattedDate], res);
    console.log(query, [x, y, sessionId, mysqlFormattedDate])
  }
});

function insertEvent(query, params, res) {
  db.query(query, params, (err, result) => {
    if (err) {
      console.error('Error saving event to database', err);
      res.status(500).send('Error saving event to database');
      return;
    }
    res.send({ success: true, id: result.insertId });
  });
}

const PORT = 4560;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

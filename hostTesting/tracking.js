const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/heatMap', (req, res) => {
  // Handle the request here
  console.log(req.body);
  res.json({ status: 'ok' });
});

app.listen(4560, () => console.log('Server running on http://localhost:4560'));
const { time } = require("console");

(function (){
    document.addEventListener('click',function(event){
        const {clientx, clienty} = event;
        const data = {
            url: window.location.href,
            x: clientx,
            y: clienty,
            timeStamp: new Date().toISOString()
        }
        //must be chaged to the my server
        fetch ('http://localhost:4560/heatMap',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).catch((err) => {
            console.error('Error sending event to server', err);
        })
    })

})();
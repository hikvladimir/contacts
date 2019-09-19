const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.post('/contact', async (req, res)=> {
    await db.insertMassage({
        email:req.body.email,
        userName:req.body.userName,
        value:req.body.massage,
    })
    console.log(req);
    res.send('OK');
});

app.listen(3001, function () {
    console.log('Example app listening on port 3000!');
});
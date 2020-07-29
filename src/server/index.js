var path = require('path')
const express = require('express')

const app = express()

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();
const keys = { applicationKey:process.env.API_KEY };
app.use(express.static('dist'))

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/appkey', function (req, res) {
    // send an app key back
    res.send(keys)
})
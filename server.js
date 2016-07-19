var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req,res) {
    res.sendFile(__dirname + "/index.html")
})

app.get('/process',(req,res) => {
    console.log(req.query.username)
    var username = req.query.username;
    var password = req.query.password;

    //res.end('Username: '+ username + '\n' + 'Password : '+password);

    response = {
        Username : username,
        Password : password
    };

    res.end(JSON.stringify(response));
})

var server = app.listen(8000,function () {


})

const path = require('path');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(3000);

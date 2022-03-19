const express = require('express');
const path = require('path');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://react-express:react-express@cluster0.hwh3v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

const http = require('http').createServer(app);
http.listen(8080, function(){
    console.log('listening on 8080');
})

app.use(express.static(path.join(__dirname, 'react-project/build')))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'react-project/build/main.html'))
})
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res){
    fs.readdir(`./files`, function(err, files){
        res.render('index', {files: files}); //sending the data to ejs 
    })
});

app.post('/create', function(req, res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('-')}.txt`, req.body.details, function(err){
        res.redirect('/');
    });
});

app.listen(3000, function(){
    console.log("server is running on port 3000");
});

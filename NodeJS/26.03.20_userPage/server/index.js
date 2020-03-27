const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const app = express()

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var url = "mongodb://localhost:27017";


app.post('/register', function (req, res) {
    MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var dbo = client.db("appDB");
        var newData = {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            gender: req.body.gender
        }
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) throw err;
            bcrypt.hash(req.body.password, salt, function (err, hash) {
                if (err) throw err;
                newData.password = hash;
                dbo.collection("user").insertOne(newData, function (err, data) {
                    if (err) throw err;
                    client.close();
                    res.json({
                        message: "User created"
                    });
                });
            });
        });
    });
});

app.post('/login', function (req, res) {
    MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var dbo = client.db("appDB");
        dbo.collection("user").findOne({email:req.body.email},function(err,userData){
            if(err) throw err;
            bcrypt.compare(req.body.password,userData.password,function(err,result){
                if(err) throw err;
                if(result){
                    client.close()
                    res.json({
                        message : "User Successfully verified"
                    })
                }
            })
        })
    });
});


app.listen(3000, () => console.log('Port is listening'));
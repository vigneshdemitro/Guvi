const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb');
const app = express()

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var url = "mongodb://localhost:27017";


app.post('/users', function (req, res) {
    MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var dbo = client.db("demoDB");
        dbo.collection("user").insertOne(req.body, function (err, data) {
            if (err) throw err;
            client.close();
            res.json({
                message: "One document inserted"
            });
        });
    });
});

app.get('/getUsers', function (req, res) {
    MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var dbo = client.db("demoDB");
        var userData = dbo.collection("user").find().toArray();
        userData.then(function (data) {
            client.close();
            res.json(data);
        })
            .catch(function (err) {
                client.close();
                res.status(500).json({
                    message: "Error in Server side"
                });
            });
    });
});

app.post('/deleteUser', function (req, res) {
    MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var dbo = client.db("demoDB");
        dbo.collection("user").remove({email:req.body}, function (err, data) {
            if (err) throw err;
            client.close();
            res.json({
                message: "One document deleted"
            });
        });
    });
});

app.listen(3000, () => console.log('Port is listening'));
const express = require('express');
const path = require('path');
const app = express();

require("dotenv").config();

// connect MongoDB
let db;
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');
MongoClient.connect(process.env.DB_URL, function(err, client) {
  if(err) {
    return console.log(err)
  }

  db = client.db('WTDDatabase')

  app.listen(process.env.PORT , function(){
    console.log("listening on 8080");
  });
});

app.use(express.static(path.join(__dirname, 'react-wtd/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'react-wtd/build/index.html'));
})

// react router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'react-wtd/build/index.html'));
})
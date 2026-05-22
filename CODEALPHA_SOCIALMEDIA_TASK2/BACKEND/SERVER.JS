const express = require('express');

const app = express();

app.get('/', (req, res) => {

   res.send("Social Media Server Running");

});

app.listen(5000, () => {

   console.log("Server Started");

});
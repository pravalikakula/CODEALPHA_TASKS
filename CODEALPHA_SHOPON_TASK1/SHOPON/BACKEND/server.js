const express = require('express');

const app = express();

app.get('/', (req, res) => {
   res.send("Database Connected");
});

app.listen(5000, () => {
   console.log("Server Started");
});
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const path = require('path');

app.disable('x-powered-by');

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("../front/index.html"));
});

app.listen(3000, function () {
  console.log('Servidor rodando na porta ' + 3000);
});


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const servicosRouter = require('./routes/servico-route');
const path = require('path');

app.disable('x-powered-by');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // Make sure it comes back as json

app.get("/", (req, res) => {
  res.sendFile(path.resolve("../front/index.html"));
});

app.use("/servicos", servicosRouter);
app.use("/clientes", servicosRouter);
app.use("/horarios", servicosRouter);
app.use("/usuarios", servicosRouter);
app.use("/profissionais", servicosRouter);
app.use("/login", servicosRouter);

app.listen(3000, function () {
  console.log('Servidor rodando na porta ' + 3000);
});
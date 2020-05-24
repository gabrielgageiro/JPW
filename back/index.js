const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const path = require('path');

app.disable('x-powered-by');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '5mb'}));

// app.use(express.static('../public'));

// const admRoute = require('./routes/adm-route');
// const animalController = require('./controllers/animal-controller');
// const paginaInicialController = require('./controllers/pagina-inicial-controller');

// app.use('/adm', admRoute);

// app.get("/midia/imagem/:img", (req, res) => {
//   res.sendFile(path.resolve("../uploads/images/" + req.params.img));
// });

// app.get("/midia/audio/:audio", (req, res) => {
//   res.sendFile(path.resolve("../uploads/audios/" + req.params.audio));
// });

// app.get("/public/paginainicial", paginaInicialController.getPublic);
// app.get("/public/animal/:id", animalController.getPublic);

app.listen(3000, function () {
  console.log('Servidor rodando na porta ' + 3000);
});


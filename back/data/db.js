var mongoose = require('mongoose');
var cliente = require('../models/cliente');
var profissional = require('../models/profissional');
var servico = require('../models/servico');
var usuario = require('../models/usuario');
var horario = require('../models/horario');

// mongoose.connect('mongodb://zoo:muse1-zoo@ds051833.mlab.com:51833/museu-zoologia', { useCreateIndex: true, useNewUrlParser: true });

module.exports = {Mongoose: mongoose};
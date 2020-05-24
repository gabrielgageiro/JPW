var mongoose = require('mongoose');
var cliente = require('../models/cliente');
var profissional = require('../models/profissional');
var servico = require('../models/servico');
var usuario = require('../models/usuario');
var horario = require('../models/horario');

mongoose.connect('mongodb://USER:PW@ADRESS:PORT/DBNAME', { useCreateIndex: true, useNewUrlParser: true });

module.exports = {Mongoose: mongoose};
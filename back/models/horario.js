var mongoose = require('mongoose');
var db = require('../data/db');

var horarioSchema = new mongoose.Schema({
    dataHora: { type: Date, required: [true, "Horário é obrigatório"]},
    cliente: db.cliente,
    servico: db.servico,
    profissional: db.profissional
}, {timestamp: true});

mongoose.model('Horario', horarioSchema);

module.exports = {Mongoose: mongoose, HorarioSchema: horarioSchema};
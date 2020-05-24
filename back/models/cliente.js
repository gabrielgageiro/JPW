var mongoose = require('mongoose');

var clienteSchema = new mongoose.Schema({
    nome: { type: String, required: [true, "nome é obrigatório"], index: true },
    telefone: { type: String },
    cpf: { type: String }
}, {timestamp: true});

mongoose.model('Cliente', clienteSchema);

module.exports = {Mongoose: mongoose, ClienteSchema: clienteSchema};
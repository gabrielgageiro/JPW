var mongoose = require('mongoose');

var servicoSchema = new mongoose.Schema({
    nome: {type: String, required: [true, "Nome é obrigatório"], unique: true},
    descricao: {type: String, required: [true, "Descrição não pode ficar em branco"]},

}, {timestamp: true});

servicoSchema.plugin(uniqueValidator, { message: 'Usuário já cadastrado'});

mongoose.model('Servico', servicoSchema);

module.exports = {Mongoose: mongoose, ServicoSchema: servicoSchema};
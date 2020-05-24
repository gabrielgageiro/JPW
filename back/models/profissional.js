var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var profissionalSchema = new mongoose.Schema({
    nome: {type: String, required: [true, "nome é obrigatório"], unique: true, index: true}
}, {timestamp: true});

profissionalSchema.plugin(uniqueValidator, { message: 'Profissional já cadastrado'});

mongoose.model('Profissional', profissionalSchema);

module.exports = {Mongoose: mongoose, ProfissionalSchema: profissionalSchema};